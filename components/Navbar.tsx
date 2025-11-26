import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className={`mx-auto max-w-5xl rounded-full transition-all duration-300 ${scrolled ? 'glass-nav shadow-[0_0_15px_rgba(6,182,212,0.15)] px-6 py-3' : 'bg-transparent px-0 py-0'}`}>
            <div className="flex justify-between items-center">
              
              <a href="#" className="flex items-center gap-2 group">
                <div className="bg-gradient-to-tr from-cyan-500 to-blue-600 text-white p-2 rounded-lg group-hover:rotate-12 transition-transform">
                    <Code2 size={20} />
                </div>
                <span className="text-xl font-bold text-white tracking-tight">
                  Mohit<span className="text-cyan-400">.dev</span>
                </span>
              </a>

              {/* Desktop Nav */}
              <div className="hidden md:flex items-center gap-1">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition-all"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              
              <div className="hidden md:block">
                  <a href="#contact" className="px-5 py-2 bg-white text-slate-900 hover:bg-cyan-50 text-sm font-bold rounded-full transition-colors shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                    Contact
                  </a>
              </div>

              {/* Mobile Toggle */}
              <button 
                className="md:hidden text-white p-2"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-md pt-24 px-6 md:hidden animate-fade-in">
          <div className="flex flex-col gap-6 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-xl font-medium text-slate-300 hover:text-cyan-400 py-2 block"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
                href="#contact" 
                className="mt-4 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full"
                onClick={() => setIsOpen(false)}
            >
                Contact Me
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;