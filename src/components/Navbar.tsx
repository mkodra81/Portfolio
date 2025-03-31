
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-darker/90 backdrop-blur-sm shadow-md py-4' : 'bg-transparent py-6'
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="#" className="text-highlight text-2xl font-bold">Portfolio</a>
        
        {/* Mobile menu button */}
        <button 
          className="lg:hidden text-text-light p-2" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <a href="#about" className="nav-link">About</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
      </div>
      
      {/* Mobile navigation */}
      <nav className={`
        lg:hidden fixed inset-0 bg-darker/95 backdrop-blur-md
        flex flex-col items-center justify-center space-y-8 text-xl
        transform transition-transform duration-300 ease-in-out
        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <a href="#about" className="nav-link" onClick={toggleMenu}>About</a>
        <a href="#projects" className="nav-link" onClick={toggleMenu}>Projects</a>
        <a href="#skills" className="nav-link" onClick={toggleMenu}>Skills</a>
        <a href="#contact" className="nav-link" onClick={toggleMenu}>Contact</a>
      </nav>
    </header>
  );
};

export default Navbar;
