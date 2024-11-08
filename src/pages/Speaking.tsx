import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, ArrowRight, Video, MapPin, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Speaking: React.FC = () => {
  const pastEvents = [
    {
      title: "Crack Your Product Interview: Netflix's Interview Questions",
      organizer: "Upraised",
      date: "March 15, 2024",
      type: "Workshop",
      attendees: "500+",
      link: "https://www.upraised.co/events/crack-your-product-interview-netflixs-interview-questions-2HxLginfQGbm6CMZQXsVS3",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Product Management Masterclass",
      organizer: "ISB Executive Education",
      date: "February 20, 2024",
      type: "Workshop",
      attendees: "200+",
      link: "https://www.isb.edu/executive-education",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "AI in Product Development",
      organizer: "Upraised",
      date: "January 10, 2024",
      type: "Webinar",
      attendees: "1000+",
      link: "https://www.upraised.co",
      image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?auto=format&fit=crop&w=1200&q=80"
    }
  ];

  const upcomingEvents = [
    {
      title: "Product Strategy Workshop",
      organizer: "ISB Executive Education",
      date: "April 5, 2024",
      type: "Workshop",
      location: "Bangalore",
      registrationLink: "https://www.isb.edu/executive-education"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-b from-navy-900 to-navy-800 overflow-hidden">
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
            Speaking &
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 text-transparent bg-clip-text">
              Workshops
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-navy-200 max-w-3xl mx-auto leading-relaxed">
            Sharing insights on product leadership, innovation, and transformation
          </p>
        </motion.div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-navy-900 mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-navy-600">
              Join me at these upcoming speaking engagements
            </p>
          </motion.div>

          <div className="grid gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-navy-50 rounded-xl p-8"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  <div>
                    <h3 className="text-2xl font-bold text-navy-900 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-navy-600 mb-4">{event.organizer}</p>
                    <div className="flex flex-wrap gap-4">
                      <span className="flex items-center text-navy-600">
                        <Calendar className="h-5 w-5 mr-2" />
                        {event.date}
                      </span>
                      <span className="flex items-center text-navy-600">
                        <MapPin className="h-5 w-5 mr-2" />
                        {event.location}
                      </span>
                    </div>
                  </div>
                  <a
                    href={event.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-navy-600 text-white rounded-lg hover:bg-navy-700 transition-colors"
                  >
                    Register Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-navy-900 mb-4">
              Past Events
            </h2>
            <p className="text-xl text-navy-600">
              Highlights from previous speaking engagements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-white/90 text-navy-900 text-sm font-medium rounded-full">
                      {event.type}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy-900 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-navy-600 mb-4">{event.organizer}</p>
                  
                  <div className="flex flex-wrap gap-4 mb-6">
                    <span className="flex items-center text-navy-600 text-sm">
                      <Calendar className="h-4 w-4 mr-2" />
                      {event.date}
                    </span>
                    <span className="flex items-center text-navy-600 text-sm">
                      <Users className="h-4 w-4 mr-2" />
                      {event.attendees} Attendees
                    </span>
                  </div>
                  
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-navy-600 hover:text-navy-800 transition-colors"
                  >
                    View Details
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold text-navy-900">
              Interested in Having Me Speak?
            </h2>
            <p className="text-xl text-navy-600">
              I speak about product leadership, innovation, and digital transformation
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-navy-600 text-white rounded-lg text-lg font-medium hover:bg-navy-700 transition-colors group"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Speaking;