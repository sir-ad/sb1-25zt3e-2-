import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Calendar, Brain, Target, Heart, Star, ArrowRight, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    interest: '',
    message: ''
  });

  const engagementTypes = [
    {
      icon: Target,
      title: "Product Leadership",
      description: "Strategic guidance for scaling products and teams",
      benefits: [
        "AI & Innovation Strategy",
        "Product Vision & Roadmap",
        "Team Structure & Growth"
      ]
    },
    {
      icon: Brain,
      title: "Advisory & Consulting",
      description: "Transform your product organization",
      benefits: [
        "Product Process Optimization",
        "AI Implementation Strategy",
        "Growth Framework Design"
      ]
    },
    {
      icon: Heart,
      title: "Speaking & Workshops",
      description: "Inspire and educate your team",
      benefits: [
        "Product Leadership Workshops",
        "Innovation Masterclasses",
        "Team Training Sessions"
      ]
    }
  ];

  const quickLinks = [
    {
      title: "Book a Strategy Call",
      description: "30-minute focused discussion",
      link: "https://calendly.com/adarshagrahari/strategy"
    },
    {
      title: "Connect on LinkedIn",
      description: "Professional updates & insights",
      link: "https://linkedin.com/in/adarshagrahari"
    }
  ];

  const handleNextStep = () => {
    setFormStep(prev => prev + 1);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-navy-900 to-navy-800 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Let's Create
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 text-transparent bg-clip-text">
              Something Extraordinary
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-navy-200 max-w-3xl mx-auto leading-relaxed">
            Transform your product organization with strategic leadership and AI innovation
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="py-20 -mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Engagement Types */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                <h2 className="text-3xl font-bold text-navy-900 mb-8">
                  How Can I Help You Scale?
                </h2>
                
                <div className="space-y-8">
                  {engagementTypes.map((type, index) => {
                    const Icon = type.icon;
                    return (
                      <motion.button
                        key={index}
                        whileHover={{ x: 5 }}
                        onClick={() => {
                          setFormData(prev => ({ ...prev, interest: type.title }));
                          handleNextStep();
                        }}
                        className="w-full text-left"
                      >
                        <div className="group bg-navy-50 rounded-xl p-6 hover:bg-navy-100 transition-all">
                          <div className="flex items-start gap-4">
                            <div className="p-3 bg-white rounded-lg text-navy-600">
                              <Icon className="h-6 w-6" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-navy-900 mb-2">
                                {type.title}
                              </h3>
                              <p className="text-navy-600 mb-4">
                                {type.description}
                              </p>
                              <ul className="space-y-2">
                                {type.benefits.map((benefit, idx) => (
                                  <li key={idx} className="flex items-center text-navy-600">
                                    <Star className="h-4 w-4 mr-2 text-navy-400" />
                                    {benefit}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <ArrowRight className="h-5 w-5 text-navy-400 group-hover:text-navy-600 group-hover:translate-x-1 transition-all" />
                          </div>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Quick Connect */}
            <div className="space-y-8">
              {/* Quick Links */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-navy-900 mb-6">
                  Quick Connect
                </h3>
                <div className="space-y-4">
                  {quickLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 5 }}
                      className="block group"
                    >
                      <div className="p-4 bg-navy-50 rounded-lg hover:bg-navy-100 transition-all">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-medium text-navy-900">
                              {link.title}
                            </h4>
                            <p className="text-sm text-navy-600">
                              {link.description}
                            </p>
                          </div>
                          <ArrowRight className="h-5 w-5 text-navy-400 group-hover:text-navy-600 group-hover:translate-x-1 transition-all" />
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-navy-900 mb-6">
                  Contact Details
                </h3>
                <div className="space-y-4">
                  <a
                    href="mailto:adarsh.agrahari26@gmail.com"
                    className="flex items-center text-navy-600 hover:text-navy-900 transition-colors"
                  >
                    <Mail className="h-5 w-5 mr-3" />
                    adarsh.agrahari26@gmail.com
                  </a>
                  <a
                    href="tel:+919131771382"
                    className="flex items-center text-navy-600 hover:text-navy-900 transition-colors"
                  >
                    <Phone className="h-5 w-5 mr-3" />
                    +91 91317 71382
                  </a>
                  <div className="flex items-center text-navy-600">
                    <MapPin className="h-5 w-5 mr-3" />
                    Bangalore, India
                  </div>
                </div>
              </div>

              {/* Social Proof */}
              <div className="bg-navy-900 text-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold mb-6">
                  Impact Numbers
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-3xl font-bold">130+</div>
                    <div className="text-navy-200">Leaders Mentored</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">40%</div>
                    <div className="text-navy-200">Efficiency Gains</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">$5M+</div>
                    <div className="text-navy-200">Revenue Impact</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">85%</div>
                    <div className="text-navy-200">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;