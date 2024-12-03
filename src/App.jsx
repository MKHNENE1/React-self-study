import { useState } from "react";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";

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
    <BrowserRouter>
      <Navbar noOfItems={items.filter((item) => item.count > 0).length} />
      <main className="w-fit mx-auto mt-3">
        <Routes>
          <Route
            path="/"
            element={
              <Cart
                items={items}
                handelClick={handelClick}
                handelReset={handelReset}
                handelDelete={handelDelete}
              />
            }
          />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
