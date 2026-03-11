import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Footer } from './Layout';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <div className="py-16 px-6 lg:px-20 max-w-7xl mx-auto">
          <div className="container d-flex align-items-center justify-content-around p-4">
            <div className="border border-dark" style={{ width: '20rem', background: 'black' }}></div>
            <h2 style={{ fontWeight: 'bolder', padding: '5px' }}>About Us</h2>
            <div className="border border-dark" style={{ width: '20rem', background: 'black' }}></div>
          </div>

          <div className="row mt-5 align-items-center">
            <div className="col-md-6">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRh-VVKgcTjbj1FHBFf8VscseTzd6fAArfT2dAsCABOX-VX339qReGDlAwCnZ0z5wSANAvaxw7W6CRhECGTCZlQqPovbKx0D4a0I9b5Oe2oHOvuPfTeYMdjETVIZWcYCSDHqD3l-OHSy7cGqGTgvfaMm7vvRkJGcYabO8xx_Da5V2I8_gh8FqfAUGQA9Jmj59mpXdlEJ_tCFQlqziBIS7tqEaUVY0klwfigPGvETF8IQcYDAIsuKWbzVNfgpVVOPSplH_XYjZB9yc" 
                alt="About Nyanopan" 
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-md-6">
              <h2 className="mb-4">The Nyanopan Story</h2>
              <p className="text-muted">
                Welcome to Nyanopan, where tradition meets artistry in the heart of the forest. 
                We are passionate about creating handcrafted woolen shoes and bags made from pure, 
                sustainable wool that brings warmth and comfort to your everyday life.
              </p>
              <p className="text-muted">
                Our artisans use traditional wet-felting techniques passed down through generations, 
                ensuring each piece is unique and made with love. We source our wool from local farms 
                that prioritize ethical shearing and animal welfare, and we use only natural, 
                forest-derived dyes for our signature earthy tones.
              </p>
              <p className="text-muted">
                At Nyanopan, we believe in sustainable craftsmanship that honors both the environment 
                and the skilled hands that create each piece. Every item tells a story of tradition, 
                quality, and the beauty of natural materials.
              </p>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-4 text-center mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <span className="material-symbols-outlined text-primary" style={{ fontSize: '48px' }}>eco</span>
                  <h5 className="mt-3">Sustainable</h5>
                  <p className="text-muted">Ethically sourced materials and eco-friendly practices</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <span className="material-symbols-outlined text-primary" style={{ fontSize: '48px' }}>front_hand</span>
                  <h5 className="mt-3">Handcrafted</h5>
                  <p className="text-muted">Each piece is meticulously made by skilled artisans</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <span className="material-symbols-outlined text-primary" style={{ fontSize: '48px' }}>volunteer_activism</span>
                  <h5 className="mt-3">Quality</h5>
                  <p className="text-muted">Built to last with premium materials and craftsmanship</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <h3 className="mb-4">Ready to Experience Nyanopan?</h3>
            <Link to="/category" className="btn btn-primary btn-lg me-2">Shop Now</Link>
            <Link to="/contact" className="btn btn-outline-primary btn-lg">Contact Us</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
