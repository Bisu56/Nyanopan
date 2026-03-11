import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Navbar, Footer } from './Layout';

const Checkout = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [total, setTotal] = useState(0);
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    pincode: ''
  });

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      navigate('/login');
      return;
    }
    
    const user = JSON.parse(userData);
    setUser(user);
    setFormData(prev => ({
      ...prev,
      fname: user.name?.split(' ')[0] || '',
      lname: user.name?.split(' ').slice(1).join(' ') || '',
      email: user.email || ''
    }));

    axios.get('/api/cart')
      .then(res => {
        setCartItems(res.data.cart);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [navigate]);

  useEffect(() => {
    const newTotal = cartItems.reduce((acc, item) => acc + (item.product_qty * item.product.selling_price), 0);
    setTotal(newTotal);
  }, [cartItems]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const orderData = {
      fname: formData.fname,
      lname: formData.lname,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      city: formData.city,
      country: formData.country,
      pincode: formData.pincode,
      payment_mode: 'COD',
      payment_id: ''
    };

    axios.post('/place-order', orderData)
      .then(res => {
        if (res.data.status === 200) {
          alert('Order placed successfully!');
          navigate('/my-order');
        }
      })
      .catch(err => {
        console.error(err);
        alert('Failed to place order');
      });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-primary text-xl">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 py-10 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="mb-4">Checkout</h2>
          
          <div className="row">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header">
                  <h5>Billing Details</h5>
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label>First Name</label>
                        <input 
                          type="text" 
                          name="fname" 
                          className="form-control"
                          value={formData.fname}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label>Last Name</label>
                        <input 
                          type="text" 
                          name="lname" 
                          className="form-control"
                          value={formData.lname}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label>Email</label>
                        <input 
                          type="email" 
                          name="email" 
                          className="form-control"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label>Phone</label>
                        <input 
                          type="text" 
                          name="phone" 
                          className="form-control"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label>Address</label>
                      <textarea 
                        name="address" 
                        className="form-control"
                        rows="3"
                        value={formData.address}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    <div className="row">
                      <div className="col-md-4 mb-3">
                        <label>City</label>
                        <input 
                          type="text" 
                          name="city" 
                          className="form-control"
                          value={formData.city}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label>Country</label>
                        <input 
                          type="text" 
                          name="country" 
                          className="form-control"
                          value={formData.country}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label>Pincode</label>
                        <input 
                          type="text" 
                          name="pincode" 
                          className="form-control"
                          value={formData.pincode}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                      Place Order (COD)
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">
                  <h5>Order Summary</h5>
                </div>
                <div className="card-body">
                  {cartItems && cartItems.map((item) => (
                    <div className="d-flex justify-content-between mb-2" key={item.id}>
                      <span>{item.product.name} x {item.product_qty}</span>
                      <span>Rs {item.product_qty * item.product.selling_price}</span>
                    </div>
                  ))}
                  <hr />
                  <div className="d-flex justify-content-between">
                    <strong>Total</strong>
                    <strong>Rs {total}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
