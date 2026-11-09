# CORS

- CORS, tarayıcının **başka bir origin'den gelen cevabı okuyup okuyamayacağını** belirleyen bir izin mekanizmasıdır.
- Sunucuyu saldırılardan **korumaz**; yalnızca tarayıcı tarafındaki okuma erişimini sınırlar.
- `Access-Control-Allow-Origin: *` herkese okuma izni verir (credentials ile birlikte kullanılamaz).
- Basit olmayan isteklerde tarayıcı önce `OPTIONS` ile **preflight** yapar; sunucu izin verdiği method ve header'ları bildirir.
- API'yi gerçekten korumak için authentication/authorization, CSRF önlemleri ve rate limiting gerekir.
- CORS sunucuda ayarlanır; client'ta proxy ile "CORS'u kapatmak" güvenlik açığıdır.

