
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/shani-shil100x',
      label: 'GitHub',
      color: 'hover:text-purple-400'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/shani-shil-321b41366/',
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    {
      icon: Twitter,
      href: 'https://twitter.com',
      label: 'Twitter',
      color: 'hover:text-cyan-400'
    },
    {
      icon: Mail,
      href: 'mailto:hello@developer.com',
      label: 'Email',
      color: 'hover:text-pink-400'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 lg:py-20 overflow-hidden bg-gray-950">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900 to-gray-950"></div>
      
      <div className="container-spacing relative z-10">
        <div className="text-center">
          {/* Logo */}
          <div className="text-2xl lg:text-3xl font-bold font-space gradient-text mb-8 lg:mb-10">
            Portfolio
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 lg:space-x-6 mb-10 lg:mb-12">
            {socialLinks.map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-3 lg:p-4 premium-card hover:scale-110 transition-all duration-300 hover:shadow-lg animate-fade-in-up ${social.color}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                aria-label={social.label}
              >
                <social.icon 
                  size={20} 
                  className="text-gray-400 group-hover:text-current transition-colors duration-300" 
                />
              </a>
            ))}
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 lg:gap-8 mb-10 lg:mb-12 text-gray-400">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="hover:text-purple-400 transition-colors duration-300 hover:scale-105 text-sm lg:text-base"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Scroll to Top Button */}
          <div className="flex justify-center mb-8">
            <button
              onClick={scrollToTop}
              className="group p-3 premium-card hover:scale-110 transition-all duration-300 hover:shadow-lg text-gray-400 hover:text-purple-400"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-6 lg:mb-8"></div>

          {/* Copyright */}
          <div className="flex flex-col lg:flex-row justify-between items-center text-gray-500 text-sm lg:text-base space-y-4 lg:space-y-0">
            <p>
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
      <div className="absolute bottom-0 left-0 w-48 h-48 lg:w-64 lg:h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-0 w-64 h-64 lg:w-96 lg:h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
    </footer>
  );
};

export default Footer;
