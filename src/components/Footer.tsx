
import React from 'react';
import { Mail, Github, Linkedin, Twitter, ExternalLink, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-12 bg-darker border-t border-secondary/20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1 - About */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-semibold text-highlight mb-2">John Doe</h3>
            <p className="text-text-muted text-sm max-w-xs">
              Full Stack Developer specializing in creating exceptional digital experiences with a focus on performance and user experience.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-lg font-semibold text-text-light mb-2">Quick Links</h3>
            <Link to="/#about" className="text-text-muted hover:text-highlight transition-colors text-sm">About</Link>
            <Link to="/#projects" className="text-text-muted hover:text-highlight transition-colors text-sm">Projects</Link>
            <Link to="/#skills" className="text-text-muted hover:text-highlight transition-colors text-sm">Skills</Link>
            <Link to="/#contact" className="text-text-muted hover:text-highlight transition-colors text-sm">Contact</Link>
            <a 
              href="/resume.pdf" 
              download="John_Doe_Resume.pdf"
              className="text-text-muted hover:text-highlight transition-colors text-sm flex items-center gap-1"
            >
              Resume <ExternalLink size={12} />
            </a>
          </div>

          {/* Column 3 - Connect */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-lg font-semibold text-text-light mb-2">Connect</h3>
            <div className="flex flex-col space-y-3">
              <a
                href="mailto:contact@example.com"
                className="text-text-muted hover:text-highlight transition-colors text-sm flex items-center gap-2"
              >
                <Mail size={16} /> contact@example.com
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-highlight transition-colors text-sm flex items-center gap-2"
              >
                <Github size={16} /> github.com/johndoe
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-highlight transition-colors text-sm flex items-center gap-2"
              >
                <Linkedin size={16} /> linkedin.com/in/johndoe
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-highlight transition-colors text-sm flex items-center gap-2"
              >
                <Twitter size={16} /> @johndoe
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-secondary/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-text-muted text-sm">
            © {new Date().getFullYear()} John Doe. All Rights Reserved.
          </p>
          <div className="flex mt-4 md:mt-0">
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-2 text-text-muted hover:text-highlight transition-colors text-sm"
            >
              Back to Top <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
