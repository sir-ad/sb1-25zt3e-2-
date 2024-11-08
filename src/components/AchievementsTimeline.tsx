import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Star, Trophy, Medal } from 'lucide-react';

const AchievementsTimeline = () => {
  const achievements = [
    {
      year: "2023",
      title: "Product King Award",
      organization: "Paytail",
      description: "Recognized for exceptional product leadership and innovation in fintech solutions",
      impact: [
        "Led product innovation increasing market share by 30%",
        "Developed AI-driven fraud detection system",
        "Improved user experience leading to 40% growth"
      ],
      icon: Trophy
    },
    {
      year: "2022",
      title: "1st Rank - GrowthX Demo Day",
      organization: "GrowthX",
      description: "Created growth strategy for Zomato, increasing revenue from ₹6000Cr to ₹8300Cr",
      impact: [
        "Developed comprehensive growth strategy",
        "Increased revenue by ₹2300Cr",
        "Enhanced user acquisition and retention"
      ],
      icon: Star
    },
    {
      year: "2021",
      title: "Mahindra Kaizen Award",
      organization: "Mahindra Group",
      description: "Awarded for developing TEQO NOC, saving ₹3.14Cr in investment costs",
      impact: [
        "Automated billing and monitoring systems",
        "Reduced operational costs by 15%",
        "Increased operational efficiency by 30%"
      ],
      icon: Medal
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-navy-900 mb-4">
            Awards & Recognition
          </h2>
          <p className="text-xl text-navy-600">
            Milestones that mark the journey of innovation
          </p>
        </motion.div>

        <div className="space-y-12">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-8 border-l-2 border-navy-200 hover:border-navy-600 transition-colors"
              >
                <div className="absolute left-[-25px] top-0 bg-white p-2 rounded-full border-2 border-navy-200">
                  <Icon className="h-6 w-6 text-navy-600" />
                </div>

                <div className="bg-navy-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-navy-900">
                      {achievement.title}
                    </h3>
                    <span className="text-navy-600 font-medium">
                      {achievement.year}
                    </span>
                  </div>

                  <p className="text-navy-600 mb-2">
                    {achievement.organization}
                  </p>

                  <p className="text-navy-700 mb-6">
                    {achievement.description}
                  </p>

                  <div className="space-y-2">
                    {achievement.impact.map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <Star className="h-5 w-5 text-navy-400 flex-shrink-0 mt-1" />
                        <span className="text-navy-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AchievementsTimeline;