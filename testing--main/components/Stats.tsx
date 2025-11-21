import React, { useEffect, useState, useRef } from 'react';
import { useInView, motion } from 'framer-motion';

const StatItem: React.FC<{ label: string; value: number; suffix?: string; delay: number }> = ({ label, value, suffix = "", delay }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: delay }}
      className="glass-card relative overflow-hidden p-8 rounded-2xl text-center group transition-all duration-500"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative z-10">
        <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 mb-2 font-display tracking-tight">
          {count}{suffix}
        </div>
        <div className="text-sm text-blue-400 uppercase tracking-widest font-semibold">{label}</div>
      </div>
    </motion.div>
  );
};

const Stats: React.FC = () => {
  return (
    <section className="py-12 relative z-20 -mt-16 px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <StatItem label="Years Experience" value={1} suffix="+" delay={0} />
        <StatItem label="Projects Completed" value={8} suffix="+" delay={0.1} />
        <StatItem label="Tech Skills" value={10} suffix="+" delay={0.2} />
        <StatItem label="Certifications" value={8} suffix="+" delay={0.3} />
      </div>
    </section>
  );
};

export default Stats;