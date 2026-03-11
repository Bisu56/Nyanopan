import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { Navbar, Footer } from './Layout';

const ProductDetail = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setLoading(true);
    axios.get(`/api/view-product/${slug}`)
      .then(res => {
        setProduct(res.data.product);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [slug]);

  const addToCart = (productId) => {
    axios.post('/add-to-cart', { 
      product_id: productId,
      product_qty: quantity 
    })
      .then(res => {
        if (res.data.status === 200) {
          alert('Added to cart successfully!');
        } else if (res.data.status === 401) {
          alert('Please login to add to cart');
        } else if (res.data.status === 409) {
          alert(res.data.message);
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

  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 py-10 px-6 lg:px-20">
          <div className="max-w-7xl mx-auto text-center">
            <h2>Product not found</h2>
            <Link to="/category" className="btn btn-primary mt-3">Back to Categories</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 py-10 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <nav aria-label="breadcrumb" className="mb-4">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item"><Link to="/category">Category</Link></li>
              <li className="breadcrumb-item active" aria-current="page">{product.name}</li>
            </ol>
          </nav>

          <div className="row">
            <div className="col-md-6">
              <img 
                src={`/upload/product/${product.image}`} 
                className="img-fluid rounded" 
                alt={product.name}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/500x500?text=Product';
                }}
              />
            </div>
            <div className="col-md-6">
              <h2 className="mb-3">{product.name}</h2>
              <p className="text-muted mb-3">{product.description}</p>
              <div className="mb-3">
                <span className="text-decoration-line-through text-muted me-3">Rs {product.original_price}</span>
                <span className="text-primary fw-bold fs-4">Rs {product.selling_price}</span>
              </div>
              
              {product.quantity > 0 ? (
                <>
                  <div className="mb-3">
                    <label className="me-3">Quantity:</label>
                    <button 
                      className="btn btn-outline-secondary" 
                      onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    >-</button>
                    <span className="mx-3">{quantity}</span>
                    <button 
                      className="btn btn-outline-secondary"
                      onClick={() => setQuantity(q => q + 1)}
                    >+</button>
                  </div>
                  <div className="mb-3">
                    <button 
                      className="btn btn-primary me-2" 
                      onClick={() => addToCart(product.id)}
                    >
                      Add to Cart
                    </button>
                    <Link to="/cart" className="btn btn-outline-primary">View Cart</Link>
                  </div>
                </>
              ) : (
                <div className="alert alert-danger">Out of Stock</div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
