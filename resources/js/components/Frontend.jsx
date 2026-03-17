import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header className="flex items-center justify-between whitespace-nowrap border-b border-primary/10 px-6 py-4 lg:px-20">
    <div className="flex items-center gap-8">
      <div className="flex items-center gap-3 text-slate-900">
        <div className="text-primary">
          <span className="material-symbols-outlined text-3xl">park</span>
        </div>
        <h2 className="font-display text-xl font-bold leading-tight tracking-tight">Nyanopan</h2>
      </div>
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

const Hero = () => (
  <div className="px-6 lg:px-20 py-10 lg:py-16 max-w-7xl mx-auto">
    <div className="flex flex-col gap-8 lg:flex-row items-center">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full lg:w-1/2 aspect-[4/3] rounded-xl overflow-hidden shadow-2xl relative"
      >
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8ftu3EZnGxyGqn9wk0BaGV085nVWkOGNSQBOrhoxxwI4nAzG7CzF9kSc2FlSAULeZrvFE_j58fsdnnzNLPd4xkuegbMEGN5_V3Kt0gdRgaentbe-R1loflI0-pEBExUHfmeLDPUcII08Cz-wz5Goqo3wdl6gkNDGya5-Jn8Yt9eCXqdEGHz6uCn-STAjwjC9ZJKQ1zujSCE6njhONCYgdqKQIl76J8NJhaEnRSob97OfsgYzZPbcEgkhWiOuedHwU_uTVtwUX_CI" 
          alt="Close up of handmade grey felt shoes"
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-slate-900/10"></div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col gap-8 lg:w-1/2 lg:pl-12"
      >
        <div className="flex flex-col gap-4">
          <span className="text-primary font-bold tracking-widest uppercase text-xs">Sustainable Craftsmanship</span>
          <h1 className="font-display text-slate-900 text-4xl lg:text-6xl font-black leading-tight">
            Artisanal Felt for a Cozy Life
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed max-w-md font-sans">
            Handcrafted woolen shoes and bags made from pure, sustainable wool in the heart of the forest. Experience the warmth of nature.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link to="/shop" className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-primary text-white text-base font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform active:scale-95">
            Shop Collection
          </Link>
          <Link to="/about" className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-white border-2 border-primary/20 text-slate-900 text-base font-bold hover:bg-primary/5 transition-colors active:scale-95">
            Our Story
          </Link>
        </div>
      </motion.div>
    </div>
  </div>
);

