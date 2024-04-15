import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import ProductList from './component/ProductList';
import Cart from './component/Cart';
import Checkout from './component/CheckOut';
import Home from './component/Home';
import LoginPage from './component/LoginPage';
import RegisterPage from './component/RegisterPage';

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
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
        </Routes>
      </div>
    </>
  );
};

export default App;
