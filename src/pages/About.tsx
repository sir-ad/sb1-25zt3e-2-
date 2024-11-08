import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Target, Heart, Star, Medal, Book, Rocket } from 'lucide-react';
import TimelineJourney from '../components/TimelineJourney';
import LeadershipTestimonials from '../components/LeadershipTestimonials';
import ImpactGallery from '../components/ImpactGallery';

const About = () => {
  const philosophies = [
    {
      icon: Brain,
      title: "First Principles Thinking",
      description: "Breaking down complex problems to their fundamental truths and building up from there. This approach has been key in driving innovation across industries."
    },
    {
      icon: Target,
      title: "Impact Over Activity",
      description: "Focus on measurable outcomes that create real value. Every product decision should be tied to meaningful user and business impact."
    },
    {
      icon: Heart,
      title: "User-Centric Innovation",
      description: "True innovation starts with deep user empathy. Understanding unspoken needs leads to breakthrough solutions."
    }
  ];

  const milestones = [
    {
      year: "2024",
      title: "Leading AI Innovation",
      description: "Transforming HR tech with ONE AI, creating personalized experiences at scale",
      metric: "40% efficiency gains"
    },
    {
      year: "2023",
      title: "Scaling FinTech",
      description: "Revolutionized retail finance through innovative EMI solutions",
      metric: "$5M+ revenue impact"
    },
    {
      year: "2022",
      title: "Product Leadership",
      description: "Mentoring next-gen product leaders and driving innovation",
      metric: "130+ leaders mentored"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Jobs-inspired impact statement */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-navy-900 to-navy-800">
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
            A Journey of
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 text-transparent bg-clip-text">
              Relentless Innovation
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-navy-200 max-w-3xl mx-auto leading-relaxed">
            From UPSC to product leadership, every step has been about pushing boundaries 
            and creating meaningful impact.
          </p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12"
          >
            <Link
              to="/experience"
              className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-lg text-lg font-medium transition-all group"
            >
              Explore My Journey
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Philosophy Section - Kunal Shah style insights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-navy-900 mb-4">
              Product Philosophy
            </h2>
            <p className="text-xl text-navy-600">
              Core principles that drive innovation and growth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {philosophies.map((philosophy, index) => {
              const Icon = philosophy.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-navy-50 rounded-xl p-8 hover:shadow-lg transition-all"
                >
                  <div className="p-3 bg-white rounded-lg w-fit mb-6">
                    <Icon className="h-6 w-6 text-navy-600" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-4">
                    {philosophy.title}
                  </h3>
                  <p className="text-navy-600 leading-relaxed">
                    {philosophy.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journey Timeline - Steve Jobs style storytelling */}
      <TimelineJourney />

      {/* Impact Gallery */}
      <ImpactGallery />

      {/* Testimonials */}
      <LeadershipTestimonials />

      {/* Call to Action - Jobs' principle of creating desire */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold">
              Ready to Build Something Extraordinary?
            </h2>
            <p className="text-xl text-navy-200">
              Let's create products that don't just meet expectations—they redefine them.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-navy-900 rounded-lg text-lg font-medium hover:bg-navy-50 transition-colors group"
            >
              Start a Conversation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;