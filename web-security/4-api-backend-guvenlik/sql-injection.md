# SQL Injection

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

