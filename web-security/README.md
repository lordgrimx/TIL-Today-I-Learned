# 🔐 Web Güvenliği Yol Haritası

Web güvenliğinin temellerinden uygulamalı saldırı-savunma çalışmalarına ve ileri mimari konulara kadar giden yolum.

**Kural:** Bir konuyu ancak AI'a ya da docs'a bakmadan kendim yazabildiğimde tamamlandı sayarım.

**Kaynaklar:** [kaynaklar/web-security.md](../kaynaklar/web-security.md)

**Not:** Bu yol haritası hukuka uygun ve kendi kurduğum ortamlarda (lab, kendi uygulamam, CTF) pratik yapmak için. İzinsiz hedeflere karşı hiçbir test yapılmayacak.

---

## 1. Web Security Fundamentals

- [ ] HTTP / HTTPS → [1-web-guvenligi-temelleri/http-https.md](1-web-guvenligi-temelleri/http-https.md)
- [ ] TLS / SSL → [1-web-guvenligi-temelleri/tls-ssl.md](1-web-guvenligi-temelleri/tls-ssl.md)
- [x] Same-Origin Policy → [1-web-guvenligi-temelleri/same-origin-policy.md](1-web-guvenligi-temelleri/same-origin-policy.md)
- [x] CORS → [1-web-guvenligi-temelleri/cors.md](1-web-guvenligi-temelleri/cors.md)
- [ ] DNS ve Domain Security → [1-web-guvenligi-temelleri/dns-domain-security.md](1-web-guvenligi-temelleri/dns-domain-security.md)
- [ ] Cookies ve Security Attributes → [1-web-guvenligi-temelleri/cookies-security-attributes.md](1-web-guvenligi-temelleri/cookies-security-attributes.md)
- [ ] Authentication vs Authorization → [1-web-guvenligi-temelleri/authentication-vs-authorization.md](1-web-guvenligi-temelleri/authentication-vs-authorization.md)
- [ ] Session Management → [1-web-guvenligi-temelleri/session-management.md](1-web-guvenligi-temelleri/session-management.md)
- [ ] Encryption vs Hashing → [1-web-guvenligi-temelleri/encryption-vs-hashing.md](1-web-guvenligi-temelleri/encryption-vs-hashing.md)

## 2. Client-Side Security

- [ ] XSS → [2-client-side-guvenlik/xss.md](2-client-side-guvenlik/xss.md)
- [ ] Reflected XSS → [2-client-side-guvenlik/reflected-xss.md](2-client-side-guvenlik/reflected-xss.md)
- [ ] Stored XSS → [2-client-side-guvenlik/stored-xss.md](2-client-side-guvenlik/stored-xss.md)
- [ ] DOM-based XSS → [2-client-side-guvenlik/dom-based-xss.md](2-client-side-guvenlik/dom-based-xss.md)
- [ ] CSRF → [2-client-side-guvenlik/csrf.md](2-client-side-guvenlik/csrf.md)
- [ ] Clickjacking → [2-client-side-guvenlik/clickjacking.md](2-client-side-guvenlik/clickjacking.md)
- [ ] DOM Clobbering → [2-client-side-guvenlik/dom-clobbering.md](2-client-side-guvenlik/dom-clobbering.md)
- [ ] Open Redirect → [2-client-side-guvenlik/open-redirect.md](2-client-side-guvenlik/open-redirect.md)
- [ ] Content Security Policy (CSP) → [2-client-side-guvenlik/csp.md](2-client-side-guvenlik/csp.md)
- [ ] Subresource Integrity (SRI) → [2-client-side-guvenlik/sri.md](2-client-side-guvenlik/sri.md)
- [ ] Secure DOM Manipulation → [2-client-side-guvenlik/secure-dom-manipulation.md](2-client-side-guvenlik/secure-dom-manipulation.md)

## 3. Authentication & Authorization Security

