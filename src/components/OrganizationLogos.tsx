import React from 'react';
import { motion } from 'framer-motion';
import { organizations } from '../data/organizations';

const OrganizationLogos = () => {
  return (
    <div className="w-full py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <p className="text-center text-white/80 mb-8 text-sm uppercase tracking-wider font-medium">
          Trusted by Product Leaders at
        </p>
        <div className="flex justify-center items-center flex-wrap gap-8">
          {organizations.map((org) => (
            <motion.a
              key={org.name}
              href={org.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -2 }}
              className="group relative h-12"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 h-full flex items-center justify-center hover:bg-white/20 transition-all">
                <img
                  src={org.logo}
                  alt={org.name}
                  className="h-6 w-auto object-contain filter brightness-0 invert"
                />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white rounded px-2 py-1 text-xs text-navy-900 whitespace-nowrap">
                    {org.domain}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default OrganizationLogos;