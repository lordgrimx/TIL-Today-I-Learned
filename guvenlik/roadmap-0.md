### 1. Basamak — Teori: HTTP ve “istemciye güvenme”

Web’de her şey şu döngü: **tarayıcı bir HTTP isteği yollar, sunucu bir HTTP yanıtı döner.** İstek düz metindir ve üç parçası vardır:

- **İstek satırı** — `GET /profil HTTP/1.1` (metot + yol + versiyon)
- **Header’lar** — `Host:`, `Cookie:`, `User-Agent:` gibi anahtar/değer satırları
- **Gövde (body)** — formda gönderdiğin veriler (GET’te genelde boş, POST’ta dolu)
- deneme