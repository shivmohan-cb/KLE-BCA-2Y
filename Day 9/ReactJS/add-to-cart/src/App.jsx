import { useState } from "react";
import CartButton from "./components/CartButton";
import SearchBar from "./components/SearchBar";
import { useEffect } from "react";
import Cart from "./components/Cart";
import { Link, Route, Routes } from "react-router";
import ProductList from "./components/ProductList";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");

        const jsonData = await res.json();
        setData(jsonData);
      } catch (er) {
        console.log(er);
      }
    }

    fetchProducts();
  }, []); //dependency array
  console.log(data);

  return (
    <div className="app">
      <header>
        <span>
          <Link to="/">Logo</Link>
        </span>
        <SearchBar />
        <CartButton />
      </header>
      <main>
          <Routes>
            <Route index element={<ProductList data={data} />} />
            <Route path="cart" element={<Cart />} />
          </Routes>
      </main>
    </div>
  );
};
export default App;
