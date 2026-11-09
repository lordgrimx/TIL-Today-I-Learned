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
Burada:
- Component oluşur ve `setCount` ile çağırılır.
- State güncellenmek üzere React'e bildirilir.
- React component fonksiyonunu tekrar çağırır.
- yeni JSX oluşturulur.
- React eski ve yeni çıktıyı karşılaştırır.
- Gerekli DOM değişikliklerini uygular.
#### **Unmounting**
- Componentin DOM'dan kaldırılması
```jsx
import { useState } from "react";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        Toggle
      </button>

      {show && <User />}
    </div>
  );
}

function User() {
  return <h1>Sabri</h1>;
}
```
`show` false olduğunda `User` component'i kaldırılır.
Peki bu sırada neler olur?
- Component DOM'dan kaldırılır.
- Component'e ait Effect cleanup fonksiyonları çalıştırılır.
- Component'in aktif yaşam döngüsü sona erer.

## Örnek kod

```jsx
import { useEffect } from "react";

function WindowSize() {
  useEffect(() => {
    const handleResize = () => {
      console.log(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <h1>Window Resize Listener</h1>;
}
```
Burada:
- Mount: Event listener eklenir.
- Updating: Dependency değişmediği için Effect tekrar çalışmaz.
- Unmount: Event listener kaldırılır.

Cleanup kullanmazsak component kaldırıldıktan sonra bile listener aktif kalabilir. Bu da gereksiz kaynak tüketimine ve hatalara yol açabilir.
## Notlar

React Component Lifecycle konusunu öğrendim. Component yaşam döngüsünün Mounting (ilk oluşturulma), Updating (state veya props değişimiyle güncellenme) ve Unmounting (ekrandan kaldırılma) olmak üzere üç aşamadan oluştuğunu kavradım. `useEffect` hook'unun bu aşamalardaki çalışma mantığını, dependency array kullanımını ve cleanup fonksiyonunun ne zaman çalıştığını öğrendim. Ayrıca event listener, timer ve aboneliklerin cleanup ile temizlenmesinin önemini anladım.
