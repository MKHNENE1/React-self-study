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
import Menu from "./pages/Menu";

function App() {
  scrollTo(0, 0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [items, setItems] = useState([
    {
      id: 1,
      name: "Big frise",
      count: 0,
      isInCart: false,
      price: 30,
      categoryId: 1,
    },
    {
      id: 2,
      name: "Big burger",
      count: 0,
      isInCart: false,
      price: 50,
      categoryId: 2,
    },
    {
      id: 3,
      name: "Big water",
      count: 0,
      isInCart: false,
      price: 10,
      categoryId: 3,
    },
    {
      id: 4,
      name: "Medium frise",
      count: 0,
      isInCart: false,
      price: 20,
      categoryId: 1,
    },
    {
      id: 5,
      name: "Medium burger",
      count: 0,
      isInCart: false,
      price: 40,
      categoryId: 2,
    },
    {
      id: 6,
      name: "Medium water",
      count: 0,
      isInCart: false,
      price: 7,
      categoryId: 3,
    },
    {
      id: 7,
      name: "Small frise",
      count: 0,
      isInCart: false,
      price: 10,
      categoryId: 1,
    },
    {
      id: 8,
      name: "Small burger",
      count: 0,
      isInCart: false,
      price: 30,
      categoryId: 2,
    },
    {
      id: 9,
      name: "Small water",
      count: 0,
      isInCart: false,
      price: 5,
      categoryId: 3,
    },
  ]);

  const [categories, setCategories] = useState([
    { id: 0, name: "All" },
    { id: 1, name: "Fries" },
    { id: 2, name: "Burger" },
    { id: 3, name: "Water" },
  ]);

  const pageSize = 6;
  const [selectedCategory, setSelectedCategory] = useState(0);

  const [currentPage, setCurrentPage] = useState(1);

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

  // function handelDelete(item) {
  //   const newItems = [...items];
  //   const itemIndex = newItems.indexOf(item);
  //   setItems(newItems.filter((item, index) => index != itemIndex));
  // }

  function handelAddToCart(id) {
    // setItems({...items, items.filter((item)=> item.id == id)})
    const newItems = [...items];
    const findItem = newItems.findIndex((item) => item.id == id);
    newItems[findItem] = { ...newItems[findItem] };
    newItems[findItem].isInCart = !newItems[findItem].isInCart;
    newItems[findItem].count = 1;
    setItems(newItems);
  }

  function handleSelectCategory(id) {
    setSelectedCategory(id);
    setCurrentPage(1);
  }

  function handleChangeCurrentPage(page) {
    setCurrentPage(page);
  }

  let itemsToRender = selectedCategory
    ? items.filter((item) => item.categoryId === selectedCategory)
    : items;

  const noOfPages = Math.ceil(itemsToRender.length / pageSize);
  const startPage = (currentPage - 1) * pageSize;
  itemsToRender = itemsToRender.slice(startPage, pageSize + startPage);
  // console.log(itemsToRender);

  return (
    <BrowserRouter>
      <Navbar
        noOfItems={items.filter((item) => item.isInCart).length}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />
      <main className="container mx-auto mt-3">
        <Routes>
          <Route
            path="/"
            element={
              <Menu
                currentPage={currentPage}
                items={itemsToRender}
                categories={categories}
                handelAddToCart={handelAddToCart}
                selectedCategory={selectedCategory}
                handleSelectCategory={handleSelectCategory}
                noOfPages={noOfPages}
                handleChangeCurrentPage={handleChangeCurrentPage}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                isLoggedIn={isLoggedIn}
                items={items.filter((item) => item.isInCart)}
                handelClick={handelClick}
                handelReset={handelReset}
                handelDelete={handelAddToCart}
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
