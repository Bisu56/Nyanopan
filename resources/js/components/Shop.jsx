import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => (
  <header className="flex items-center justify-between whitespace-nowrap border-b border-primary/10 px-6 py-4 lg:px-20">
    <div className="flex items-center gap-8">
      <Link to="/" className="flex items-center gap-3 text-slate-900">
        <div className="text-primary">
          <span className="material-symbols-outlined text-3xl">park</span>
        </div>
        <h2 className="font-display text-xl font-bold leading-tight tracking-tight">Nyanopan</h2>
      </Link>
      <nav className="hidden md:flex items-center gap-9">
        <Link to="/shop" className="text-slate-700 text-sm font-medium hover:text-primary transition-colors">Shop</Link>
        <Link to="/about" className="text-slate-700 text-sm font-medium hover:text-primary transition-colors">About</Link>
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
        <Link to="/login" className="flex items-center justify-center rounded-xl h-10 w-10 bg-primary/10 text-slate-900 hover:bg-primary/20 transition-colors">
          <span className="material-symbols-outlined">person</span>
        </Link>
      </div>
    </div>
  </header>
);

const ProductCard = ({ product }) => {
  const imageUrl = product.image 
    ? `/upload/product/${product.image}` 
    : 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJH0psYa8qzcyGp1kuRWGpG5UmcTA7egtaVWVq1CjO-GCcvXp0e-l5f9Q7Y9PwBarA1-MF_472ia_ncbTBQ5GWLxUbwQR5XA8OlEnj8lkg30O7i4VPjn6_Oae4elpQ6GHbmSgHoIRupAJ-ftXosKFrfSjBntyINokuuO7Ai7fbFX9I06g-CKolm1OzeXk5GduGlopptYu4ITojP1A9CwUgtTXuxEY_F9U1KlbUn9EyRJLUcflORXTH2jQluDGFFfJcZYtkgHBLatg';

  return (
    <div className="group flex flex-col">
      <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-100 mb-3">
        <img 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          alt={product.name}
          src={imageUrl}
        />
        <button className="absolute top-3 right-3 size-8 rounded-full bg-white/80 backdrop-blur shadow-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="material-symbols-outlined text-slate-900 text-xl">favorite</span>
        </button>
        <div className="absolute bottom-0 inset-x-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform bg-primary/90 text-white text-center text-sm font-medium">
          Add to Cart
        </div>
      </div>
      <h3 className="font-bold text-lg">{product.name}</h3>
      <p className="text-sm text-slate-500 mb-2 font-sans">{product.description?.substring(0, 40) || 'Handcrafted with love'}...</p>
      <div className="flex items-center justify-between">
        <span className="text-primary font-bold text-xl">${product.selling_price}</span>
        {product.original_price > product.selling_price && (
          <span className="text-sm text-slate-400 line-through">${product.original_price}</span>
        )}
      </div>
    </div>
  );
};

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('/api/get-products');
      setProducts(response.data.products);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get('/api/get-category');
      setCategories(response.data.category);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.cate_id === parseInt(selectedCategory));

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      <Navbar />
      <main className="max-w-[1200px] mx-auto w-full px-6 py-8">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="relative w-full aspect-[21/9] md:aspect-[3/1] rounded-xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCy1IByvad57FSo6oBVuhUjZV90lI6TxiYidLQALiaYYeb1eCNX0jFPMGA9OCo6fAf-mgkcTCtms3Jj2SKdJs_2jtIEnKWWIspZZlrCNyQUxJOtMRfn_bzOpRUG8-KpmYj36lDTNqt-ZS8VnK6yMZClxlDlUEv0nDsp4QzKOzmOYEXYq3uX9NuXa22e7akNEZ4DH-T2iiTOSykzYPpdkrOYeSIoft_h4CziW2NRxgW1-Ilwy8HyxyeAGgqhi_C2uCQrpTQoH9lgtbo')"}}></div>
            <div className="absolute bottom-0 left-0 p-8 z-20">
              <h1 className="text-white text-4xl md:text-5xl font-bold mb-2">Artisanal Felt Collection</h1>
              <p className="text-white/90 text-lg max-w-lg font-sans">Hand-crafted with love using traditional Himalayan techniques and pure organic wool.</p>
            </div>
          </div>
        </section>

        {/* Filters & Search Bar Mobile */}
        <section className="mb-8 space-y-4">
          <div className="lg:hidden">
            <label className="flex items-center bg-primary/10 rounded-xl px-4 py-3 w-full">
              <span className="material-symbols-outlined text-primary mr-2">search</span>
              <input className="bg-transparent border-none focus:ring-0 text-base w-full placeholder:text-primary/60" placeholder="Search handmade treasures..." type="text"/>
            </label>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button 
              onClick={() => setSelectedCategory('all')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${selectedCategory === 'all' ? 'bg-primary text-white' : 'bg-primary/10 hover:bg-primary/20'}`}
            >
              <span>All Products</span>
            </button>
            {categories.map((cat) => (
              <button 
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${selectedCategory === cat.id ? 'bg-primary text-white' : 'bg-primary/10 hover:bg-primary/20'}`}
              >
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 py-4 border-t border-primary/10">
            <div className="flex items-center gap-6 flex-1">
              <span className="text-sm font-semibold whitespace-nowrap">Price Range</span>
              <div className="relative w-full max-w-xs h-1 bg-primary/20 rounded-full">
                <div className="absolute left-[15%] right-[25%] h-full bg-primary rounded-full"></div>
                <div className="absolute left-[15%] top-1/2 -translate-y-1/2 size-4 bg-primary border-2 border-white dark:border-background-dark rounded-full cursor-pointer shadow-sm"></div>
                <div className="absolute right-[25%] top-1/2 -translate-y-1/2 size-4 bg-primary border-2 border-white dark:border-background-dark rounded-full cursor-pointer shadow-sm"></div>
                <div className="absolute left-[15%] top-4 text-[10px] font-bold">$15</div>
                <div className="absolute right-[25%] top-4 text-[10px] font-bold">$180</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-slate-500">Showing {filteredProducts.length} products</span>
              <select className="bg-transparent border-primary/20 rounded-lg text-sm focus:ring-primary focus:border-primary">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest Arrivals</option>
              </select>
            </div>
          </div>
        </section>

        {/* Product Grid */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
          </div>
        ) : (
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </section>
        )}

        {/* Empty State */}
        {!loading && filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <span className="material-symbols-outlined text-6xl text-slate-300">inventory_2</span>
            <p className="text-lg text-slate-500 mt-4">No products found in this category</p>
          </div>
        )}

        {/* Pagination */}
        {filteredProducts.length > 0 && (
          <div className="flex items-center justify-center mt-16 gap-2">
            <button className="size-10 flex items-center justify-center rounded-lg border border-primary/20 hover:bg-primary/10 transition-colors">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="size-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold">1</button>
            <button className="size-10 flex items-center justify-center rounded-lg hover:bg-primary/10 transition-colors">2</button>
            <button className="size-10 flex items-center justify-center rounded-lg hover:bg-primary/10 transition-colors">3</button>
            <span className="px-2">...</span>
            <button className="size-10 flex items-center justify-center rounded-lg hover:bg-primary/10 transition-colors">12</button>
            <button className="size-10 flex items-center justify-center rounded-lg border border-primary/20 hover:bg-primary/10 transition-colors">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        )}
      </main>

      {/* Artisanal Banner Section */}
      <section className="bg-primary/5 py-16 mt-16">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">Every stitch tells a story</h2>
            <p className="text-lg text-slate-800 mb-8 font-sans leading-relaxed">
              Nyanopan brings together rural Nepalese artisans and sustainable Himalayan wool to create timeless pieces for your modern home. Your purchase supports fair-trade livelihoods and keeps traditional crafts alive.
            </p>
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-3">
                <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">volunteer_activism</span>
                </div>
                <div>
                  <p className="font-bold">100% Fair Trade</p>
                  <p className="text-xs text-slate-500 font-sans">Supporting 50+ Families</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">compost</span>
                </div>
                <div>
                  <p className="font-bold">Zero Waste</p>
                  <p className="text-xs text-slate-500 font-sans">Biodegradable Packaging</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="aspect-square rounded-3xl overflow-hidden border-8 border-white dark:border-background-dark shadow-xl">
              <img className="w-full h-full object-cover" alt="A Nepalese artisan working on a colorful felt rug" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYUhmw99EsnFRRdZw_gTBxosm_vH9XrPvoP48MVvz9w_8LfDWYF7nEfudSwGEnl_tkL9lAqkwJKIGTeSbewbppOqiAEQUSd5oZ8teL3R1c0AI5MzdvcI3kCdzdGPdR2232UfHt-trgdG_16xIsxKLE2n8gCxxyG9wYQZ1ICGKgUVZUaXwv1pHZ6jlXJrpUv1K8DyDIod15eP96U1VdpL5fbV1Vo48hgAWpXVrOXLTTDSI8GMYvccYZEiknzs2Oo7XWGHz3Z5b6ERg"/>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary p-6 rounded-2xl text-white shadow-lg hidden lg:block">
              <p className="text-2xl font-bold">15+</p>
              <p className="text-sm">Years of Craft</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background-dark text-slate-300 py-12 border-t border-primary/20">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-white">
              <span className="material-symbols-outlined text-primary text-3xl">eco</span>
              <h2 className="text-2xl font-bold">Nyanopan</h2>
            </div>
            <p className="text-sm font-sans leading-relaxed">Crafting warmth and joy through sustainable wool art. Join our journey toward a more conscious lifestyle.</p>
            <div className="flex gap-4">
              <a className="hover:text-primary" href="#"><span className="material-symbols-outlined">social_leaderboard</span></a>
              <a className="hover:text-primary" href="#"><span className="material-symbols-outlined">camera</span></a>
              <a className="hover:text-primary" href="#"><span className="material-symbols-outlined">mail</span></a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Collections</h4>
            <ul className="space-y-3 text-sm font-sans">
              <li><a className="hover:text-primary" href="#">Winter Footwear</a></li>
              <li><a className="hover:text-primary" href="#">Bohemian Bags</a></li>
              <li><a className="hover:text-primary" href="#">Pet Accessories</a></li>
              <li><a className="hover:text-primary" href="#">Home Textiles</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Support</h4>
            <ul className="space-y-3 text-sm font-sans">
              <li><a className="hover:text-primary" href="#">Care Instructions</a></li>
              <li><a className="hover:text-primary" href="#">Shipping & Returns</a></li>
              <li><a className="hover:text-primary" href="#">Wholesale Inquiry</a></li>
              <li><a className="hover:text-primary" href="#">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-sm font-sans mb-4">Get 10% off your first artisanal treasure.</p>
            <div className="flex">
              <input className="bg-white/10 border-none rounded-l-lg text-sm w-full focus:ring-primary" placeholder="Email address" type="email"/>
              <button className="bg-primary text-white px-4 rounded-r-lg hover:bg-primary/80 transition-colors">Join</button>
            </div>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto px-6 pt-12 mt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans">
          <p>© 2024 Nyanopan Artisanal Goods. All rights reserved.</p>
          <div className="flex gap-6">
            <a className="hover:text-primary" href="#">Privacy Policy</a>
            <a className="hover:text-primary" href="#">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Shop;
