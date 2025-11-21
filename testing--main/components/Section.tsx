import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  title?: string;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, children, title, className = "" }) => {
  return (
    <section id={id} className={`py-24 px-6 md:px-12 max-w-7xl mx-auto relative ${className}`}>
      {/* Background Grid Accent for Sections */}
      <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none"></div>
      
      {title && (
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 text-center md:text-left relative z-10"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4 relative inline-block tracking-tight">
            {title}
            <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></span>
          </h2>
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;