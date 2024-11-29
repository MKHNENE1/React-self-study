import { useState } from "react";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";

function App() {
  const [items, setItems] = useState([
    { name: "frise", count: 0 },
    { name: "burger", count: 0 },
    { name: "water", count: 0 },
  ]);

  function handelClick(num, item) {
    const newItems = [...items];
    const itemIndex = newItems.indexOf(item);
    newItems[itemIndex] = { ...newItems[itemIndex] };
    newItems[itemIndex].count = newItems[itemIndex].count + num;
    setItems(newItems);
  }

  function handelReset() {
    const newItems = items.map((item) => ({ ...item, count: 0 }));
    setItems(newItems);
  }

  function handelDelete(item) {
    const newItems = [...items];
    const itemIndex = newItems.indexOf(item);
    setItems(newItems.filter((item, index) => index != itemIndex));
  }

  return (
    <>
      <Navbar noOfItems={items.filter((item) => item.count > 0).length} />
      <main>
        <Cart
          items={items}
          handelClick={handelClick}
          handelReset={handelReset}
          handelDelete={handelDelete}
        />
      </main>
    </>
  );
}

export default App;