- [ ] Authentication Mechanisms → [3-auth-guvenlik/authentication-mechanisms.md](3-auth-guvenlik/authentication-mechanisms.md)
- [ ] Session-based Authentication → [3-auth-guvenlik/session-based-authentication.md](3-auth-guvenlik/session-based-authentication.md)
- [ ] JWT Security → [3-auth-guvenlik/jwt-security.md](3-auth-guvenlik/jwt-security.md)
- [ ] OAuth 2.0 → [3-auth-guvenlik/oauth2.md](3-auth-guvenlik/oauth2.md)
- [ ] OpenID Connect → [3-auth-guvenlik/openid-connect.md](3-auth-guvenlik/openid-connect.md)
- [ ] Access / Refresh Tokens → [3-auth-guvenlik/access-refresh-tokens.md](3-auth-guvenlik/access-refresh-tokens.md)
- [ ] Secure Cookie Storage → [3-auth-guvenlik/secure-cookie-storage.md](3-auth-guvenlik/secure-cookie-storage.md)
- [x] Password Hashing (Argon2 / bcrypt) → [3-auth-guvenlik/password-hashing.md](3-auth-guvenlik/password-hashing.md)
- [ ] Multi-Factor Authentication → [3-auth-guvenlik/mfa.md](3-auth-guvenlik/mfa.md)
- [ ] Broken Access Control → [3-auth-guvenlik/broken-access-control.md](3-auth-guvenlik/broken-access-control.md)

## 4. API & Backend Security

- [ ] REST API Security → [4-api-backend-guvenlik/rest-api-security.md](4-api-backend-guvenlik/rest-api-security.md)
- [ ] API Authentication → [4-api-backend-guvenlik/api-authentication.md](4-api-backend-guvenlik/api-authentication.md)
- [ ] Rate Limiting → [4-api-backend-guvenlik/rate-limiting.md](4-api-backend-guvenlik/rate-limiting.md)
- [x] SQL Injection → [4-api-backend-guvenlik/sql-injection.md](4-api-backend-guvenlik/sql-injection.md)
- [ ] NoSQL Injection → [4-api-backend-guvenlik/nosql-injection.md](4-api-backend-guvenlik/nosql-injection.md)
- [ ] SSRF → [4-api-backend-guvenlik/ssrf.md](4-api-backend-guvenlik/ssrf.md)
- [ ] IDOR / BOLA → [4-api-backend-guvenlik/idor-bola.md](4-api-backend-guvenlik/idor-bola.md)
- [ ] Input Validation → [4-api-backend-guvenlik/input-validation.md](4-api-backend-guvenlik/input-validation.md)
- [ ] Output Encoding → [4-api-backend-guvenlik/output-encoding.md](4-api-backend-guvenlik/output-encoding.md)
- [ ] Mass Assignment → [4-api-backend-guvenlik/mass-assignment.md](4-api-backend-guvenlik/mass-assignment.md)
- [ ] Security Headers → [4-api-backend-guvenlik/security-headers.md](4-api-backend-guvenlik/security-headers.md)

## 5. Modern Web Application Security

- [ ] Dependency Vulnerabilities → [5-modern-uygulama-guvenligi/dependency-vulnerabilities.md](5-modern-uygulama-guvenligi/dependency-vulnerabilities.md)
- [ ] npm Audit → [5-modern-uygulama-guvenligi/npm-audit.md](5-modern-uygulama-guvenligi/npm-audit.md)
- [ ] Supply Chain Attacks → [5-modern-uygulama-guvenligi/supply-chain-attacks.md](5-modern-uygulama-guvenligi/supply-chain-attacks.md)
- [ ] Environment Variables → [5-modern-uygulama-guvenligi/environment-variables.md](5-modern-uygulama-guvenligi/environment-variables.md)
- [ ] Secret Management → [5-modern-uygulama-guvenligi/secret-management.md](5-modern-uygulama-guvenligi/secret-management.md)
- [ ] Secure File Uploads → [5-modern-uygulama-guvenligi/secure-file-uploads.md](5-modern-uygulama-guvenligi/secure-file-uploads.md)
- [ ] WebSocket Security → [5-modern-uygulama-guvenligi/websocket-security.md](5-modern-uygulama-guvenligi/websocket-security.md)
- [ ] Web Cache Poisoning → [5-modern-uygulama-guvenligi/web-cache-poisoning.md](5-modern-uygulama-guvenligi/web-cache-poisoning.md)
- [ ] Race Conditions → [5-modern-uygulama-guvenligi/race-conditions.md](5-modern-uygulama-guvenligi/race-conditions.md)
- [ ] SSRF ve Cloud Metadata Risks → [5-modern-uygulama-guvenligi/ssrf-cloud-metadata.md](5-modern-uygulama-guvenligi/ssrf-cloud-metadata.md)

