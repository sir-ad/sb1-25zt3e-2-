import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Quote, ChevronRight } from 'lucide-react';

// Applying Miller's Law - Grouping testimonials into digestible chunks
const LeadershipTestimonials = () => {
  const [activeCategory, setActiveCategory] = useState('Leadership Impact');

  const testimonials = [
    {
      category: "Leadership Impact",
      icon: "👑",
      testimonials: [
        {
          quote: "Adarsh's vision transformed our entire product development process. His ability to see both the big picture and minute details is remarkable.",
          author: "Sanjay Singh",
          role: "CEO, HROne",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80"
        },
        {
          quote: "Under Adarsh's leadership, we've achieved what seemed impossible. His strategic thinking has elevated our entire team's capabilities.",
          author: "Priya Sharma",
          role: "Product Director",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80"
        }
      ]
    },
    {
      category: "Innovation Impact",
      icon: "💡",
      testimonials: [
        {
          quote: "The AI solutions Adarsh developed have revolutionized how we approach HR tech. His innovative thinking sets new industry standards.",
          author: "Rajesh Kumar",
          role: "HR Director, Fortune 500",
          image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=100&h=100&q=80"
        },
        {
          quote: "Adarsh's product innovations have transformed our efficiency by 40%. His solutions are both cutting-edge and practical.",
          author: "Meera Patel",
          role: "CTO, TechCorp",
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100&q=80"
        }
      ]
    },
    {
      category: "Mentorship Impact",
      icon: "🌟",
      testimonials: [
        {
          quote: "Adarsh's mentorship was pivotal in my journey to becoming a PM at Google. His structured approach and insights are invaluable.",
          author: "Rahul Verma",
          role: "PM at Google",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80"
        },
        {
          quote: "The clarity and depth of product thinking I gained through Adarsh's mentorship completely changed my career trajectory.",
          author: "Neha Gupta",
          role: "Senior PM at Microsoft",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80"
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-navy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-navy-900 mb-4">
            Voices of Impact
          </h2>
          <p className="text-xl text-navy-600">
            Hear from leaders, mentees, and innovators about their transformative experiences
          </p>
        </motion.div>

        {/* Category Selection - Applying Hick's Law */}
        <div className="flex justify-center mb-12 space-x-4">
          {testimonials.map((category) => (
            <motion.button
              key={category.category}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveCategory(category.category)}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                activeCategory === category.category
                  ? 'bg-navy-900 text-white shadow-lg'
                  : 'bg-white text-navy-600 hover:bg-navy-50'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.category}
            </motion.button>
          ))}
        </div>

        {/* Testimonials Grid - Applying Law of Proximity */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials
            .find(cat => cat.category === activeCategory)
            ?.testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.2 }}
                className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <Quote className="h-8 w-8 text-navy-200 mb-4" />
                
                <p className="text-lg text-navy-700 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold text-navy-900">
                        {testimonial.author}
                      </div>
                      <div className="text-navy-600 text-sm">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  
                  <ChevronRight className="h-5 w-5 text-navy-300 group-hover:text-navy-600 transform group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipTestimonials;