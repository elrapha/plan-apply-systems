import React, { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-slate-900 text-white z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 overflow-hidden rounded-md bg-white/95 ring-1 ring-white/20">
              <img
                src={`${process.env.PUBLIC_URL}/logo.png`}
                alt="Plan Apply Systems logo"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Plan Apply Systems</h1>
              <p className="text-xs text-amber-400">Processing Plant Consultancy</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <button onClick={() => scrollToSection('home')} className="hover:text-amber-400 transition font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="hover:text-amber-400 transition font-medium">
              Services
            </button>
            <button onClick={() => scrollToSection('about')} className="hover:text-amber-400 transition font-medium">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-amber-400 transition font-medium">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-amber-400"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-slate-700">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 px-4 hover:bg-slate-800 hover:text-amber-400 transition">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left py-2 px-4 hover:bg-slate-800 hover:text-amber-400 transition">
              Services
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 px-4 hover:bg-slate-800 hover:text-amber-400 transition">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 px-4 hover:bg-slate-800 hover:text-amber-400 transition">
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
