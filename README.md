# 📚 TIL – Today I Learned

JavaScript, React ve web güvenliği yolculuğumda öğrendiklerimi, takıldığım yerleri ve ilerlememi tuttuğum yer.

**Kural:** Bir konuyu ancak AI'a ya da docs'a bakmadan kendim yazabildiğimde 🟢 yaparım.

**Son güncelleme:** 5 Kasım 2026 · TIL Day 3

---

## 📈 GitHub istatistikleri

<p>
  <img src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=lordgrimx&theme=github_dark" alt="GitHub profil özeti" width="100%">
</p>

<p>
  <img src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=lordgrimx&theme=github_dark" alt="GitHub istatistikleri" width="49%">
  <img src="https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=lordgrimx&theme=github_dark" alt="Dillere göre repolar" width="49%">
</p>

<sub>Kartlar <a href="https://github.com/vn7n24fzkq/github-profile-summary-cards">github-profile-summary-cards</a> tarafından üretiliyor.</sub>

## 🆕 Son öğrendiğim: Web güvenliği temelleri

> [guvenlik/web-guvenligi.md](guvenlik/web-guvenligi.md)

- **SQL Injection'a karşı birincil önlem parametreli sorgular.** Kullanıcı girdisi sorgu metnine string birleştirmeyle değil, ayrı parametre olarak verilir; böylece veri hiçbir zaman SQL kodu olarak yorumlanmaz.
- **Şifreler DB'de bilerek yavaş hash'lenen bir algoritmayla saklanır.** MD5/SHA gibi hızlı hash'ler değil; maliyeti ayarlanabilir bcrypt, scrypt veya Argon2 + benzersiz salt kullanılır.
- **CORS bir izin mekanizmasıdır, koruma değildir.** Tarayıcının başka origin'den gelen cevabı okuyup okuyamayacağını belirler; API'yi saldırılardan korumaz (auth, CSRF ve rate limiting ayrıca gerekir).
- **Origin = scheme + host + port.** `https://example.com` ile `https://example.com:8443` farklı origin'dir; port yazılmasa da varsayılan port hesaba katılır (HTTPS **443**, HTTP **80**).

## 🎯 Genel ilerleme

| Alan           | İlerleme   | Başlanan konu |
| -------------- | ---------- | :-----------: |
| JavaScript     | `████░░░░░░` |     3 / 7     |
| React          | `░░░░░░░░░░` |     0 / 7     |
| Web Güvenliği  | `██████████` |     4 / 4     |

_İlerleme, 🔴 (Başlamadım) dışındaki konu sayısını gösterir._

```mermaid
%%{init: {"themeVariables": {"pie1": "#2ea043", "pie2": "#d29922", "pie3": "#1f6feb", "pie4": "#da3633", "pieStrokeColor": "#ffffff", "pieStrokeWidth": "2px", "pieOpacity": "1"}}}%%
pie title Konu durumu
    "🟢 Kendim yazabiliyorum" : 1
    "🟡 Docs'la yazabiliyorum" : 1
    "🔵 Öğreniyorum" : 5
    "🔴 Başlamadım" : 11
```

---

## 🗂️ Konular

**Durumlar:** 🔴 Başlamadım · 🔵 Öğreniyorum · 🟡 Docs'a bakarak yazabiliyorum · 🟢 Kendim yazabiliyorum

### JavaScript

| Konu                     | Durum | Not                                |
| ------------------------ | :---: | ---------------------------------- |
| map / filter             |  🟢   | –                                  |
| JS Event Loop            |  🟡   | [js/eventLoop.md](js/eventLoop.md) |
| reduce                   |  🔵   | [js/reduce.md](js/reduce.md)       |
| destructuring & spread   |   🔴   | –                                  |
| async / await & fetch    |   🔴   | –                                  |
| closure                  |   🔴   | –                                  |
| array & object metodları |   🔴   | –                                  |

> Detaylı yol haritası ve konu şablonları: [javascript/README.md](javascript/README.md)

### React

> Detaylı yol haritası ve konu şablonları: [react/README.md](react/README.md)

| Konu                 | Durum | Not |
| -------------------- | :---: | --- |
| useState & useEffect |  🔴   | –   |
| useMemo              |  🔴   | –   |
| React.memo           |  🔴   | –   |
| custom hook          |  🔴   | –   |
| useContext           |   🔴   | –   |
| useReducer           |   🔴   | –   |
| useCallback          |   🔴   | –   |

### Web & Güvenlik

| Konu                        | Durum | Not                                               |
| --------------------------- | :---: | ------------------------------------------------- |
| SQL Injection               |  🔵   | [guvenlik/web-guvenligi.md](guvenlik/web-guvenligi.md) |
| Şifre saklama & hash'leme   |  🔵   | [guvenlik/web-guvenligi.md](guvenlik/web-guvenligi.md) |
| CORS                        |  🔵   | [guvenlik/web-guvenligi.md](guvenlik/web-guvenligi.md) |
| Origin & portlar            |  🔵   | [guvenlik/web-guvenligi.md](guvenlik/web-guvenligi.md) |

> Detaylı yol haritası ve konu şablonları: [web-security/README.md](web-security/README.md)

---

## 📚 Öğrenilen Kaynaklar

> Kitap, doküman, video ve kurs listeleri: [kaynaklar/README.md](kaynaklar/README.md)

- [React](kaynaklar/react.md) · [JavaScript](kaynaklar/javascript.md) · [Web Güvenliği](kaynaklar/web-security.md)

---

## 📓 Günlük

- [Kasım 2026](gunluk/2026-11.md)
- **3 Kasım 2026 · TIL Day 1:** JS Event Loop ve event lifecycle – [not](js/eventLoop.md)
- **4 Kasım 2026 · TIL Day 2:** Array metodları (map / filter / reduce / find / some / every / forEach) – [not](js/map-filter-reduce-find-some-foreach-every.md)
- **5 Kasım 2026 · TIL Day 3:** Web güvenliği (SQL Injection, şifre hash'leme, CORS, Origin) – [not](guvenlik/web-guvenligi.md)

---

## 🔁 Seans sonu rutini

1. Öğrendiğimi ilgili notuna yaz (kendi örneğimle)
2. Günlüğe 3 satır: **Yaptım / Takıldım / Sonraki adım**
3. Durumu değişen konu varsa tabloyu ve grafiği güncelle
4. `git add . && git commit -m "..." && git push`
