import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./screens/Home";
import Footer from "./components/Footer";
import NotFound from "./screens/NotFound";
import Products from "./screens/Products";
import ProductDetails from "./screens/ProductDetails";
import Cart from "./screens/Cart";
import ContactUs from "./screens/ContactUs";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Products />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
