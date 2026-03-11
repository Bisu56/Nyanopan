import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { Navbar, Footer } from './Layout';

const Products = () => {
  const { slug } = useParams();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get(`/api/view-category/${slug}`)
      .then(res => {
        setProducts(res.data.products);
        setCategory(res.data.category);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [slug]);

  const addToCart = (productId) => {
    axios.post('/add-to-cart', { product_id: productId })
      .then(res => {
        if (res.data.status === 200) {
          alert('Added to cart successfully!');
        } else if (res.data.status === 401) {
          alert('Please login to add to cart');
        }
      })
      .catch(err => console.error(err));
  };

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
          <div className="container d-flex align-items-center justify-content-around p-4">
            <div className="border border-dark" style={{ width: '20rem', background: 'black' }}></div>
            <h3 style={{ fontWeight: 'bolder', padding: '5px' }}>{category?.name || 'Products'}</h3>
            <div className="border border-dark" style={{ width: '20rem', background: 'black' }}></div>
          </div>
          
          <div className="row">
            {products && products.length > 0 ? (
              products.map((prod) => (
                <div className="col-md-3 mt-2" key={prod.id}>
                  <Link to={`/view-product/${prod.slug}`} className="link-dark text-decoration-none">
                    <div className="card hello-card" style={{ width: '18rem' }}>
                      <img 
                        src={`/upload/product/${prod.image}`} 
                        className="card-img-top" 
                        alt={prod.name}
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/300x300?text=Product';
                        }}
                      />
                      <div className="card-body">
                        <h6 className="card-title">{prod.name}</h6>
                        <span className="float-start">Rs <s>{prod.original_price}</s></span>
                        <span className="float-end">Rs {prod.selling_price}</span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <div className="col-12 text-center py-5">
                <h4>No products found in this category</h4>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
