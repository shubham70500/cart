import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import ProductList from './component/ProductList';
import Cart from './component/Cart';
import Checkout from './component/CheckOut';
import Home from './component/Home';

const App = () => {
  return (
    <>
    <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
