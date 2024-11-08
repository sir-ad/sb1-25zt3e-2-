import React from 'react';
import { motion } from 'framer-motion';
import { Book, ArrowRight, Star, Users, DollarSign } from 'lucide-react';

const Books = () => {
  const books = [
    {
      title: "Halcyon: Your Finance Guide",
      cover: "https://simg.pothi.com/Rse-oEQyAdCx7wLUjsIbfQpb8o8nmwj_xUfzAaFkInw/rs:fit/w:371/h:477/el:1/g:sm/cb:rev-6/bG9jYWw6Ly8vaW1h/Z2VzL3Byb2R1Y3Rz/LzIwMjIvMDcvU0tV/MTQyNjkvSW1hZ2Vf/MC5qcGc.jpg",
      year: "2020",
      description: "A comprehensive guide to personal finance and planning, helping readers navigate the complexities of financial decision-making with clarity and confidence.",
      highlights: [
        "Personal finance fundamentals",
        "Investment strategies",
        "Financial planning frameworks",
        "Wealth building techniques"
      ],
      metrics: [
        {
          icon: Users,
          value: "10k+",
          label: "Readers"
        },
        {
          icon: Star,
          value: "4.8/5",
          label: "Rating"
        },
        {
          icon: DollarSign,
          value: "100+",
          label: "Success Stories"
        }
      ],
      link: "https://www.amazon.in/dp/B08L9B3ZY7"
    },
    {
      title: "Retire Today?",
      cover: "https://m.media-amazon.com/images/I/61-77l+CkXL._SL1200_.jpg",
      year: "2020",
      description: "A strategic guide to early retirement planning, offering practical insights and actionable steps for achieving financial independence.",
      highlights: [
        "Early retirement strategies",
        "Passive income building",
        "Investment portfolio design",
        "Risk management"
      ],
      metrics: [
        {
          icon: Users,
          value: "5k+",
          label: "Readers"
        },
        {
          icon: Star,
          value: "4.7/5",
          label: "Rating"
        },
        {
          icon: DollarSign,
          value: "50+",
          label: "Success Stories"
        }
      ],
      link: "https://www.amazon.in/dp/B08L9CQKZN"
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
            Published Books
          </h2>
          <p className="text-xl text-navy-600">
            Practical guides for financial independence and wealth building
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {books.map((book, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
            >
              <div className="grid md:grid-cols-2 h-full">
                {/* Book Cover */}
                <div className="relative aspect-[3/4] bg-navy-100">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col">
                  <div className="mb-auto">
                    <div className="text-sm text-navy-500 mb-2">{book.year}</div>
                    <h3 className="text-2xl font-bold text-navy-900 mb-4">
                      {book.title}
                    </h3>
                    <p className="text-navy-600 mb-6">
                      {book.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {book.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center text-navy-600">
                          <Star className="h-4 w-4 text-navy-400 mr-2" />
                          <span className="text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {book.metrics.map((metric, idx) => {
                      const Icon = metric.icon;
                      return (
                        <div key={idx} className="text-center">
                          <Icon className="h-5 w-5 text-navy-600 mx-auto mb-1" />
                          <div className="font-bold text-navy-900">{metric.value}</div>
                          <div className="text-xs text-navy-600">{metric.label}</div>
                        </div>
                      );
                    })}
                  </div>

                  {/* CTA */}
                  <a
                    href={book.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-navy-900 text-white rounded-lg hover:bg-navy-800 transition-colors group"
                  >
                    Read on Amazon
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Books;