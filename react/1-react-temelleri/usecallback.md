# useCallback

## Ne öğrendim

`useCallback`, React component'leri yeniden render edildiğinde fonksiyon referansının gereksiz yere yeniden oluşturulmasını önlemek için kullanılan bir Hook'tur. Fonksiyonun referansını dependency array içerisindeki değerler değişmediği sürece korur. Özellikle `React.memo` ile optimize edilmiş child component'lere fonksiyon prop'u gönderirken gereksiz render işlemlerini önlemeye yardımcı olur.

## Örnek kod

```jsx
import { useState, useCallback, memo } from "react";

const Child = memo(function Child({ onClick }) {
  console.log("Child rendered");

  return <button onClick={onClick}>Increase Count</button>;
});

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>
      <Child onClick={handleClick} />
    </div>
  );
}
```

## Notlar

- `useCallback`, fonksiyonun kendisini değil referansını memoize eder.
- Dependency array değişmediği sürece fonksiyon referansı korunur.
- Kullanılan state ve props değerleri dependency array içerisinde bulunmalıdır.
- Eksik dependency kullanımı stale closure (eski değer yakalama) problemine neden olabilir.
- `React.memo` ile birlikte kullanıldığında child component'lerin gereksiz render edilmesini önleyebilir.
- Her fonksiyonda kullanılması gerekmez; gerçek bir optimizasyon ihtiyacı olduğunda tercih edilmelidir.
- State güncellemelerinde functional update (`prev => prev + 1`) kullanılarak gereksiz dependency ihtiyacı ortadan kaldırılabilir.