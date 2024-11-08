import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Brain, Target, Heart, Star, Rocket, Users, ArrowRight } from 'lucide-react';
import HeroAnimation from '../components/HeroAnimation';
import OrganizationLogos from '../components/OrganizationLogos';
import Books from '../components/Books';
import ThoughtLeadership from '../components/ThoughtLeadership';

const Home = () => {
  const impactMetrics = [
    {
      icon: Brain,
      value: "40%",
      label: "Efficiency Gains",
      description: "in HR Operations through AI Innovation"
    },
    {
      icon: Users,
      value: "130+",
      label: "Product Leaders",
      description: "Mentored & Guided to Success"
    },
    {
      icon: Rocket,
      value: "$5M+",
      label: "Revenue Impact",
      description: "Through Strategic Innovation"
    },
    {
      icon: Star,
      value: "10k+",
      label: "Lives Impacted",
      description: "Across Industries"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-navy-900">
        <div className="absolute inset-0 z-0 opacity-20">
          <HeroAnimation />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-900/95 to-navy-900/90" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center pt-20" // Added padding top to account for navbar
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-12"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
                Transforming Organizations
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-emerald-400 text-transparent bg-clip-text">
                  Through Product Innovation
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-12">
                Building AI-powered solutions that drive efficiency, scale operations, 
                and create lasting impact.
              </p>
            </motion.div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link 
                to="/experience"
                className="group inline-flex items-center px-8 py-4 text-lg font-medium text-navy-900 bg-white rounded-lg hover:bg-navy-50 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View Impact
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/contact"
                className="group inline-flex items-center px-8 py-4 text-lg font-medium text-white border-2 border-white/20 rounded-lg hover:bg-white/10 transition-all transform hover:scale-105"
              >
                Let's Connect
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Impact Metrics */}
            <div className="grid md:grid-cols-4 gap-6 mb-16">
              {impactMetrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white"
                  >
                    <Icon className="h-6 w-6 mb-4 mx-auto text-white/80" />
                    <div className="text-3xl font-bold mb-1">{metric.value}</div>
                    <div className="text-lg font-medium mb-2">{metric.label}</div>
                    <div className="text-sm text-white/70">{metric.description}</div>
                  </motion.div>
                );
              })}
            </div>

            {/* Trusted By Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <OrganizationLogos />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Books Section */}
      <Books />

      {/* Thought Leadership */}
      <ThoughtLeadership />
    </div>
  );
};

export default Home;