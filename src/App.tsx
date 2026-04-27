import React, { useState, useEffect, FormEvent } from 'react';
import { Pizza, MapPin, Clock, Phone, Instagram, Facebook, ChevronRight, Menu as MenuIcon, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const RESTAURANT_PHONE = '+46702929024';

const navLinks = [
  { name: 'Hem', href: '#' },
  { name: 'Beställ Online', href: '#sms-order' },
  { name: 'Dagens Lunch', href: '#lunch' },
  { name: 'Meny', href: '#meny' },
  { name: 'Kontakt', href: '#kontakt' },
];

const dishes = [
  { id: 1, name: 'Margherita', price: '110 kr', image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=2070&auto=format&fit=crop', category: 'Pizza' },
  { id: 2, name: 'Vesuvio', price: '120 kr', image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=1935&auto=format&fit=crop', category: 'Pizza' },
  { id: 3, name: 'Calzone', price: '125 kr', image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=2076&auto=format&fit=crop', category: 'Inbakad' },
  { id: 4, name: 'Vegetaria', price: '130 kr', image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?q=80&w=1974&auto=format&fit=crop', category: 'Pizza' },
];

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#020202] text-white">

      {/* NAVBAR */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-fuchsia-600 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(217,70,239,0.5)]">
              <Pizza className="text-white" />
            </div>
            <span className="text-2xl font-black uppercase tracking-tighter">Köket</span>
          </div>

          <div className="hidden md:flex gap-10">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm uppercase hover:text-fuchsia-500">
                {link.name}
              </a>
            ))}
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
            <MenuIcon />
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative h-screen flex items-center px-6">
        <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070" className="absolute w-full h-full object-cover opacity-60" />
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-7xl font-black uppercase italic">Köket</h1>
          <h2 className="text-5xl font-black text-fuchsia-500">Restaurang & Pizzeria</h2>
          <p className="mt-6 text-white/60">God mat i Överkalix</p>

          <div className="mt-10 flex gap-6">
            <a href="#sms-order" className="px-10 py-4 bg-fuchsia-600 rounded-full">Beställ Online</a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default App;
