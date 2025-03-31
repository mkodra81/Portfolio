
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-darker">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center">
          <span className="text-highlight mr-4">01.</span>
          <span>About Me</span>
          <span className="h-px bg-secondary/40 ml-6 flex-grow"></span>
        </h2>
        
        <div className="grid md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-3 space-y-6">
            <p className="text-lg">
              Hello! I'm John, a passionate developer with a deep interest in building digital products
              that are both beautiful and functional. My journey in web development started back in 2015
              when I decided to try customizing a Wordpress theme — turns out hacking together a custom theme
              taught me a lot about HTML & CSS!
            </p>
            
            <p className="text-lg">
              Fast-forward to today, and I've had the privilege of working at
              <span className="text-highlight"> an advertising agency</span>,
              <span className="text-highlight"> a start-up</span>, and
              <span className="text-highlight"> a large corporation</span>. My
              main focus these days is building accessible, inclusive products and
              digital experiences for a variety of clients.
            </p>
            
            <p className="text-lg">
              Here are a few technologies I've been working with recently:
            </p>
            
            <div className="grid grid-cols-2 gap-2 pt-2">
              <div className="flex items-center space-x-2">
                <span className="text-highlight">▹</span>
                <span>JavaScript (ES6+)</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-highlight">▹</span>
                <span>React</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-highlight">▹</span>
                <span>TypeScript</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-highlight">▹</span>
                <span>Node.js</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-highlight">▹</span>
                <span>Tailwind CSS</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-highlight">▹</span>
                <span>GraphQL</span>
              </div>
            </div>
            
            <div className="pt-4">
              <Button variant="outline" className="border-highlight text-highlight hover:bg-highlight/10">
                View Resume <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
          
          <div className="md:col-span-2 order-first md:order-last">
            <div className="relative max-w-xs mx-auto md:ml-0">
              <div className="relative rounded-md overflow-hidden group">
                <div className="absolute inset-0 bg-highlight/20 group-hover:bg-transparent transition-all duration-300 z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" 
                  alt="Portrait of John Doe" 
                  className="w-full rounded-md transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 border-2 border-highlight rounded-md -z-10 translate 
                              translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