const CategoryCard = ({ image, title, subtitle, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer"
  >
    <div 
      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
      style={{ backgroundImage: `url("${image}")` }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
    <div className="absolute bottom-6 left-6">
      <h3 className="text-white text-xl font-bold">{title}</h3>
      <p className="text-white/80 text-sm mt-1">{subtitle}</p>
    </div>
  </motion.div>
);

const Categories = () => {
  const categories = [
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLvkJEUKsHZ8zxyzPcfOrUZGom478pRBs-Vs6dokiJiYHFlc-l146ICAyw9utugijLwdlPzR4w2E7K2ipDeEJpKJa49qMixJ26AbUWwRGm83UTJk-H7siVkpJlcZPI7hTX8kd46hdULtRq7vN35a5KZhpWhbmVCjH9wZV0wL1kzdBCPxYGzKOHeiFfOkO7GwxgRvvHrMWRROUu-rDQGmW1iX8TVWjNNZ9e3Xq19gQkS3_Aik0JvYT9MeNh6HToSQNVZxUXvU2TVas",
      title: "Handmade Shoes",
      subtitle: "Warmth for every step"
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMU1mB8HrWPmF_1HU7kE_iu2xlBRHLQv5lpnXoSQPD67QKyPFDgR_pDB7E4wxynUQWt24e_N6mP-j9v9VeY6AO05RTYyfcwpmn-BA2kgQxFxAV1GiugfGC2jw0jEeE5e4wPoH_PjY-a8Th_betev5ZoGm_08S3a9ARZfnqSTFNXWR7fqoARvOq_tOXbvsnnHuW2YZ6UWW6avJ1M5V98BQdiImy9ISAvzCwm9gPjP1BC0nn0UCPeN_4mbTA5_Gevn8z5RkYvNBBFlM",
      title: "Felted Bags",
      subtitle: "Durable & stylish"
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuATVkJAAwjjS2lf-XSRY0bI-kxyy35bXm_QoG1UkbAB8kdK0op4H7LXaIBVTR4P02IAWir2KWySQuj0hvr2jWf71GDy58Yx2X3q7M8RTFKbwi0u86mgu_tubk-n6fmUXbpm48IFQPB4VCddvw31jqj83_BJGEqxojqMmJKQWISIXXS8QNM0_iC-H1euM6jgdZnz1D6hVfGBdUdDfnf_WvGUB_xtawtiN8k8j2F1VG0MZ34o8_vkZey0xLVmG3zCDKjTT7lNWYcQaSo",
      title: "Home Decor",
      subtitle: "Soften your space"
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTPvq1jvoRcUk7lnnpLhxc7v8QLo5_bl-dji-bKcJugHbfJuSInEbXwnctlbDS0Wrra-TUxeQP9bGcPltxbL3DCiLxAeIU-9lxMove6iNN5qIVuTXctBO44_Pejgds0w18nLOWoN4Em-7sBT79Zu5pQhnZui-3jOUif2OP892nlf0xIbZV00dxLJZ55BIEKozAj53Fg0XCsZALCoGzCFOoCrMPEZcyhrl42adkywsb9w3XYj6ju3iHbIqL7K1MpoCz394pktBkIF0",
      title: "Artisanal Key Rings",
      subtitle: "Little touches of wool"
    }
  ];

  return (
    <section className="bg-primary/5 py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="font-display text-3xl font-bold text-slate-900">Our Craft Categories</h2>
            <p className="text-slate-500 mt-2">Explore our collection of hand-felted essentials</p>
          </div>
          <a className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all" href="#">
            View all <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <CategoryCard key={index} {...cat} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => (
  <section className="py-20 px-6 lg:px-20 max-w-7xl mx-auto">
    <div className="flex flex-col lg:flex-row gap-12 items-center">
      <div className="lg:w-1/2 order-2 lg:order-1">
        <h2 className="font-display text-4xl font-bold text-slate-900 mb-6">The Artisanal Process</h2>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-primary">eco</span>
            </div>
            <div>
              <h4 className="font-bold text-lg text-slate-900">Pure Mountain Wool</h4>
              <p className="text-slate-600">Sourced from local farms that prioritize ethical shearing and animal welfare.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-primary">front_hand</span>
            </div>
            <div>
              <h4 className="font-bold text-lg text-slate-900">Hand-Felted with Love</h4>
              <p className="text-slate-600">Each piece is meticulously crafted using traditional wet-felting techniques.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-primary">water_drop</span>
            </div>
            <div>
              <h4 className="font-bold text-lg text-slate-900">Natural Dyes</h4>
              <p className="text-slate-600">We use forest-derived pigments to create our signature earthy tones.</p>
            </div>
          </div>
        </div>
      </div>
      <motion.div 
        initial={{ opacity: 0, rotate: -2 }}
        animate={{ opacity: 1, rotate: 2 }}
        transition={{ duration: 0.6 }}
        className="lg:w-1/2 order-1 lg:order-2"
      >
        <div className="rounded-3xl bg-slate-200 p-4 rotate-2">
          <div className="rounded-2xl overflow-hidden -rotate-2 shadow-xl aspect-video relative">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRh-VVKgcTjbj1FHBFf8VscseTzd6fAArfT2dAsCABOX-VX339qReGDlAwCnZ0z5wSANAvaxw7W6CRhECGTCZlQqPovbKx0D4a0I9b5Oe2oHOvuPfTeYMdjETVIZWcYCSDHqD3l-OHSy7cGqGTgvfaMm7vvRkJGcYabO8xx_Da5V2I8_gh8FqfAUGQA9Jmj59mpXdlEJ_tCFQlqziBIS7tqEaUVY0klwfigPGvETF8IQcYDAIsuKWbzVNfgpVVOPSplH_XYjZB9yc"
              alt="Hands working with raw wool and water during the felting process"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Newsletter = () => (
  <section className="py-16 px-6 lg:px-20 mb-20">
    <div className="max-w-4xl mx-auto bg-background-dark text-white rounded-[2rem] p-8 lg:p-16 text-center relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full -mr-32 -mt-32 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full -ml-24 -mb-24 blur-3xl"></div>
      <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4 relative z-10">Join Our Nyanopan Community</h2>
      <p className="text-white/70 mb-8 max-w-lg mx-auto relative z-10">Subscribe to receive updates on new artisanal releases, stories from our workshop, and cozy living tips.</p>
      <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto relative z-10">
        <input 
          className="flex-1 bg-white/10 border-white/20 rounded-xl px-6 py-4 text-white placeholder:text-white/40 focus:ring-primary focus:border-primary" 
          placeholder="Enter your email" 
          type="email"
        />
        <button className="bg-primary hover:bg-primary/90 text-slate-900 font-bold px-8 py-4 rounded-xl transition-all">Subscribe</button>
      </form>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-slate-900 text-slate-400 py-12 px-6 lg:px-20">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3 text-white">
          <span className="material-symbols-outlined text-primary">park</span>
          <h2 className="font-display text-xl font-bold">Nyanopan</h2>
        </div>
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
          <li><a className="hover:text-white transition-colors" href="#">Handmade Shoes</a></li>
          <li><a className="hover:text-white transition-colors" href="#">Felted Bags</a></li>
          <li><a className="hover:text-white transition-colors" href="#">Home Decor</a></li>
          <li><a className="hover:text-white transition-colors" href="#">Gift Cards</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold mb-6">Company</h4>
        <ul className="space-y-4 text-sm">
          <li><a className="hover:text-white transition-colors" href="#">Our Artisans</a></li>
          <li><a className="hover:text-white transition-colors" href="#">Sustainability</a></li>
          <li><a className="hover:text-white transition-colors" href="#">Wholesale</a></li>
          <li><a className="hover:text-white transition-colors" href="#">Contact Us</a></li>
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

const Frontend = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <Categories />
          <Process />
          <Newsletter />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Frontend;
