"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { PrimaryButton } from './ui/GlassUI';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Destinos', href: '#destinos' },
    { name: 'Como Funciona', href: '#como-funciona' },
    { name: 'Depoimentos', href: '#depoimentos' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'py-4' 
            : 'py-6'
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <div className={`flex items-center gap-2 transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-90'}`}>
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#ed2643] to-orange-500 shadow-[0_0_15px_rgba(237,38,67,0.5)]" />
            <span className="text-xl font-bold text-white tracking-tight drop-shadow-md">Vipsul</span>
          </div>

          {/* Liquid Glass Desktop Menu - Floating Pill */}
          <div className={`
            hidden md:flex items-center gap-8 px-10 py-4 rounded-full border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] transition-all duration-300
            ${isScrolled 
              ? 'bg-[#0f172a]/80 backdrop-blur-xl' 
              : 'bg-white/5 backdrop-blur-md hover:bg-white/10'}
          `}>
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute inset-x-0 -bottom-1 h-px bg-[#ed2643] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </a>
            ))}
          </div>

          {/* CTA Desktop */}
          <div className="hidden md:block">
             <PrimaryButton className="px-6 py-2 text-xs bg-[#ed2643]/90 backdrop-blur-sm shadow-lg">Falar Agora</PrimaryButton>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 rounded-lg bg-white/5 backdrop-blur-md border border-white/10"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 z-40 bg-[#0f172a]/95 backdrop-blur-2xl md:hidden pt-24"
          >
            <div className="container mx-auto px-4 flex flex-col gap-8 text-center">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-light text-white hover:text-[#ed2643] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="mt-8">
                <PrimaryButton className="w-full justify-center">Planejar Viagem</PrimaryButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
