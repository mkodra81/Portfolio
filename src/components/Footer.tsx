
import React from 'react';
import { Mail, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 bg-darker border-t border-secondary/20">
      <div className="container-custom">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-4">
            <a
              href="mailto:contact@example.com"
              aria-label="Email"
              className="text-text-muted hover:text-highlight transition-colors"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-text-muted hover:text-highlight transition-colors"
            >
              <Github size={20} />
            </a>
          </div>
          
          <p className="text-text-muted text-sm">
            Designed & Built by John Doe
          </p>
          <p className="text-text-muted text-xs mt-2">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
