# Password Hashing

Şifreler veritabanında **asla düz metin** ya da hızlı hash'lerle (MD5, SHA-1, SHA-256) saklanmaz.

- Bilerek yavaş, maliyeti ayarlanabilir algoritmalar kullanılır: **bcrypt, scrypt, Argon2**.
- Her şifre için benzersiz **salt** gerekir; bcrypt ve Argon2 bunu kendi üretir.
- Yavaşlık, brute-force saldırısının maliyetini artırır.
- Ek katman olarak uygulama geneli gizli bir **pepper** kullanılabilir.

```js
const hash = await bcrypt.hash(password, 12);
const dogruMu = await bcrypt.compare(password, hash);
```

