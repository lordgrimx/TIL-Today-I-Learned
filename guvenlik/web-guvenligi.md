# 🔐 Web Güvenliği Temelleri

SQL Injection, şifre saklama, CORS ve Origin kavramları.

---

## 1. SQL Injection → Parametreli Sorgular

**Birincil önlem: parametreli sorgular (prepared statements).**

Kullanıcı girdisi sorgu metnine string birleştirmeyle eklenmez; ayrı bir parametre olarak gönderilir. Böylece sorgunun **yapısı** ile **veri** birbirinden ayrılır ve girdi hiçbir zaman SQL kodu olarak yorumlanmaz.

```js
// ❌ Yanlış: string birleştirme
db.query(`SELECT * FROM users WHERE email = '${email}'`);

// ✅ Doğru: parametreli sorgu
db.query("SELECT * FROM users WHERE email = $1", [email]);
```

- ORM veya query builder kullanmak tek başına garanti değildir; ham SQL yazılan yerde de parametre kullanılmalı.
- Ek katmanlar: en az yetkili DB kullanıcısı, input validation, WAF. Ama bunlar **birincil** önlem değildir.

## 2. Şifre Saklama → Bilerek Yavaş Hash

Şifreler veritabanında **asla düz metin** ya da hızlı hash'lerle (MD5, SHA-1, SHA-256) saklanmaz.

- Bilerek yavaş, maliyeti ayarlanabilir algoritmalar kullanılır: **bcrypt, scrypt, Argon2**.
- Her şifre için benzersiz **salt** gerekir; bcrypt ve Argon2 bunu kendi üretir.
- Yavaşlık, brute-force saldırısının maliyetini artırır.
- Ek katman olarak uygulama geneli gizli bir **pepper** kullanılabilir.

```js
const hash = await bcrypt.hash(password, 12);
const dogruMu = await bcrypt.compare(password, hash);
```

## 3. CORS → İzin Mekanizması, Koruma Değil

- CORS, tarayıcının **başka bir origin'den gelen cevabı okuyup okuyamayacağını** belirleyen bir izin mekanizmasıdır.
- Sunucuyu saldırılardan **korumaz**; yalnızca tarayıcı tarafındaki okuma erişimini sınırlar.
- `Access-Control-Allow-Origin: *` herkese okuma izni verir (credentials ile birlikte kullanılamaz).
- Basit olmayan isteklerde tarayıcı önce `OPTIONS` ile **preflight** yapar; sunucu izin verdiği method ve header'ları bildirir.
- API'yi gerçekten korumak için authentication/authorization, CSRF önlemleri ve rate limiting gerekir.
- CORS sunucuda ayarlanır; client'ta proxy ile "CORS'u kapatmak" güvenlik açığıdır.

## 4. Origin = Scheme + Host + Port

```
https://example.com:443
└──────┘ └─────────┘ └─┘
 scheme     host     port
```

- Port yazılmasa bile **varsayılan port** origin'e dahildir: HTTPS **443**, HTTP **80**.
- `https://example.com` ile `https://example.com:8443` **farklı origin**dir.
- Scheme, host veya portten biri farklıysa istek **cross-origin** olur.
- Same-origin policy'nin temeli budur.

## Özet

| Konu | Anahtar nokta |
| --- | --- |
| SQL Injection | Birincil önlem parametreli sorgular |
| Şifre saklama | Bilerek yavaş hash + salt (bcrypt / scrypt / Argon2) |
| CORS | İzin mekanizması; koruma değil |
| Origin | scheme + host + port (HTTPS varsayılan 443) |
