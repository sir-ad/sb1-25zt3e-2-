import React from 'react';
import { motion } from 'framer-motion';
import { Users, Star, Award, Mic, BookOpen, Target } from 'lucide-react';

interface GalleryImage {
  url: string;
  title: string;
  description: string;
  category: 'mentorship' | 'speaking' | 'awards' | 'product';
}

const ImpactGallery = () => {
  const galleryImages: GalleryImage[] = [
    {
      url: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?auto=format&fit=crop&w=800&q=80",
      title: "Product Leadership Workshop at ISB",
      description: "Leading a session on AI-driven innovation",
      category: "speaking"
    },
    {
      url: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=800&q=80",
      title: "Mentorship Session at Upraised",
      description: "Guiding aspiring product leaders",
      category: "mentorship"
    },
    {
      url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
      title: "Product King Award - Paytail",
      description: "Recognition for exceptional product leadership",
      category: "awards"
    },
    {
      url: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
      title: "ONE AI Launch Event",
      description: "Introducing AI-powered HR innovation",
      category: "product"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Impact', icon: Star },
    { id: 'mentorship', label: 'Mentorship', icon: Users },
    { id: 'speaking', label: 'Speaking', icon: Mic },
    { id: 'awards', label: 'Awards', icon: Award },
    { id: 'product', label: 'Product Launches', icon: Target }
  ];

  const [activeCategory, setActiveCategory] = React.useState('all');

  const filteredImages = galleryImages.filter(
    img => activeCategory === 'all' || img.category === activeCategory
  );

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
            Impact Gallery
          </h2>
          <p className="text-xl text-navy-600">
            Moments of transformation and leadership
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12 space-x-4 overflow-x-auto pb-4 hide-scrollbar">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.id}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full whitespace-nowrap transition-all ${
                  activeCategory === category.id
                    ? 'bg-navy-900 text-white'
                    : 'bg-white text-navy-600 hover:bg-navy-50'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{category.label}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-lg transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
                <h3 className="text-lg font-bold mb-2">{image.title}</h3>
                <p className="text-white/80">{image.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="https://www.linkedin.com/in/adarshagrahari"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-navy-900 text-white rounded-lg text-lg font-medium hover:bg-navy-800 transition-colors group"
          >
            View More on LinkedIn
            <BookOpen className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactGallery;