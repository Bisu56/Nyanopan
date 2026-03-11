import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Navbar, Footer } from './Layout';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = () => {
    axios.get('/api/cart')
      .then(res => {
        setCartItems(res.data.cart);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  };

  const updateQty = (id, qty) => {
    if (qty < 1) return;
    axios.post('/update-cart', { product_id: id, product_qty: qty })
      .then(res => {
        if (res.data.status === 200) {
          loadCart();
        }
      })
      .catch(err => console.error(err));
  };

  const removeItem = (id) => {
    axios.post('/delete-cart-item', { product_id: id })
      .then(res => {
        if (res.data.status === 200) {
          loadCart();
          alert('Item removed from cart');
        }
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    const newTotal = cartItems.reduce((acc, item) => acc + (item.product_qty * item.product.selling_price), 0);
    setTotal(newTotal);
  }, [cartItems]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-primary text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 py-10 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="mb-4">Shopping Cart</h2>
          
          {cartItems && cartItems.length > 0 ? (
            <div className="row">
              <div className="col-md-8">
                {cartItems.map((item) => (
                  <div className="card mb-3" key={item.id}>
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-md-2">
                          <img 
                            src={`/upload/product/${item.product.image}`} 
                            className="img-fluid rounded" 
                            alt={item.product.name}
                            onError={(e) => {
                              e.target.src = 'https://via.placeholder.com/100x100?text=Product';
                            }}
                          />
                        </div>
                        <div className="col-md-3">
                          <h5>{item.product.name}</h5>
                          <p className="text-muted">Rs {item.product.selling_price}</p>
                        </div>
                        <div className="col-md-3">
                          <div className="d-flex align-items-center">
                            <button 
                              className="btn btn-outline-secondary btn-sm"
                              onClick={() => updateQty(item.product_id, item.product_qty - 1)}
                            >-</button>
                            <span className="mx-2">{item.product_qty}</span>
                            <button 
                              className="btn btn-outline-secondary btn-sm"
                              onClick={() => updateQty(item.product_id, item.product_qty + 1)}
                            >+</button>
                          </div>
                        </div>
                        <div className="col-md-2">
                          <strong>Rs {item.product_qty * item.product.selling_price}</strong>
                        </div>
                        <div className="col-md-2">
                          <button 
                            className="btn btn-danger btn-sm"
                            onClick={() => removeItem(item.product_id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <h5>Cart Summary</h5>
                    <hr />
                    <div className="d-flex justify-content-between mb-2">
                      <span>Subtotal</span>
                      <span>Rs {total}</span>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                      <span>Total</span>
                      <strong>Rs {total}</strong>
                    </div>
                    <Link to="/checkout" className="btn btn-primary w-100">
                      Proceed to Checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-5">
              <h4>Your cart is empty</h4>
              <Link to="/category" className="btn btn-primary mt-3">Continue Shopping</Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
