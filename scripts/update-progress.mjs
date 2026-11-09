#!/usr/bin/env node
// Yol haritası klasörlerindeki markdown checkbox'larını sayar ve README.md içindeki
// <!-- PROGRESS:START --> / <!-- PROGRESS:END --> arasını günceller.
//
// Kullanım:
//   node scripts/update-progress.mjs            README'yi günceller
//   node scripts/update-progress.mjs --dry-run  Sadece ekrana yazar
//
// Bağımlılık yok, Node 18+ ile çalışır. Çıktıda tarih/saat yoktur; böylece
// veri değişmediği sürece README de değişmez ve gereksiz commit oluşmaz.

import { existsSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const README_PATH = join(ROOT, 'README.md');
const START = '<!-- PROGRESS:START -->';
const END = '<!-- PROGRESS:END -->';
const DRY_RUN = process.argv.includes('--dry-run');

// Yol haritası olmayan klasörler taranmaz.
const IGNORED_DIRS = new Set(['node_modules', 'scripts', 'kaynaklar', 'gunluk', 'docs']);

// Görünen adlar. Burada olmayan klasör, klasör adıyla listelenir.
const LABELS = {
  javascript: 'JavaScript',
  react: 'React',
  'web-security': 'Web Güvenliği',
};

// Kabul edilen biçimler: "- [ ] x", "* [x] x", "+ [X] x", "1. [ ] x", girintili olabilir.
const CHECKBOX = /^\s*(?:[-*+]|\d+[.)])\s+\[([ xX])\](?:\s|$)/;
// Aşama = "## " başlığı (### ve daha derin başlıklar aşama sayılmaz).
const STAGE_HEADING = /^##\s+(\S.*?)\s*$/;
const FENCE = /^\s*(```|~~~)/;
const NO_STAGE = 'Genel';

function listMarkdownFiles(dir, out = []) {
  for (const name of readdirSync(dir).sort()) {
    if (name.startsWith('.') || name === 'node_modules') continue;
    const path = join(dir, name);
    if (statSync(path).isDirectory()) {
      listMarkdownFiles(path, out);
    } else if (name.endsWith('.md')) {
      out.push(path);
    }
  }
  return out;
}

// Dosyadaki checkbox maddelerini { stage, done } listesi olarak döndürür.
function scanFile(path) {
  const items = [];
  let stage = NO_STAGE;
  let inFence = false;

  for (const line of readFileSync(path, 'utf8').split(/\r?\n/)) {
    if (FENCE.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;

    const heading = STAGE_HEADING.exec(line);
    if (heading) {
      stage = heading[1];
      continue;
    }

    const box = CHECKBOX.exec(line);
    if (box) {
      items.push({ stage, done: box[1] !== ' ' });
    }
  }
  return items;
}

// Checkbox içeren her üst düzey klasörü bulur.
function discoverFolders() {
  return readdirSync(ROOT)
    .filter((name) => !name.startsWith('.') && !IGNORED_DIRS.has(name))
    .filter((name) => statSync(join(ROOT, name)).isDirectory())
    .sort()
    .map((name) => {
      const items = listMarkdownFiles(join(ROOT, name)).flatMap(scanFile);
      return { name, items };
    })
    .filter((folder) => folder.items.length > 0);
}

function summarize(items) {
  const total = items.length;
  const done = items.filter((item) => item.done).length;
  const pct = total === 0 ? 0 : Math.round((done / total) * 100);
  return { done, total, pct };
}

function bar(pct) {
  const filled = Math.round(pct / 10);
  return `\`${'█'.repeat(filled)}${'░'.repeat(10 - filled)}\``;
}

function escapeCell(text) {
  return text.replace(/\|/g, '\\|');
}

function groupByStage(items) {
  const groups = new Map();
  for (const item of items) {
    if (!groups.has(item.stage)) groups.set(item.stage, []);
    groups.get(item.stage).push(item);
  }
  return groups;
}

function folderHref(name) {
  return existsSync(join(ROOT, name, 'README.md')) ? `${name}/README.md` : `${name}/`;
}

function renderBlock(folders) {
  const lines = [START, '', '| Klasör | Tamamlanan | Toplam | Oran | İlerleme |', '| --- | :---: | :---: | :---: | --- |'];

  const allItems = [];
  for (const folder of folders) {
    const label = LABELS[folder.name] ?? folder.name;
    const s = summarize(folder.items);
    allItems.push(...folder.items);
    lines.push(`| [${label}](${folderHref(folder.name)}) | ${s.done} | ${s.total} | ${s.pct}% | ${bar(s.pct)} |`);
  }
  const t = summarize(allItems);
  lines.push(`| **Toplam** | **${t.done}** | **${t.total}** | **${t.pct}%** | ${bar(t.pct)} |`);

  for (const folder of folders) {
    const label = LABELS[folder.name] ?? folder.name;
    lines.push('', '<details>', `<summary><b>${label}</b>: aşamalara göre</summary>`, '');
    lines.push('| Aşama | Tamamlanan | Toplam | Oran | İlerleme |', '| --- | :---: | :---: | :---: | --- |');
    for (const [stage, items] of groupByStage(folder.items)) {
      const s = summarize(items);
      lines.push(`| ${escapeCell(stage)} | ${s.done} | ${s.total} | ${s.pct}% | ${bar(s.pct)} |`);
    }
    lines.push('', '</details>');
  }

  lines.push('', '_Bu tablo `scripts/update-progress.mjs` ile üretilir, elle düzenlemeyin. Kurallar için [CONTRIBUTING.md](CONTRIBUTING.md)._', '', END);
  return lines.join('\n');
}

function main() {
  const folders = discoverFolders();
  if (folders.length === 0) {
    console.error('Hiç checkbox bulunamadı; README güncellenmedi.');
    process.exit(1);
  }

  for (const folder of folders) {
    const s = summarize(folder.items);
    console.log(`${folder.name}: ${s.done}/${s.total} (%${s.pct})`);
  }

  const block = renderBlock(folders);
  if (DRY_RUN) {
    console.log(block);
    return;
  }

  const readme = readFileSync(README_PATH, 'utf8');
  const start = readme.indexOf(START);
  const end = readme.indexOf(END);
  if (start === -1 || end === -1 || end < start) {
    console.error(`README.md içinde ${START} ve ${END} işaretçileri bulunamadı.`);
    process.exit(1);
  }

  const next = readme.slice(0, start) + block + readme.slice(end + END.length);
  if (next === readme) {
    console.log('README.md zaten güncel.');
    return;
  }
  writeFileSync(README_PATH, next);
  console.log('README.md güncellendi.');
}

main();
