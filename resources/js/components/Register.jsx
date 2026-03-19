import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    newsletter: false
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.password_confirmation) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('/register', {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        password_confirmation: formData.password_confirmation
      });

      if (response.data.status === 200) {
        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('token', response.data.token);
        window.location.href = '/';
      }
    } catch (err) {
      if (err.response && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError('Registration failed. Please try again.');
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="flex justify-between items-center px-10 py-6 max-w-screen-2xl mx-auto">
          <Link to="/" className="text-2xl font-black font-serif text-slate-900 tracking-tighter">Nyanopan</Link>
          <div className="hidden md:flex items-center gap-10">
            <Link to="/shop" className="text-slate-600 hover:text-slate-900 transition-colors">Shop</Link>
            <Link to="/about" className="text-slate-600 hover:text-slate-900 transition-colors">Our Story</Link>
            <Link to="/contact" className="text-slate-600 hover:text-slate-900 transition-colors">Contact</Link>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/cart" className="hover:text-green-600 transition-all duration-300">
              <span className="material-symbols-outlined">shopping_cart</span>
            </Link>
          </div>
        </div>
      </nav>

      <main className="min-h-screen pt-24 flex flex-col md:flex-row">
        <div className="hidden md:flex md:w-1/2 relative overflow-hidden bg-slate-100">
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-transparent to-slate-100/10"></div>
          <img alt="Artisanal wool and tools" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQ9XLlUqqIIoTwPYaqE1x8caXEC9Aro0mDOG9P1Prdr-3dd3SHN5iUfGq6Vuse5a_o_h5ptK3OryCYaomKJqUIzn4bikOGAXn1sjxCH9U_HXpnl_qH4rcvMGG2uvXVLPf5Iw_-eylFy99ZHB0hN-dA4y6rtEkP_NkdiOm7hCjgmRnKrZpI3Vi5nIvBUb8uEUGqRIFwgx28ppwiPPli0YhrBCID4Em9ICcca0LTtmln2QicNjvonPfgzhQpZDsWBmsIOzowotrevkc" />
          <div className="relative z-20 flex flex-col justify-end p-20 w-full h-full">
            <div className="bg-white/80 backdrop-blur-xl p-10 rounded-xl shadow-2xl -rotate-2 max-w-lg">
              <span className="text-xs tracking-widest uppercase text-primary font-bold mb-4 block">Crafting Community</span>
              <h1 className="text-4xl font-black text-slate-900 leading-tight mb-6">Join the Loom.</h1>
              <p className="text-slate-600 text-lg leading-relaxed">Become part of a global collective dedicated to the preservation of artisanal felt techniques and sustainable mountain craft.</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-24 bg-slate-50/30">
          <div className="max-w-md w-full">
            <div className="mb-10">
              <h2 className="text-3xl font-black text-slate-900 mb-2">Create Account</h2>
              <p className="text-slate-500">Step into the world of Nyanopan Artisanal Felt.</p>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm">
                {error}
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-[10px] tracking-widest uppercase text-slate-500 font-bold ml-1">Full Name</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">person</span>
                  <input 
                    className="w-full h-14 pl-12 pr-4 bg-primary/5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-slate-900" 
                    placeholder="Janice Woolery" 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] tracking-widest uppercase text-slate-500 font-bold ml-1">Email Address</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">mail</span>
                  <input 
                    className="w-full h-14 pl-12 pr-4 bg-primary/5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-slate-900" 
                    placeholder="hello@forestloom.com" 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] tracking-widest uppercase text-slate-500 font-bold ml-1">Create Password</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">lock</span>
                  <input 
                    className="w-full h-14 pl-12 pr-4 bg-primary/5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-slate-900" 
                    placeholder="••••••••" 
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] tracking-widest uppercase text-slate-500 font-bold ml-1">Confirm Password</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">lock_reset</span>
                  <input 
                    className="w-full h-14 pl-12 pr-4 bg-primary/5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-slate-900" 
                    placeholder="••••••••" 
                    type="password"
                    name="password_confirmation"
                    value={formData.password_confirmation}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="flex items-start gap-3 py-2">
                <div className="mt-1">
                  <input 
                    className="w-5 h-5 rounded-lg border-slate-300 text-primary focus:ring-primary/20 cursor-pointer" 
                    id="journal" 
                    type="checkbox"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleChange}
                  />
                </div>
                <label className="text-sm text-slate-500 leading-relaxed cursor-pointer" htmlFor="journal">
                  Sign me up for the Nyanopan Journal and community updates
                </label>
              </div>

              <button className="w-full h-14 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:translate-y-[-2px] active:translate-y-[0px] active:scale-95 transition-all flex items-center justify-center gap-2" type="submit">
                Create Account
              </button>

              <div className="pt-6 text-center">
                <p className="text-slate-500 text-sm">
                  Already have an account? 
                  <Link to="/login" className="text-primary font-bold hover:underline ml-1">Log in here</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>

      <footer className="w-full mt-20 bg-slate-900 border-t border-slate-800">
        <div className="flex flex-col items-center gap-8 py-16 px-10 text-center">
          <div className="text-lg font-serif font-bold text-white">Nyanopan</div>
          <div className="flex flex-wrap justify-center gap-8 font-sans text-sm tracking-widest uppercase text-slate-400">
            <span className="text-slate-500 hover:text-slate-300 transition-colors">Sustainability</span>
            <span className="text-slate-500 hover:text-slate-300 transition-colors">Shipping</span>
            <span className="text-slate-500 hover:text-slate-300 transition-colors">Returns</span>
            <span className="text-slate-500 hover:text-slate-300 transition-colors">Privacy Policy</span>
            <span className="text-slate-500 hover:text-slate-300 transition-colors">Wholesale</span>
          </div>
          <p className="text-slate-500 text-xs tracking-widest uppercase opacity-80 mt-4">
            © 2024 Nyanopan Artisanal Felt. Woven with intention.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Register;
