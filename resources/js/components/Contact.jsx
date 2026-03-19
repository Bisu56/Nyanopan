import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Navbar, Footer } from './Layout';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
          setFormData({ name: '', email: '', message: '' });
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
      <main>
        <section className="relative pt-20 pb-32 px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 z-10">
              <span className="inline-block text-[0.75rem] tracking-[0.2em] uppercase font-bold text-primary mb-6">Connect With Our Craft</span>
              <h1 className="text-6xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-8">Let's weave a <span className="text-primary italic">conversation.</span></h1>
              <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
                Whether you're curious about our artisanal processes, seeking custom woolens, or simply want to say hello, our door is always open.
              </p>
            </div>
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
                <img className="w-full h-[500px] object-cover" alt="Close up of artisanal wooden weaving loom with green wool" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYsQ9UlugBHw6Z3K44MTpUcdqX1q0O7UIn22UngRGnkI-nNGhek-Z6CZ5YGNscFA2XqN1HF6qdGFtLVE8_j1ndNIo31cx4pOUzmkz4sUozyvZx8WAP3-cZEjcKqwqHNkzI52LbZgzvoBW8VMRWxz9n7SgoTM2RcRRCn0D6RWUtxMSDUcmj7XAe8fyk2rF2tBP8VqKMx4fQuqKiEXofYhgeOFAxhLjn1iA3S0FPx9zDJW06MYGmI2eXW7Uq9RXERsTiIxnB6bV4Gls" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </section>

        <section className="bg-slate-100 py-24 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div className="bg-white p-10 md:p-14 rounded-xl shadow-lg border border-slate-200">
                <h2 className="text-3xl font-black mb-10 text-slate-900">Send a Message</h2>
                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <label className="text-[0.75rem] uppercase tracking-widest font-bold text-slate-600 block px-1">Name</label>
                    <input 
                      className="w-full h-14 px-6 bg-primary/5 border-0 focus:ring-2 focus:ring-primary rounded-xl transition-all" 
                      placeholder="Your name" 
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[0.75rem] uppercase tracking-widest font-bold text-slate-600 block px-1">Email</label>
                    <input 
                      className="w-full h-14 px-6 bg-primary/5 border-0 focus:ring-2 focus:ring-primary rounded-xl transition-all" 
                      placeholder="hello@example.com" 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[0.75rem] uppercase tracking-widest font-bold text-slate-600 block px-1">Message</label>
                    <textarea 
                      className="w-full p-6 bg-primary/5 border-0 focus:ring-2 focus:ring-primary rounded-xl transition-all" 
                      placeholder="Tell us about your project or inquiry..." 
                      rows="5"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <button className="w-full h-14 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:translate-y-[-2px] active:translate-y-[1px] transition-all flex items-center justify-center gap-3" disabled={status === 'sending'}>
                    <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
                    <span className="material-symbols-outlined text-lg">send</span>
                  </button>
                </form>
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-black mb-10 text-slate-900">Visit the Workshop</h2>
                  <div className="space-y-10">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-primary">location_on</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Our Studio</h4>
                        <p className="text-slate-600">122 Weaver's Lane, Kyoto District<br/>Craft City, JP 602-0000</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-primary">call</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Phone</h4>
                        <p className="text-slate-600">+81 (0) 75-555-0192</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-primary">mail</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Email</h4>
                        <p className="text-slate-600">studio@nyanopan.jp</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-16 group cursor-pointer">
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-200 border border-slate-300 shadow-sm transition-shadow hover:shadow-md">
                    <img className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="Stylized map showing shop location in Kyoto" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC95ptm1X5aW7LtDJO8BD2Qh6WKAMWbj2pknw3fgcwfjJvV7Ze-Vu6DNM87qKFZpWL9lhDmLLI_pafWm9lOYe7pRSQFw53Bt7BDe4ZK3NwvVZre8XRcJUP2x_kIP-gr14CC0qS8xYSok3KNnIKrSbG8dkyBplOl34WU4uuPeGxeQDEM-mBoQCRf01T42AU_PFU9i3vxTLmwsPTBscvEXAbxat3t86L1Y0dO6LD1EoTwnNejYm0maT1EdsXByd9rQhwKOmFRy2gwHK8" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white p-4 rounded-full shadow-xl">
                        <span className="material-symbols-outlined text-primary text-3xl">location_on</span>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur p-3 rounded-lg text-xs font-bold uppercase tracking-widest text-center">
                      View in Google Maps
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-8">
          <div className="max-w-7xl mx-auto rounded-xl bg-slate-900 text-white p-12 md:p-20 relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-black mb-6">Stay Woven Into Our Story</h2>
              <p className="text-lg opacity-80 mb-10 leading-relaxed">Join our workshop newsletter to receive updates on new loom techniques, seasonal collections, and limited-seat weaving classes.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input className="bg-white/10 border-0 focus:ring-2 focus:ring-primary rounded-xl h-14 px-6 flex-grow placeholder:text-white/40" placeholder="your@email.com" type="email" />
                <button className="h-14 px-10 bg-primary text-white font-bold rounded-xl whitespace-nowrap hover:scale-105 active:scale-95 transition-transform">Sign Up</button>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
              <div className="w-full h-full bg-gradient-to-l from-primary/40 to-transparent"></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
