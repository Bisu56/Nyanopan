import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Frontend from './components/Frontend';
import Shop from './components/Shop';
import Categories from './components/Categories';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Orders from './components/Orders';
import Contact from './components/Contact';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';

import './bootstrap';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Frontend />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/category" element={<Categories />} />
                <Route path="/view-category/:slug" element={<Products />} />
                <Route path="/view-product/:slug" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/my-order" element={<Orders />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
