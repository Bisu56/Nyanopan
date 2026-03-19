import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Footer } from './Layout';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <div className="px-4 lg:px-40 py-8">
          <div className="relative min-h-[450px] w-full overflow-hidden rounded-xl bg-cover bg-center flex flex-col justify-end" style={{ backgroundImage: 'linear-gradient(0deg, rgba(16, 34, 16, 0.8) 0%, rgba(16, 34, 16, 0) 50%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCHCECm-AhJRqRWeDqZNHVR3IjIIntMlDMLS7u6uWfIFhPls18W8vBFbSyxtuykNspc385MrYrRHnZNKuZQwjDV-jRBQWwv8a68TpdrRabPZTD6MtdEtPgqQuVr6WkDv_aX5Qj7cwCD2BomQ6rl1UOvBxw1EvUZziUamJRZO_SQrshFSE5Rr3BkCgj4ctit9D7UsfNBSBmq500RRwMKv8XJ5N2OKbCGw_g3VYVnKrnIj2Uk9STpYM1cayO0XnYzOmh_ddZsdA4uNhM")' }}>
            <div className="p-8 lg:p-12">
              <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold uppercase tracking-widest rounded-full mb-4">Craftsmanship</span>
              <h1 className="text-white text-4xl lg:text-6xl font-bold leading-tight max-w-2xl">The Hands Behind the Craft</h1>
            </div>
          </div>
        </div>

        <section className="max-w-4xl mx-auto px-6 py-12 text-center">
          <p className="text-lg lg:text-xl leading-relaxed text-slate-800">
            At Nyanopan, every piece tells a story of heritage, patience, and skill. Our artisans in Nepal preserve the ancient tradition of wet-felting, transforming raw wool into beautiful, sustainable art. We believe in the power of hand-crafted goods to connect people across continents.
          </p>
          <div className="mt-8 flex justify-center gap-2 text-primary">
            <span className="material-symbols-outlined">fluid</span>
            <span className="material-symbols-outlined">nature_people</span>
            <span className="material-symbols-outlined">temp_preferences_custom</span>
          </div>
        </section>

        <section className="px-6 lg:px-40 py-16 bg-white">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">Meet the Artisans</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-4 rounded-xl shadow-sm border border-slate-200">
              <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-slate-200" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBTY-AyQAo_Y2W0m2DWZsyMUBEITCuxkdwhLSwZ8pKPOVRf4_NJGFHzYvP1gXLvz-_2vh2Z9ggA9hmmT3LFRKnv0_U5ZnpkXMqF_a_5hGZSvfOQQHeh6QvWDlerlxLcqXwY2xd7w_RXT2p2jsxnLIqDybCmpNmjJn6-LjrsYGBge8VkRHqnGVbBd-HPHhzM8zjfUZIzBJxxKT_kWq-UgxlVD3AMX_3rCY9VC0ko-xIKLMME4IwQDlC28AKgXzPfH0MS5RIqDl1sov4")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              <h3 className="text-xl font-bold text-slate-900">Maya Devi</h3>
              <p className="text-primary font-medium text-sm mb-3">Master Felter - 15 Years Experience</p>
              <p className="text-slate-700 text-sm leading-relaxed">
                Maya specializes in the complex shaping of our signature pet caves. She learned the craft from her mother and now leads our training workshops.
              </p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl shadow-sm border border-slate-200">
              <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-slate-200" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAHzPCbsSr2YSdFNcmawnBvwgTc7fotUm-UNyI5MnU-DEbJY6qK4s3ojFK8fp8qG9eiUNZQHlu_h1tfGOnUEUaJGEmTuU2iEEABxClW7N-1KDywlZ9zbiveczvkADzaMnNW6zR0vyZHJDPxk84xRv5meMzD99NJ21LpOLsrYpTJ39ReSImnJyrxbSdgOxJBLr0Sv6un-2A5H2WTEX9L3-FjMOG-mBufARHCkQNjszIvjCPyPr-YKLY8GyvkQIzDdo2Eh3rrlFvW1U8")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              <h3 className="text-xl font-bold text-slate-900">Rajesh Thapa</h3>
              <p className="text-primary font-medium text-sm mb-3">Dyeing Specialist</p>
              <p className="text-slate-700 text-sm leading-relaxed">
                Rajesh is the master of colors. He uses eco-friendly, AZO-free dyes to create the vibrant palettes that define Nyanopan's modern aesthetic.
              </p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl shadow-sm border border-slate-200">
              <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-slate-200" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDj7sSGnh8qDtDEjxG31_CYyZ-sqeKYW3JEOXPs0XQsTZ8IK84ZiGfoVnEMuV9LZYvCGpdc0CNeCHMahPS5UZrTlKfyg1P2ziGN7VaUf3EWqWCifofEmV68kjbsQe0ONPYmLWtylg679Y2RSkB54QKfVnmrHvIDec9Bvh0vqrycP3OpTGdF7jKSMNaTqld8q4BIDZz5DN4v819-gsDNwOENU2FZcWcl5ttgoC8wxE1d7hFi5TAg_rJwLSpaS4Hil2D4H3R0gJh9M3w")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              <h3 className="text-xl font-bold text-slate-900">Sunita Gurung</h3>
              <p className="text-primary font-medium text-sm mb-3">Needle-Felting Expert</p>
              <p className="text-slate-700 text-sm leading-relaxed">
                Sunita focuses on the intricate details. Her steady hand adds the final decorative touches that make each felted toy unique and full of character.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 lg:px-40 py-20 bg-slate-50">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-slate-900">The Ancient Art of Wet-Felting</h2>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                Wet-felting is one of the oldest forms of textile creation. It requires nothing but raw wool, warm water, soap, and the strength of the artisan's hands.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <span className="flex-none w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</span>
                  <div>
                    <h4 className="font-bold text-slate-900">Layering</h4>
                    <p className="text-sm text-slate-600">Loose wool fibers are layered in alternating directions to create strength.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-none w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</span>
                  <div>
                    <h4 className="font-bold text-slate-900">Agitation</h4>
                    <p className="text-sm text-slate-600">Warm soapy water is applied, and the wool is rubbed and rolled repeatedly.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-none w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">3</span>
                  <div>
                    <h4 className="font-bold text-slate-900">Fulling</h4>
                    <p className="text-sm text-slate-600">The fibers shrink and lock together, creating a dense, durable material that lasts for years.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="h-64 rounded-xl overflow-hidden shadow-lg" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAI_s5BlslLimF398ZVRw_D-dZTbkWNMLQUPJbU45IlzUJOqPv10okIsx0VlJcIvb29FEUYwLV_EoLz12Gb8StSTmUxeiwR17ytGLsKYKTadRMkpQowKknyCCZywd6f720f9Vq3P0Ue4_RYpXZByRxfSz2cV3d9A47PcaA-orBBj2zaA6zwTA1MXsaKkAwQTNtxcNKpwYsNHnlrKEzfAKhd0MO8DOEMg8BakXG4GXv20hPdMQU9gtSUP6pgt_qvcM3SZNBhrGvBA_Q")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              <div className="h-64 rounded-xl overflow-hidden shadow-lg mt-8" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAuUdViCZl2qXuelFmaz5TSiy4ahPy0il9Wk-3e7tx2iXCjNCtlojLFjPdSSOEeynd0xTb80JwRxcLCbniiLsSS-mzUx4ffhm4NqQYV6GRG_8ZulbAWcVhTXCinsfjZuL6em-0UpwX5brP7lB6lXd7rgKeewI9wWLz_2E2eEZbxbHb9BYyQdGD-gy_7LUBJ_6b6ZNbcO5XkLliZb1gKppS2A8h26UbpatHxvGXgcFw-LObaO5kGj7BPDscSfcf9D1ZXeLn7mjGA0gk")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            </div>
          </div>
        </section>

        <section className="bg-primary text-white px-6 lg:px-40 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <span className="material-symbols-outlined text-5xl mb-6">volunteer_activism</span>
            <h2 className="text-3xl font-bold mb-6">Supporting Local Communities</h2>
            <p className="text-xl opacity-90 leading-relaxed italic">
              "By partnering directly with our artisan collective, we ensure fair wages, safe working conditions, and the preservation of cultural heritage. Your purchase directly supports the livelihoods of over 50 families in the Kathmandu Valley."
            </p>
          </div>
        </section>

        <section className="px-6 lg:px-40 py-20 text-center bg-white">
          <h2 className="text-3xl font-bold mb-4 text-slate-900">Own a Piece of History</h2>
          <p className="text-slate-700 mb-8 max-w-xl mx-auto">Discover our collection of handmade felted products, each crafted with love and tradition.</p>
          <Link to="/shop" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold hover:brightness-110 transition-all">
            Shop the Collection
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
