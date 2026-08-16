import "./App.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Checkout from "./pages/Checkout";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <Header cart={cart} />
      <Routes>
        <Route
          path="checkout"
          element={<Checkout cart={cart} setCart={setCart} />}
        />
        <Route path="" element={<Home cart={cart} setCart={setCart} />} />
        <Route path="cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
    </>
  );
}

export default App;