## 6. Security Testing & Pentesting

- [ ] OWASP Top 10 → [6-test-ve-pentest/owasp-top-10.md](6-test-ve-pentest/owasp-top-10.md)
- [ ] OWASP WSTG → [6-test-ve-pentest/owasp-wstg.md](6-test-ve-pentest/owasp-wstg.md)
- [ ] Burp Suite → [6-test-ve-pentest/burp-suite.md](6-test-ve-pentest/burp-suite.md)
- [ ] Browser DevTools Security → [6-test-ve-pentest/browser-devtools-security.md](6-test-ve-pentest/browser-devtools-security.md)
- [ ] Reconnaissance → [6-test-ve-pentest/reconnaissance.md](6-test-ve-pentest/reconnaissance.md)
- [ ] Vulnerability Scanning → [6-test-ve-pentest/vulnerability-scanning.md](6-test-ve-pentest/vulnerability-scanning.md)
- [ ] Manual Security Testing → [6-test-ve-pentest/manual-security-testing.md](6-test-ve-pentest/manual-security-testing.md)
- [ ] Authentication Testing → [6-test-ve-pentest/authentication-testing.md](6-test-ve-pentest/authentication-testing.md)
- [ ] Access Control Testing → [6-test-ve-pentest/access-control-testing.md](6-test-ve-pentest/access-control-testing.md)
- [ ] XSS / SQLi Lab Exercises → [6-test-ve-pentest/xss-sqli-lab-exercises.md](6-test-ve-pentest/xss-sqli-lab-exercises.md)
- [ ] Security Reporting → [6-test-ve-pentest/security-reporting.md](6-test-ve-pentest/security-reporting.md)

## 7. Advanced Security

- [ ] Threat Modeling → [7-ileri-guvenlik/threat-modeling.md](7-ileri-guvenlik/threat-modeling.md)
- [ ] Secure Software Development Lifecycle → [7-ileri-guvenlik/secure-sdlc.md](7-ileri-guvenlik/secure-sdlc.md)
- [ ] Security Architecture → [7-ileri-guvenlik/security-architecture.md](7-ileri-guvenlik/security-architecture.md)
- [ ] Zero Trust Principles → [7-ileri-guvenlik/zero-trust.md](7-ileri-guvenlik/zero-trust.md)
- [ ] Cryptography Fundamentals → [7-ileri-guvenlik/cryptography-fundamentals.md](7-ileri-guvenlik/cryptography-fundamentals.md)
- [ ] Advanced CSP → [7-ileri-guvenlik/advanced-csp.md](7-ileri-guvenlik/advanced-csp.md)
- [ ] Browser Isolation → [7-ileri-guvenlik/browser-isolation.md](7-ileri-guvenlik/browser-isolation.md)
- [ ] Container Security → [7-ileri-guvenlik/container-security.md](7-ileri-guvenlik/container-security.md)
- [ ] CI/CD Security → [7-ileri-guvenlik/cicd-security.md](7-ileri-guvenlik/cicd-security.md)
- [ ] Security Monitoring → [7-ileri-guvenlik/security-monitoring.md](7-ileri-guvenlik/security-monitoring.md)
