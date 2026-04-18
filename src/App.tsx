/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Scissors, 
  Sparkles, 
  User, 
  Star, 
  Menu, 
  X, 
  Instagram, 
  Facebook, 
  Twitter,
  MessageCircle,
  CheckCircle2
} from 'lucide-react';

// --- Constants ---

const HAIR_SERVICES = [
  { name: 'Haircut', price: '₹300 – ₹800' },
  { name: 'Hair Styling', price: '₹500 – ₹1500' },
  { name: 'Hair Coloring', price: '₹1500 – ₹5000' },
  { name: 'Hair Smoothening', price: '₹3000 – ₹8000' },
];

const OTHER_SERVICES = [
  { name: 'Facial Rituals', price: '₹800 – ₹2500' },
  { name: 'Waxing / Smooth', price: '₹300 – ₹1500' },
  { name: 'Beard Sculpting', price: '₹150 – ₹400' },
  { name: 'Luxury Hair Spa', price: '₹800 – ₹2000' },
];

const GALLERY_IMAGES = [
  { src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=400' },
  { src: 'https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&q=80&w=400' },
  { src: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&q=80&w=400' },
  { src: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?auto=format&fit=crop&q=80&w=400' },
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-luxury-border bg-luxury-black/90 sticky top-0 z-50 py-5">
      <div className="container mx-auto px-10 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-[0.2em] text-primary serif uppercase">
          LEGEND
        </a>

        <div className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-widest text-luxury-muted">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#services" className="hover:text-primary transition-colors">Services</a>
          <a href="#gallery" className="hover:text-primary transition-colors">Gallery</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          <div className="text-primary font-bold">+91 99116 91417</div>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            className="md:hidden bg-luxury-card border-b border-luxury-border origin-top h-64 flex flex-col items-center justify-center gap-6 uppercase text-xs tracking-widest font-bold"
          >
            <a href="#about" onClick={() => setIsOpen(false)}>About</a>
            <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
            <a href="#gallery" onClick={() => setIsOpen(false)}>Gallery</a>
            <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionTitle = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="flex justify-between items-baseline border-b border-luxury-border pb-2 mb-4">
    <h3 className="text-lg serif text-primary">{title}</h3>
    {subtitle && <span className="text-[10px] text-luxury-muted uppercase font-sans tracking-widest">{subtitle}</span>}
  </div>
);

const PriceLine = ({ name, price }: { name: string, price: string, key?: string }) => (
  <div className="flex justify-between py-2 text-[13px] border-b border-dashed border-white/5 last:border-0">
    <span className="text-white/80">{name}</span>
    <span className="text-primary font-bold">{price}</span>
  </div>
);

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-luxury-black flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 lg:h-[calc(100vh-80px)] p-4 sm:p-5 lg:overflow-hidden grid grid-cols-1 lg:grid-cols-[1.2fr_1fr_1fr] grid-rows-auto lg:grid-rows-[1fr_1fr] gap-4">
        
        {/* HERO TILE */}
        <div id="about" className="lg:row-span-2 sleek-card relative flex flex-col justify-end p-8 md:p-10 min-h-[400px] lg:min-h-0 bg-cover bg-center" style={{ backgroundImage: "linear-gradient(to bottom, transparent, #000 90%), url('https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1024')" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="z-10"
          >
            <h1 className="text-4xl md:text-5xl serif text-primary leading-tight mb-4">
              Premium Hair & <br /> Beauty Experience
            </h1>
            <p className="text-sm text-luxury-muted max-w-sm mb-8 leading-relaxed">
              Elevate your look with our expert stylists and luxury treatments at Gurugram's finest unisex destination.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#book" className="sleek-btn-primary">Book Now</a>
              <a href="tel:+919911691417" className="sleek-btn-outline">Call Now</a>
            </div>
          </motion.div>
        </div>

        {/* SERVICES TILE */}
        <div id="services" className="sleek-card p-5 overflow-y-auto">
          <SectionTitle title="Hair Services" subtitle="Est. 2018" />
          <div className="space-y-1 mb-6">
            {HAIR_SERVICES.map(s => <PriceLine key={s.name} {...s} />)}
          </div>
          <SectionTitle title="Beauty & Grooming" />
          <div className="space-y-1">
            {OTHER_SERVICES.map(s => <PriceLine key={s.name} {...s} />)}
          </div>
        </div>

        {/* GALLERY TILE */}
        <div id="gallery" className="sleek-card grid grid-cols-2 gap-1 p-1">
          {GALLERY_IMAGES.map((img, i) => (
            <div 
              key={i} 
              className="relative aspect-square overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImage(img.src)}
            >
              <img src={img.src} alt="Gallery" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
            </div>
          ))}
        </div>

        {/* BOOKING TILE */}
        <div id="book" className="sleek-card p-5 flex flex-col">
          <SectionTitle title="Quick Appointment" />
          <form className="space-y-3 flex-1 flex flex-col" onSubmit={e => { e.preventDefault(); alert("Booking confirmed!"); }}>
            <input type="text" placeholder="Your Name" required className="sleek-input" />
            <input type="tel" placeholder="Phone Number" required className="sleek-input" />
            <select className="sleek-input text-luxury-muted">
              <option>Select Service</option>
              {HAIR_SERVICES.concat(OTHER_SERVICES).map(s => <option key={s.name}>{s.name}</option>)}
            </select>
            <input type="datetime-local" required className="sleek-input" />
            <button type="submit" className="sleek-btn-primary mt-auto w-full">Confirm Booking</button>
          </form>
        </div>

        {/* INFO TILE */}
        <div id="contact" className="sleek-card p-5 flex flex-col justify-between gap-6">
          <div className="bg-primary/10 border border-primary/20 p-5 rounded-[4px] text-center">
            <div className="text-primary text-2xl mb-1">★★★★★</div>
            <div className="text-2xl font-bold font-serif italic tracking-wider">4.9 / 5.0</div>
            <div className="text-[10px] text-primary uppercase font-bold tracking-[0.2em] mt-1">1,400+ Trusted Reviews</div>
          </div>
          
          <div className="space-y-4">
            <div>
              <div className="text-primary text-[11px] font-bold uppercase tracking-widest mb-1">Our Location</div>
              <p className="text-[11px] text-luxury-muted leading-relaxed uppercase">
                Shop No. 1-2, Pink Town, U-25 Rd, DLF Phase 3,<br />
                Sector 24, Gurugram, Haryana 122002
              </p>
            </div>
            <div className="flex justify-between items-center bg-black/40 p-3 border border-white/5">
              <span className="text-[10px] text-white/50 font-bold uppercase tracking-widest">Mon - Sun</span>
              <span className="text-[11px] text-primary font-bold">10:00 AM - 9:00 PM</span>
            </div>
          </div>
        </div>

      </main>

      <footer className="bg-black border-t border-luxury-border py-4 px-10 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-luxury-muted">
        <div>&copy; 2024 LEGEND Unisex Salon by Anees Malik</div>
        <div className="hidden md:block">Excellence in Grooming</div>
        <div className="flex gap-6 border-l border-luxury-border pl-6">
          <a href="#" className="hover:text-primary transition-colors">Instagram</a>
          <a href="#" className="hover:text-primary transition-colors">Facebook</a>
          <a href="#" className="hover:text-primary transition-colors underline decoration-primary/50">Google Maps</a>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <motion.a 
        href="https://wa.me/919911691417" 
        target="_blank"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-20 right-8 lg:absolute lg:bottom-6 lg:right-6 lg:z-20 w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg text-white group"
      >
        <MessageCircle size={24} />
      </motion.a>

      {/* Gallery Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.img 
              src={selectedImage} 
              className="max-w-full max-h-full object-contain sleek-card"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              referrerPolicy="no-referrer"
            />
            <button className="absolute top-8 right-8 text-white p-2">
              <X className="w-8 h-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
