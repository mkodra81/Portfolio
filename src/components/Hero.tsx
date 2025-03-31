
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-darker to-dark z-0" />
      
      {/* Content */}
      <div className="container-custom relative z-10 py-20">
        <div className="flex flex-col items-start max-w-2xl">
          <p className="text-highlight opacity-0 animate-fade-in mb-2">Hello, my name is</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-light opacity-0 animate-fade-in-delay-1">
            John Doe
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-text-muted mt-2 opacity-0 animate-fade-in-delay-2">
            I build things for the web.
          </h2>
          <p className="text-text-muted text-lg mt-6 max-w-xl opacity-0 animate-fade-in-delay-3">
            I'm a full-stack developer specializing in building exceptional digital experiences.
            Currently, I'm focused on building accessible, human-centered products.
          </p>
          
          <div className="mt-8 opacity-0 animate-fade-in-delay-3">
            <Button
              size="lg"
              className="bg-highlight hover:bg-highlight-dark text-darker font-semibold"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in-delay-3">
        <button 
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex flex-col items-center text-text-muted hover:text-highlight transition-colors duration-300"
          aria-label="Scroll down"
        >
          <span className="mb-2 text-sm">Scroll Down</span>
          <ArrowDown size={20} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
