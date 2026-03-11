import React, { useState } from 'react';
import axios from 'axios';
import { Navbar, Footer } from './Layout';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    
    axios.post('/sendMessage', formData)
      .then(res => {
        if (res.data.status === 200) {
          setStatus('success');
          setFormData({ name: '', email: '', subject: '', message: '' });
          alert('Message sent successfully!');
        }
      })
      .catch(err => {
        console.error(err);
        setStatus('error');
        alert('Failed to send message');
      });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 py-10 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="container d-flex align-items-center justify-content-around p-4">
            <div className="border border-dark" style={{ width: '20rem', background: 'black' }}></div>
            <h3 style={{ fontWeight: 'bolder', padding: '5px' }}>Contact Us</h3>
            <div className="border border-dark" style={{ width: '20rem', background: 'black' }}></div>
          </div>
          
          <div className="row mt-5">
            <div className="col-md-6 mb-4">
              <div className="card">
                <div className="card-body">
                  <h4 className="mb-4">Get in Touch</h4>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label className="form-label">Name</label>
                      <input 
                        type="text" 
                        name="name" 
                        className="form-control"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input 
                        type="email" 
                        name="email" 
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Subject</label>
                      <input 
                        type="text" 
                        name="subject" 
                        className="form-control"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Message</label>
                      <textarea 
                        name="message" 
                        className="form-control"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    <button 
                      type="submit" 
                      className="btn btn-primary"
                      disabled={status === 'sending'}
                    >
                      {status === 'sending' ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h4 className="mb-4">Contact Information</h4>
                  <div className="mb-3">
                    <strong>Address:</strong>
                    <p>Nyanopan Workshop<br/>123 Forest Path<br/>Aspen, CO</p>
                  </div>
                  <div className="mb-3">
                    <strong>Email:</strong>
                    <p>hello@nyanopan.com</p>
                  </div>
                  <div className="mb-3">
                    <strong>Phone:</strong>
                    <p>+1 (555) 123-4567</p>
                  </div>
                  <div className="mb-3">
                    <strong>Hours:</strong>
                    <p>Mon - Fri: 9AM - 6PM<br/>Sat - Sun: 10AM - 4PM</p>
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

export default Contact;
