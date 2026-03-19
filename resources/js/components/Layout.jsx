import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    setIsLoggedIn(!!user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/10 px-6 py-4 lg:px-20">
      <div className="flex items-center gap-8">
        <Link to="/" className="flex items-center gap-3 text-slate-900">
          <div className="text-primary">
            <span className="material-symbols-outlined text-3xl">park</span>
          </div>
          <h2 className="font-display text-xl font-bold leading-tight tracking-tight">Nyanopan</h2>
        </Link>
        <nav className="hidden md:flex items-center gap-9">
          <Link to="/shop" className="text-slate-700 text-sm font-medium hover:text-primary transition-colors">Shop</Link>
          <Link to="/about" className="text-slate-700 text-sm font-medium hover:text-primary transition-colors">Story</Link>
          <Link to="/contact" className="text-slate-700 text-sm font-medium hover:text-primary transition-colors">Contact</Link>
        </nav>
      </div>
      <div className="flex flex-1 justify-end gap-4 lg:gap-6">
        <label className="hidden sm:flex flex-col min-w-40 h-10 max-w-64">
          <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
            <div className="text-primary flex bg-primary/10 items-center justify-center pl-4 rounded-l-xl">
              <span className="material-symbols-outlined text-xl">search</span>
            </div>
            <input 
              className="form-input flex w-full min-w-0 flex-1 border-none bg-primary/10 text-slate-900 focus:ring-0 h-full placeholder:text-primary/60 px-4 rounded-r-xl pl-2 text-base font-normal" 
              placeholder="Search crafts..." 
            />
          </div>
        </label>
        <div className="flex gap-2">
          <Link to="/cart" className="flex items-center justify-center rounded-xl h-10 w-10 bg-primary/10 text-slate-900 hover:bg-primary/20 transition-colors">
            <span className="material-symbols-outlined">shopping_bag</span>
          </Link>
          {isLoggedIn ? (
            <button onClick={handleLogout} className="flex items-center justify-center rounded-xl h-10 w-10 bg-primary/10 text-slate-900 hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined">logout</span>
            </button>
          ) : (
            <Link to="/login" className="flex items-center justify-center rounded-xl h-10 w-10 bg-primary/10 text-slate-900 hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined">person</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

const Footer = () => (
  <footer className="bg-slate-900 text-slate-400 py-12 px-6 lg:px-20">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      <div className="flex flex-col gap-6">
        <Link to="/" className="flex items-center gap-3 text-white">
          <span className="material-symbols-outlined text-primary">park</span>
          <h2 className="font-display text-xl font-bold">Nyanopan</h2>
        </Link>
        <p className="text-sm leading-relaxed">Bringing the softness and warmth of the forest into your home through artisanal felted crafts.</p>
        <div className="flex gap-4">
          <a className="hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">public</span></a>
          <a className="hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">share</span></a>
          <a className="hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">camera</span></a>
        </div>
      </div>
      <div>
        <h4 className="text-white font-bold mb-6">Shop</h4>
        <ul className="space-y-4 text-sm">
          <li><Link to="/category" className="hover:text-white transition-colors">Handmade Shoes</Link></li>
          <li><Link to="/category" className="hover:text-white transition-colors">Felted Bags</Link></li>
          <li><Link to="/category" className="hover:text-white transition-colors">Home Decor</Link></li>
          <li><Link to="/category" className="hover:text-white transition-colors">Gift Cards</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold mb-6">Company</h4>
        <ul className="space-y-4 text-sm">
          <li><Link to="/about" className="hover:text-white transition-colors">Our Artisans</Link></li>
          <li><a className="hover:text-white transition-colors" href="#">Sustainability</a></li>
          <li><a className="hover:text-white transition-colors" href="#">Wholesale</a></li>
          <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold mb-6">Visit Our Workshop</h4>
        <p className="text-sm mb-4 leading-relaxed">Nestled in the pines,<br/>123 Forest Path, Aspen CO</p>
        <div className="flex items-center gap-2 text-sm text-primary">
          <span className="material-symbols-outlined text-sm">location_on</span>
          <span>View on Map</span>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto border-t border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
      <p>© 2024 Nyanopan. All rights reserved.</p>
      <div className="flex gap-6">
        <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
        <a className="hover:text-white transition-colors" href="#">Terms of Service</a>
      </div>
    </div>
  </footer>
);

export { Navbar, Footer };
