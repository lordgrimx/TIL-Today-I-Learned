-> JavaScript motoru (V8 gibi) **tek thread** üzerinde çalışır ve tek bir **call stack**’i vardır. ==🔵Yani aynı anda yalnızca bir fonksiyon yürütülür.== Buna rağmen ==🔵tarayıcı== aynı anda ==🔴timer== bekleyebilir, ==🔴ağ isteği== yapabilir ve ==🔴tıklama dinleyebilir.== Bunun nedeni, bu işleri ==🟡JS motorunun değil **host ortamının** (tarayıcı veya Node) yapmasıdır==.
![[eventLoop1.png]]
## Parçalar

| Kavram                 | Ne Yapar                                                                                                                       |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Call Stack             | O an çalışan senkron kodun yığını. Boşalana kadar başka hiçbir callback çağırılmaz.                                            |
| Macrotask (task) queue | `setTimeout` , `setInterval` , I/O , kullanıcı event’leri , `MessageChannel` , Ana script’in kendisi de **ilk macrotask’tır**. |
| Microtask queue        | Promise reaksiyonları (`.then/.catch/.finally`), `queueMicrotask`, `await` sonrası kod, `MutationObserver`.                    |
| Event loop             | Kuyruklardan sıradaki işi stack’e taşıyan döngü.                                                                               |
## Event loop algoritması (asıl öğrenilmesi gereken kısım)

```
loop:
  1. Macrotask kuyruğundan BİR iş al ve çalıştır (ilk tur = script'in kendisi)
  2. Microtask kuyruğunu TAMAMEN boşalt
     (microtask çalışırken yeni microtask eklenirse o da bu turda çalışır)
  3. Gerekirse render et (requestAnimationFrame → style/layout → paint)
  4. Başa dön
```
## Çıkan Sonuçlar
1. Her Macrotask arasında Microtask kuyruğu tamamen bitirilir. Bu yüzden `Promise.them` her zaman `setTimeout( fn , 0 )` önce çalışır.
2. Microtaskler render'a izin vermez. Sonsuz microtask kuyruğu oluşturursan sayfa donup kalır buna da **Microtask Starvation** denir. ama Macrotasklerde böyle bir durum yok onlar render'a izin verir.
3. **`setTimeout(fn, 0)` “hemen” demek değildir.** “En az 0 ms sonra, sıradaki bir macrotask olarak” demektir. İç içe 5. seviyeden sonra tarayıcı süreyi ~4 ms’ye yükseltir (clamp).

## Tek tek API’ler

**setTimeout(fn, ms)**
- **Ne yapar:** Süre dolunca `fn`’i macrotask kuyruğuna koyar.
- **Ne zaman kullanılır:** Uzun bir işi parçalara bölüp tarayıcıya nefes aldırmak (render, input işleme), gerçekten zaman bazlı gecikme gerektiğinde.
- **Ne zaman kullanılmaz:** “Bu kod biraz sonra çalışsın” diye sıralama hack’i olarak. Bu genelde bir tasarım kokusudur. Animasyon için de uygun değildir, onun için `requestAnimationFrame` var.

**Promise.then(cb)**
- **Ne yapar:** Promise settle olduğunda `cb`’yi microtask olarak sıraya koyar. Promise zaten resolved ise `.then` çağrıldığı anda kuyruğa girer.
- **Tuzak:** `new Promise(executor)` içindeki **executor senkron çalışır**. Asenkron olan yalnızca `.then` callback’idir.

**queueMicrotask(cb)**
- **Ne yapar:** Promise oluşturmadan doğrudan microtask kuyruğa ekler. `Promise.resolve().then(cb)` ile aynı sıraya düşer ama daha ucuz ve niyeti daha açıktır.
- **Farkı:** İçinde hata fırlarsa unhandled rejection olmaz, normal uncaught exception olarak raporlanır.
- **Kullanım alanı:** Library yazarken birden fazla senkron güncellemeyi tek seferde işlemek (batching), ya da bir callback’in bazen senkron bazen asenkron çağrılmasını engellemek (“Zalgo” problemi).

**async/await**
- `async` fonksiyon **ilk `await`’e kadar senkron çalışır.**
- `await x` kabaca `Promise.resolve(x).then(devamı)` demektir. **`await`’ten sonraki satırlar microtask olarak çalışır.**
- `async` fonksiyon her zaman Promise döner.
- Yeni bir mekanizma değildir, Promise + microtask üzerine kurulmuş bir sözdizimidir. Okunabilirlik kazandırır ama sıralama kuralı aynıdır.

## Düzeltmem Gereken Kurallar
1. Bir JS kodunda önce tüm ==🔴senkron== işler çalışır.
2. Bir `callback'i` kuyruğa ekleyen kod çalışmadan o `callback` olmaz.
3. `Promise` Asenkron demek değildir ve `async` fonksiyonu `await'e` kadar ==🔴senkron== çalışır.

**TIL: JS Event Loop.** JavaScript tek bir call stack üzerinde çalışır. Asenkron işleri tarayıcı (Web APIs) yürütür ve bitince callback’leri kuyruğa koyar. Event loop her turda **bir** macrotask çalıştırır (setTimeout, I/O, event; ilk macrotask script’in kendisi), ardından microtask kuyruğunu **tamamen** boşaltır (Promise.then, queueMicrotask, await sonrası kod), sonra render’a fırsat verir. Bu yüzden Promise callback’leri her zaman `setTimeout(fn, 0)`’dan önce çalışır. Promise executor’ı ve async fonksiyonun ilk `await`’e kadarki kısmı ise senkrondur. Sonsuz microtask zinciri render’ı engeller, ağır işi bölmek için macrotask ile yield etmek gerekir.
