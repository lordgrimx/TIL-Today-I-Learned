# Katkı ve ilerleme kuralları

Bu repo bir öğrenme günlüğü. Yol haritası ilerlemesi maddelerdeki checkbox'lardan otomatik hesaplanır.

## Checkbox formatı

- Yol haritası maddeleri şu biçimde yazılır: `- [ ] Konu adı` (yapılmadı) veya `- [x] Konu adı` (yapıldı).
- `- [X]`, `* [x]`, `+ [x]` ve `1. [x]` biçimleri de sayılır. Girintili maddeler de okunur.
- Aşamalar `## ` başlıklarıdır. Bir madde, üstündeki en yakın `## ` başlığının aşamasına girer. `### ` başlıklar aşama sayılmaz.
- Kod bloklarındaki (```` ``` ```` veya `~~~`) checkbox'lar sayılmaz.
- Bir konuyu ancak AI'a ya da docs'a bakmadan kendim yazabildiğimde `[x]` yaparım. Bu, klasör README'lerindeki "Kural" satırıyla aynıdır.

## Genel ilerleme tablosu

- Ana `README.md` içindeki tablo `<!-- PROGRESS:START -->` ile `<!-- PROGRESS:END -->` arasında üretilir. Bu iki satır arasını elle düzenlemeyin; bir sonraki çalıştırmada silinir.
- Yerelde güncellemek için: `node scripts/update-progress.mjs`
- Önizleme (dosyaya yazmaz): `node scripts/update-progress.mjs --dry-run`
- `main` dalına `.md` dosyası içeren bir push yapıldığında `.github/workflows/update-progress.yml` çalışır ve değişiklik varsa README'yi kendisi commit eder. Bu commit `[skip ci]` içerdiği için tekrar çalışmaz.

## Tarama kapsamı

- Tarama, repo kökündeki klasörlerde yapılır. `scripts`, `kaynaklar`, `gunluk`, `docs` ve `node_modules` atlanır.
- Checkbox içermeyen klasörler tabloya girmez.
- Yeni bir yol haritası klasörü eklediğinizde `README.md` içinde maddeleri checkbox olarak yazmanız yeterli. Tablo bir sonraki çalıştırmada kendiliğinden görünür.
- Klasörün tablodaki adını değiştirmek için `scripts/update-progress.mjs` içindeki `LABELS` sözlüğüne satır ekleyin.
