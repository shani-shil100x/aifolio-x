
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com',
      label: 'LinkedIn'
    },
    {
      icon: Twitter,
      href: 'https://twitter.com',
      label: 'Twitter'
    },
    {
      icon: Mail,
      href: 'mailto:hello@developer.com',
      label: 'Email'
    }
  ];

  return (
    <footer className="relative py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-gray-800"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          {/* Logo */}
          <div className="text-3xl font-bold font-space gradient-text mb-8">
            Portfolio
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            {socialLinks.map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 glass-dark rounded-2xl hover:scale-110 transition-all duration-300 hover:shadow-lg animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                aria-label={social.label}
              >
                <social.icon 
                  size={24} 
                  className="text-white/70 group-hover:text-white transition-colors duration-300" 
                />
              </a>
            ))}
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-8 mb-12 text-white/70">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="hover:text-white transition-colors duration-300 hover:scale-105"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center text-white/60 text-sm">
            <p className="mb-4 md:mb-0">
              © 2024 Creative Developer. All rights reserved.
            </p>
            <p className="flex items-center space-x-2">
              <span>Made with</span>
              <Heart size={16} className="text-red-400 animate-pulse" />
              <span>and lots of coffee</span>
            </p>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
    </footer>
  );
};

export default Footer;
