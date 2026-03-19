import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('/api/login', {
        email: formData.email,
        password: formData.password
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
        setError('Login failed. Please try again.');
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="flex justify-between items-center px-10 py-6 max-w-screen-2xl mx-auto">
          <Link to="/" className="text-2xl font-black font-serif text-slate-900 tracking-tighter">
            Nyanopan
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link to="/shop" className="text-slate-600 hover:text-slate-900 transition-colors">Shop</Link>
            <Link to="/about" className="text-slate-600 hover:text-slate-900 transition-colors">Our Story</Link>
            <Link to="/contact" className="text-slate-600 hover:text-slate-900 transition-colors">Contact</Link>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/cart" className="text-slate-600 hover:text-slate-900 transition-colors">
              <span className="material-symbols-outlined">shopping_cart</span>
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-grow pt-24 flex items-center justify-center">
        <div className="w-full max-w-screen-2xl mx-auto px-6 lg:px-10 h-full flex flex-col lg:flex-row gap-0 lg:min-h-[700px] rounded-3xl overflow-hidden shadow-2xl shadow-primary/5">
          <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden group">
            <img alt="Handcrafted woolen felt shoes" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB69b-CDp18uW-aUAGNQvWdgycXrQ49mHozxhtIjmTwoS8teKtNxegliQwWRTRpeaZXgXS-hzzEhV8orF_QPVuhkncxXN7UdBFRE3zs4e9vkkyRoXmqPfyWqT9uWwf1Kuzq10e5aUk9HVDxpSe52og0NLErlOnwCHh7yJTUOrC8LEiWN7hKOuMNntIPUxhp-kg-f2sjdXAHAbpLDSu0G_17beS9KMrxZ_3k0Rm_V3ae28d7eQnwV9WyFWGvU2siTe6d7u9tRuE4pfc" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-12 left-12 right-12 text-white">
              <span className="text-xs font-bold tracking-[0.3em] uppercase mb-4 block">The Art of Softness</span>
              <h2 className="text-4xl font-black mb-4 leading-tight">Woven with Intention,<br />Worn with Soul.</h2>
              <p className="text-lg font-light text-slate-200 max-w-md">Every pair tells the story of high-altitude wool and the hands that felted it.</p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center px-8 py-16 lg:px-20 relative">
            <div className="max-w-md mx-auto w-full">
              <div className="mb-12">
                <h1 className="text-3xl lg:text-4xl font-black text-slate-900 mb-3">Welcome Home</h1>
                <p className="text-slate-500 font-medium">Access your artisanal collection and community.</p>
              </div>

              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm">
                  {error}
                </div>
              )}

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-widest uppercase text-slate-400 ml-1">Email Address</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 text-lg">mail</span>
                    <input 
                      className="w-full h-14 pl-12 pr-4 bg-primary/5 border-none rounded-xl focus:ring-2 focus:ring-primary/20 text-slate-900 placeholder:text-slate-400 font-sans" 
                      placeholder="weaver@nyanopan.com" 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-end ml-1">
                    <label className="text-[10px] font-bold tracking-widest uppercase text-slate-400">Password</label>
                    <Link to="/password/reset" className="text-[10px] font-bold tracking-widest uppercase text-primary hover:text-green-700 transition-colors">Forgot Password?</Link>
                  </div>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 text-lg">lock</span>
                    <input 
                      className="w-full h-14 pl-12 pr-4 bg-primary/5 border-none rounded-xl focus:ring-2 focus:ring-primary/20 text-slate-900 placeholder:text-slate-400 font-sans" 
                      placeholder="••••••••" 
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3 py-2">
                  <input 
                    className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary/20 cursor-pointer" 
                    id="remember" 
                    type="checkbox"
                    name="remember"
                    checked={formData.remember}
                    onChange={handleChange}
                  />
                  <label className="text-sm font-medium text-slate-500 cursor-pointer select-none" htmlFor="remember">Remember Me</label>
                </div>

                <button className="w-full h-14 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:bg-green-600 transition-all active:scale-[0.98] mt-4 flex items-center justify-center gap-2" type="submit">
                  Login
                  <span className="material-symbols-outlined text-xl">arrow_right_alt</span>
                </button>
              </form>

              <div className="mt-12 text-center">
                <p className="text-slate-500 text-sm">
                  New to Nyanopan? 
                  <Link to="/register" className="text-primary font-bold hover:underline ml-1">Join Our Community</Link>
                </p>
              </div>
            </div>

            <div className="absolute top-8 right-8 lg:top-12 lg:right-12">
              <div className="w-16 h-16 rounded-full border border-primary/10 flex items-center justify-center rotate-12">
                <span className="material-symbols-outlined text-primary/40 text-4xl">eco</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full mt-20 bg-slate-900 border-t border-slate-800">
        <div className="flex flex-col items-center gap-8 py-16 px-10 text-center max-w-screen-2xl mx-auto">
          <div className="text-lg font-serif font-bold text-white">Nyanopan</div>
          <div className="flex flex-wrap justify-center gap-8">
            <span className="font-sans text-sm tracking-widest uppercase text-slate-500">Sustainability</span>
            <span className="font-sans text-sm tracking-widest uppercase text-slate-500">Shipping</span>
            <span className="font-sans text-sm tracking-widest uppercase text-slate-500">Returns</span>
            <span className="font-sans text-sm tracking-widest uppercase text-slate-500">Privacy Policy</span>
          </div>
          <div className="flex gap-6">
            <span className="material-symbols-outlined text-slate-400 hover:text-green-500 transition-colors cursor-pointer">potted_plant</span>
            <span className="material-symbols-outlined text-slate-400 hover:text-green-500 transition-colors cursor-pointer">storm</span>
            <span className="material-symbols-outlined text-slate-400 hover:text-green-500 transition-colors cursor-pointer">handyman</span>
          </div>
          <div className="text-slate-400 font-sans text-sm tracking-widest uppercase opacity-80">
            © 2024 Nyanopan Artisanal Felt. Woven with intention.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Login;
