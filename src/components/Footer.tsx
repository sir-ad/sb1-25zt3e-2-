import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Twitter, Book, Calendar } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/adarshagrahari",
      label: "LinkedIn"
    },
    {
      icon: Twitter,
      href: "https://twitter.com/adarshagrahari",
      label: "Twitter"
    },
    {
      icon: Mail,
      href: "mailto:adarsh.agrahari26@gmail.com",
      label: "Email"
    }
  ];

  const quickLinks = [
    { name: "About", path: "/about" },
    { name: "Experience", path: "/experience" },
    { name: "Speaking", path: "/speaking" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" }
  ];

  const mentorshipLinks = [
    {
      name: "Upraised",
      href: "https://www.upraised.co/mentors"
    },
    {
      name: "ISB Executive Education",
      href: "https://www.isb.edu/executive-education"
    }
  ];

  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-bold">
              Adarsh Agrahari
            </Link>
            <p className="text-navy-300">
              Product Leader • Innovation Catalyst • Author
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy-300 hover:text-white transition-colors"
                    aria-label={link.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-navy-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mentorship */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Mentorship</h3>
            <ul className="space-y-2">
              {mentorshipLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy-300 hover:text-white transition-colors flex items-center"
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <a
                href="mailto:adarsh.agrahari26@gmail.com"
                className="text-navy-300 hover:text-white transition-colors flex items-center"
              >
                <Mail className="h-4 w-4 mr-2" />
                adarsh.agrahari26@gmail.com
              </a>
              <p className="text-navy-300 flex items-center">
                <Book className="h-4 w-4 mr-2" />
                Author of 2 Books
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-navy-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-navy-300 text-sm">
              © {currentYear} Adarsh Agrahari. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link
                to="/privacy"
                className="text-navy-300 hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-navy-300 hover:text-white transition-colors text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;