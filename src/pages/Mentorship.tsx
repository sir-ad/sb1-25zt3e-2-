import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Target, Star, Book, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Mentorship = () => {
  const programs = [
    {
      title: "1:1 Product Leadership Mentoring",
      description: "Personalized guidance for senior PMs and product leaders",
      duration: "3 months",
      features: [
        "Bi-weekly 1:1 sessions",
        "Personalized growth roadmap",
        "Leadership challenges",
        "Network access"
      ],
      link: "/contact"
    },
    {
      title: "Group Mentorship Cohort",
      description: "Collaborative learning with peer product managers",
      duration: "2 months",
      features: [
        "Weekly group sessions",
        "Real-world case studies",
        "Peer learning",
        "Project feedback"
      ],
      link: "/contact"
    }
  ];

  const testimonials = [
    {
      quote: "Adarsh's mentorship was pivotal in my journey to becoming a PM at Google.",
      author: "Rahul Verma",
      role: "Product Manager, Google",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80"
    },
    {
      quote: "The structured approach and real-world insights helped me grow exponentially.",
      author: "Priya Sharma",
      role: "Senior PM, Microsoft",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Product Leadership Mentorship
            </h1>
            <p className="text-xl text-navy-200 mb-8">
              Accelerate your product career through structured guidance and real-world insights
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-navy-300" />
                <span>130+ Leaders Mentored</span>
              </div>
              <div className="flex items-center space-x-2">
                <Target className="h-5 w-5 text-navy-300" />
                <span>85% Success Rate</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-navy-300" />
                <span>4.9/5 Rating</span>
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-navy-900 rounded-lg text-lg font-medium hover:bg-navy-50 transition-colors group"
            >
              Apply for Mentorship
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-navy-900 mb-4">
              Mentorship Programs
            </h2>
            <p className="text-xl text-navy-600">
              Tailored guidance for your product leadership journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-navy-50 rounded-xl p-8 hover:shadow-lg transition-all"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-navy-900 mb-2">
                    {program.title}
                  </h3>
                  <p className="text-navy-600">{program.description}</p>
                </div>
                <div className="flex items-center text-navy-600 mb-6">
                  <Calendar className="h-5 w-5 mr-2" />
                  {program.duration}
                </div>
                <ul className="space-y-3 mb-8">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-navy-700">
                      <Star className="h-5 w-5 text-navy-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={program.link}
                  className="inline-flex items-center text-navy-600 hover:text-navy-800 transition-colors group"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-navy-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-navy-600">
              Hear from mentees who transformed their product careers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 hover:shadow-lg transition-all"
              >
                <p className="text-lg text-navy-700 mb-6">"{testimonial.quote}"</p>
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
                    <div className="text-navy-600">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-navy-900 mb-4">
              Free Resources
            </h2>
            <p className="text-xl text-navy-600">
              Start your learning journey with these resources
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.a
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-navy-50 rounded-xl p-8 hover:shadow-lg transition-all">
                <Book className="h-8 w-8 text-navy-600 mb-4" />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Product Leadership Guide
                </h3>
                <p className="text-navy-600 mb-4">
                  Essential frameworks and strategies
                </p>
                <span className="inline-flex items-center text-navy-600 group-hover:text-navy-800 transition-colors">
                  Download Now
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mentorship;