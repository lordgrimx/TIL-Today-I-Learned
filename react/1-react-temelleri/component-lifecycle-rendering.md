# Component lifecycle ve rendering mantığı

## Ne öğrendim
![[componenetLifeCycle.png]]

#### **Mountaing**
- Component ilk kez render edildiğinde gerçekleşir.
```javascript
import { useEffect } from "react";

function UserProfile() {
  useEffect(() => {
    console.log("Component mounted");
  }, []);

  return <h1>User Profile</h1>;
}
```
Burada:
- Component oluşur.
- React render işlemini gerçekleştirir.
- DOM Güncellenir
- `useEffect` çalışır

#### **Updating**
- Component'in state veya props değerleri değiştiğinde yeniden render edilmesi gerekebilir.
```javascript
import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count değişti:", count);
  }, [count]);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

## Örnek kod

```jsx

```

## Notlar


