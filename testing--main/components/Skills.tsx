import React, { useState } from 'react';
import Section from './Section';
import { SKILLS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Cpu, Globe, Database, Shield, Server } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  "Programming Languages": <Code size={18} />,
  "Artificial Intelligence": <Cpu size={18} />,
  "Web & Cloud": <Globe size={18} />,
  "Data Analytics": <Database size={18} />,
  "Security Tools": <Shield size={18} />,
  "Hardware / IoT": <Server size={18} />,
};

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(SKILLS[0].category);

  return (
    <Section id="skills" title="Technical Arsenal">
      <div className="mb-12 flex justify-center">
        <div className="w-full max-w-lg bg-slate-900/50 p-6 rounded-2xl border border-slate-700/50 backdrop-blur-sm">
          <h3 className="text-center text-slate-400 text-sm mb-4 font-mono uppercase tracking-widest">T-Shaped Expertise</h3>
          <svg viewBox="0 0 400 80" role="img" aria-label="T-shaped skill depth" className="w-full h-auto drop-shadow-lg">
            <defs>
              <linearGradient id="gradDepth" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
              <linearGradient id="gradBreadth" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            {/* horizontal bar = breadth */}
            <line x1="20" y1="40" x2="380" y2="40" stroke="url(#gradBreadth)" strokeWidth="4" strokeLinecap="round" />
            {/* vertical bar = depth */}
            <line x1="200" y1="40" x2="200" y2="10" stroke="url(#gradDepth)" strokeWidth="8" strokeLinecap="round" />
            {/* labels */}
            <text x="200" y="8" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold" className="font-mono">AI / Medical IoT</text>
            <text x="30" y="60" fill="#94a3b8" fontSize="10" className="font-mono">Cloud & DevOps</text>
            <text x="370" y="60" textAnchor="end" fill="#94a3b8" fontSize="10" className="font-mono">Blockchain</text>

            {/* Interactive hover points (simulated) */}
            <circle cx="200" cy="40" r="6" fill="#fff" className="animate-pulse" />
          </svg>
          <p className="text-center text-xs text-slate-500 mt-2 font-mono">Deep expertise in AI/IoT, broad knowledge across Cloud & Web</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Category Tabs */}
        <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-4 md:pb-0 md:w-64 shrink-0">
          {SKILLS.map((skillGroup) => (
            <button
              key={skillGroup.category}
              onClick={() => setActiveCategory(skillGroup.category)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-300 whitespace-nowrap ${activeCategory === skillGroup.category
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20'
                  : 'bg-slate-800/50 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                }`}
            >
              {iconMap[skillGroup.category] || <Code size={18} />}
              <span className="font-medium">{skillGroup.category}</span>
            </button>
          ))}
        </div>

        {/* Skills Visualization Grid */}
        <div className="flex-1 min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {SKILLS.find(s => s.category === activeCategory)?.items.map((item, idx) => (
                <div
                  key={item}
                  className="group relative overflow-hidden bg-slate-800/40 border border-slate-700/50 p-4 rounded-xl hover:bg-slate-800 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  <div className="flex items-center justify-between relative z-10">
                    <span className="font-medium text-slate-200 group-hover:text-white transition-colors">
                      {item}
                    </span>
                    <div className="w-2 h-2 rounded-full bg-slate-600 group-hover:bg-blue-400 transition-colors shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
                  </div>

                  {/* Decorative progress bar simulation */}
                  <div className="mt-3 h-1 w-full bg-slate-700/50 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.floor(Math.random() * 30) + 70}%` }}
                      transition={{ duration: 1, delay: 0.1 * idx }}
                      className="h-full bg-gradient-to-r from-blue-500 to-violet-500"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
};

export default Skills;