import React from 'react';
import { motion } from 'framer-motion';
import { Medal, GraduationCap, Briefcase, Brain, Target, Star, ArrowRight } from 'lucide-react';

const TimelineJourney = () => {
  const journeyStages = [
    {
      id: "foundation",
      phase: "The Foundation",
      title: "UPSC AIR 151",
      year: "2019",
      description: "A testament to analytical prowess and strategic thinking, ranking among India's top civil service aspirants.",
      impact: {
        metric: "Top 0.01%",
        context: "Among 1M+ aspirants"
      },
      highlights: [
        "Mastered complex problem-solving",
        "Developed structured thinking",
        "Built strategic analysis skills"
      ],
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
      color: "from-purple-500 to-indigo-600"
    },
    {
      id: "transformation",
      phase: "The Transformation",
      title: "Product Leadership",
      year: "2020-2021",
      description: "Transitioned from civil services to tech, leading digital transformation at Mahindra TEQO.",
      impact: {
        metric: "₹3.14Cr",
        context: "Cost savings through innovation"
      },
      highlights: [
        "Led end-to-end product development",
        "Automated critical operations",
        "Scaled team from 4 to 15"
      ],
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      color: "from-emerald-500 to-teal-600"
    },
    {
      id: "scale",
      phase: "The Scale",
      title: "Scaling FinTech",
      year: "2022-2023",
      description: "Revolutionized retail finance through innovative EMI solutions at Paytail.",
      impact: {
        metric: "$5M+",
        context: "Revenue impact"
      },
      highlights: [
        "Built fraud detection system",
        "40% increase in conversion",
        "Expanded to 100+ merchants"
      ],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
      color: "from-amber-500 to-orange-600"
    },
    {
      id: "innovation",
      phase: "The Innovation",
      title: "AI Transformation",
      year: "2023-Present",
      description: "Leading AI-driven innovation in HR tech at HROne, impacting thousands of organizations.",
      impact: {
        metric: "40%",
        context: "Efficiency gains"
      },
      highlights: [
        "Launched ONE AI assistant",
        "Mentored 130+ leaders",
        "Published 2 books"
      ],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
      color: "from-blue-500 to-cyan-600"
    }
  ];

  return (
    <section className="py-20 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-navy-900 mb-4">
            The Journey
          </h2>
          <p className="text-xl text-navy-600">
            From civil services to tech innovation, every step has shaped my approach to product leadership
          </p>
        </motion.div>

        <div className="space-y-32">
          {journeyStages.map((stage, index) => (
            <motion.div
              key={stage.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className={`grid md:grid-cols-2 gap-16 items-center ${
                index % 2 === 0 ? '' : 'md:grid-flow-dense'
              }`}>
                {/* Content Side */}
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className={`inline-flex items-center space-x-3 text-white p-3 rounded-xl bg-gradient-to-r ${stage.color}`}>
                      <span className="text-lg font-medium">{stage.phase}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <h3 className="text-3xl font-bold text-navy-900">
                        {stage.title}
                      </h3>
                      <span className="text-navy-600 font-medium">
                        {stage.year}
                      </span>
                    </div>

                    <p className="text-lg text-navy-600 leading-relaxed">
                      {stage.description}
                    </p>
                  </div>

                  {/* Impact Metric */}
                  <div className="bg-navy-50 rounded-xl p-6">
                    <div className="text-3xl font-bold text-navy-900 mb-1">
                      {stage.impact.metric}
                    </div>
                    <div className="text-navy-600">
                      {stage.impact.context}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-3">
                    {stage.highlights.map((highlight, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <Star className="h-5 w-5 text-navy-400" />
                        <span className="text-navy-700">{highlight}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Visual Side */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ${
                    index % 2 === 0 ? 'md:order-last' : ''
                  }`}
                >
                  <img
                    src={stage.image}
                    alt={stage.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-tr ${stage.color} opacity-20`} />
                </motion.div>
              </div>

              {/* Connector Line */}
              {index < journeyStages.length - 1 && (
                <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-16 w-px h-16 bg-navy-200" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <a
            href="/experience"
            className="inline-flex items-center px-8 py-4 bg-navy-900 text-white rounded-lg text-lg font-medium hover:bg-navy-800 transition-colors group"
          >
            Explore Detailed Experience
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TimelineJourney;