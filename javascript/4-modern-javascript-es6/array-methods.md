# Array Methods

## Ortak Mantık

| Fonksiyon   | Ne Yapar                     | Ne Döndürür                               |
| ----------- | ---------------------------- | ----------------------------------------- |
| `map()`     | Her Elemanı Döndürür         | **Aynı uzunlukta** **yeni dizi**          |
| `filter()`  | Şarta Uyanları Tutar         | Daha Kısa (yada aynı) uzunlukta yeni dizi |
| `reduce()`  | Hepsini Tek Değerde Toplar   | Tek bir değer (Sayı , Obje , dizi ,...)   |
| `find()`    | Şarta Uyan ilk eleman        | firtOrDefault gibi , Tek Eleman           |
| `some()`    | En az biri şarta uyuyor mu ? | `true/false`                              |
| `every()`   | Hepsi şarta uyuyor mu ?      | `true/false`                              |
| `forEach()` | Sadece dolaşır               | `undefined` hiçbir şey yani               |

==🔴Önemli: Bunların hiçbiri orjinal diziyi değiştirmez !==
- React’te state’i değiştirmeden güncellemeyi bu yüzden bu fonksiyonlarla yaparsın.

Örneklerde hep bu diziyi kullanalım:
```js
const urunler = [
  { ad: "Kalem", fiyat: 10, stokta: true },
  { ad: "Defter", fiyat: 45, stokta: false },
  { ad: "Silgi", fiyat: 5, stokta: true },
  { ad: "Çanta", fiyat: 300, stokta: true },
];
```

### 1. `map`: dönüştür

```js
const isimler = urunler.map((urun) => urun.ad);
// ["Kalem", "Defter", "Silgi", "Çanta"]

const kdvli = urunler.map((urun) => ({ ...urun, fiyat: urun.fiyat * 1.2 }));
// fiyatları %20 artmış yeni dizi
```

4 eleman girer, 4 eleman çıkar. React’te liste render ederken kullandığın şey de bu:

```jsx
{urunler.map((u) => <li key={u.ad}>{u.ad}</li>)}
```
### 2. `filter`: ele
Örneklerde hep bu diziyi kullanalım:
```js
const urunler = [
  { ad: "Kalem", fiyat: 10, stokta: true },
  { ad: "Defter", fiyat: 45, stokta: false },
  { ad: "Silgi", fiyat: 5, stokta: true },
  { ad: "Çanta", fiyat: 300, stokta: true },
];
```
Callback `true` döndürürse eleman kalır, `false` döndürürse atılır.

```js
const stoktakiler = urunler.filter((urun) => urun.stokta);
// Kalem, Silgi, Çanta

const ucuzlar = urunler.filter((urun) => urun.fiyat < 50);
// Kalem, Defter, Silgi
```

==🔴React’te bir elemanı silmenin klasik yolu da budur:==   
- `setUrunler(urunler.filter((u) => u.ad !== "Silgi"))`
### 3. `reduce`: biriktir
Örneklerde hep bu diziyi kullanalım:
```js
const urunler = [
  { ad: "Kalem", fiyat: 10, stokta: true },
  { ad: "Defter", fiyat: 45, stokta: false },
  { ad: "Silgi", fiyat: 5, stokta: true },
  { ad: "Çanta", fiyat: 300, stokta: true },
];
```
En zoru bu ama mantığı basit. Elinde bir **akümülatör** (biriktirici) var. Her adımda onu güncelleyip bir sonraki tura veriyorsun.

```js
const toplam = urunler.reduce((acc, urun) => acc + urun.fiyat, 0);
// 360
```

Adım adım şöyle çalışır:

|Tur|`acc` (öncesi)|`urun.fiyat`|Dönen değer → yeni `acc`|
|---|---|---|---|
|başlangıç|0|||
|1|0|10|10|
|2|10|45|55|
|3|55|5|60|
|4|60|300|**360**|

==🔴Sondaki `0`, başlangıç değeri. **Her zaman yaz**, unutmak en sık yapılan hata. `reduce` sadece toplama için değil, tek bir şey üretmen gereken her durumda işe yarar:==

```js
// ada göre obje oluşturma
const sozluk = urunler.reduce((acc, urun) => {
  acc[urun.ad] = urun.fiyat;
  return acc;            // return'ü unutma!
}, {});
// { Kalem: 10, Defter: 45, Silgi: 5, Çanta: 300 }
```
### 4. `find`, `some`, `every`
Örneklerde hep bu diziyi kullanalım:
```js
const urunler = [
  { ad: "Kalem", fiyat: 10, stokta: true },
  { ad: "Defter", fiyat: 45, stokta: false },
  { ad: "Silgi", fiyat: 5, stokta: true },
  { ad: "Çanta", fiyat: 300, stokta: true },
];
```
```js
urunler.find((u) => u.fiyat > 40);   // { ad: "Defter", ... }  (ilk bulduğu)
urunler.find((u) => u.fiyat > 1000); // undefined

urunler.some((u) => !u.stokta);      // true  (en az biri stokta değil)
urunler.every((u) => u.fiyat > 0);   // true  (hepsi 0'dan pahalı)
```

==🔴`find` ile `filter` sık karışır. `filter` her zaman **dizi** döndürür, `find` ise **tek eleman**.==
### 5. `forEach`: sadece dolaş
Örneklerde hep bu diziyi kullanalım:
```js
const urunler = [
  { ad: "Kalem", fiyat: 10, stokta: true },
  { ad: "Defter", fiyat: 45, stokta: false },
  { ad: "Silgi", fiyat: 5, stokta: true },
  { ad: "Çanta", fiyat: 300, stokta: true },
];
```
```js
urunler.forEach((u) => console.log(u.ad));
```

==🔵Hiçbir şey döndürmez. Yeni bir değer üretmek istiyorsan `forEach` yerine `map`, `filter` ya da `reduce` kullan. Sadece yan etki (log, DOM işlemi vb.) için uygundur.==
