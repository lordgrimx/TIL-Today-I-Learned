# Same-Origin Policy ve Origin

```
https://example.com:443
└──────┘ └─────────┘ └─┘
 scheme     host     port
```

- Port yazılmasa bile **varsayılan port** origin'e dahildir: HTTPS **443**, HTTP **80**.
- `https://example.com` ile `https://example.com:8443` **farklı origin**dir.
- Scheme, host veya portten biri farklıysa istek **cross-origin** olur.
- Same-origin policy'nin temeli budur.

