import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Product Director, HROne",
    content: "Adarsh's leadership has transformed our product development process. His strategic vision and ability to execute have been instrumental in our success.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Senior PM, Product Team",
    content: "Working with Adarsh has been an incredible learning experience. His mentorship and guidance have helped me grow exponentially in my product career.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80"
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Product Mentee",
    content: "Adarsh's mentorship was transformative. His structured approach and real-world insights helped me land my dream product role.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80"
  }
];

// Rest of the TestimonialSlider component code remains unchanged