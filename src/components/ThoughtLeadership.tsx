import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Target, Users, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ThoughtLeadership: React.FC = () => {
  const insights = [
    {
      icon: Brain,
      title: "Building ONE AI",
      description: "Transforming HR tech through AI innovation",
      link: "/blog/building-one-ai"
    },
    {
      icon: Target,
      title: "UPSC to Product",
      description: "My journey from civil services to product leadership",
      link: "/blog/upsc-to-product-leadership"
    },
    {
      icon: Users,
      title: "Product Mentorship",
      description: "Impact through structured guidance",
      link: "/blog/art-of-product-mentorship"
    },
    {
      icon: TrendingUp,
      title: "Growth Case Studies",
      description: "Real-world product success stories",
      link: "/blog/case-studies"
    }
  ];

  return (
    <section className="py-20 bg-navy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-navy-900 mb-4">
            Thought Leadership
          </h2>
          <p className="text-xl text-navy-600">
            Insights from years of product innovation and leadership
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {insights.map((insight, index) => {
            const Icon = insight.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Link to={insight.link} className="block">
                  <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all h-full">
                    <div className="mb-6 p-3 bg-navy-50 rounded-lg w-fit group-hover:bg-navy-100 transition-colors">
                      <Icon className="h-6 w-6 text-navy-600" />
                    </div>
                    <h3 className="text-xl font-bold text-navy-900 mb-2 group-hover:text-navy-600 transition-colors">
                      {insight.title}
                    </h3>
                    <p className="text-navy-600 mb-4">
                      {insight.description}
                    </p>
                    <div className="flex items-center text-navy-600 group-hover:text-navy-800 transition-colors">
                      <span className="mr-2">Read More</span>
                      <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ThoughtLeadership;