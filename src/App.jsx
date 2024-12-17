import { useState } from "react";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";
import Nested1 from "./components/nested/Nested1";
import Nested2 from "./components/nested/Nested2";
import Nested3 from "./components/nested/Nested3";

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

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Navbar
        noOfItems={items.filter((item) => item.count > 0).length}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />
      <main className="container mx-auto mt-3">
        <Routes>
          <Route
            path="/"
            element={
              <Cart
                isLoggedIn={isLoggedIn}
                items={items}
                handelClick={handelClick}
                handelReset={handelReset}
                handelDelete={handelDelete}
              />
            }
          />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/about" element={<About />}>
            <Route index element={<Nested1 />} />
            <Route path="nested2" element={<Nested2 />} />
            <Route path="nested3" element={<Nested3 />} />
          </Route>
          <Route path="/contact" element={<ContactUs />} />
          <Route
            path="/login"
            element={
              <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
