import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Briefcase } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Journey', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Speaking', path: '/speaking' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || location.pathname !== '/' 
          ? 'bg-white/90 backdrop-blur-sm shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20"> {/* Increased height from h-16 to h-20 */}
          <div className="flex items-center">
            <Link
              to="/"
              className={`flex items-center space-x-2 transition-colors ${
                isScrolled || location.pathname !== '/' 
                  ? 'text-navy-900' 
                  : 'text-white'
              }`}
            >
              <Briefcase className="h-6 w-6" />
              <span className="font-bold text-xl">Adarsh Agrahari</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative text-sm font-medium transition-colors group ${
                  isScrolled || location.pathname !== '/' 
                    ? 'text-navy-600 hover:text-navy-900'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.name}
                <span 
                  className={`absolute -bottom-1 left-0 w-full h-0.5 transform origin-left transition-transform duration-300 ${
                    location.pathname === link.path 
                      ? 'scale-x-100'
                      : 'scale-x-0 group-hover:scale-x-100'
                  } ${
                    isScrolled || location.pathname !== '/' 
                      ? 'bg-navy-600'
                      : 'bg-white'
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-colors p-2 rounded-lg ${
                isScrolled || location.pathname !== '/' 
                  ? 'text-navy-900 hover:bg-navy-50'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute top-20 left-0 right-0 bg-white shadow-lg border-t border-navy-100"
            >
              <div className="px-4 py-2 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-lg transition-colors ${
                      location.pathname === link.path
                        ? 'bg-navy-50 text-navy-900'
                        : 'text-navy-600 hover:bg-navy-50 hover:text-navy-900'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;