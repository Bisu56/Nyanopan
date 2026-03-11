import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Navbar, Footer } from './Layout';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/get-category')
      .then(res => {
        setCategories(res.data.category);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

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
            <h3 style={{ fontWeight: 'bolder', padding: '5px' }}>All Categories</h3>
            <div className="border border-dark" style={{ width: '20rem', background: 'black' }}></div>
          </div>
          
          <div className="row mt-4">
            {categories && categories.map((cat) => (
              <div className="col-md-4 mb-4" key={cat.id}>
                <Link to={`/view-category/${cat.slug}`} className="text-decoration-none">
                  <div className="card hello-card" style={{ width: '100%' }}>
                    <img 
                      src={`/upload/category/${cat.image}`} 
                      className="card-img-top" 
                      alt={cat.name}
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/300x200?text=Category';
                      }}
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title">{cat.name}</h5>
                      <p className="card-text text-muted">{cat.description}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Categories;
