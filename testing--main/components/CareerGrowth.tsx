import React, { useState } from 'react';
import Section from './Section';
import { motion, AnimatePresence } from 'framer-motion';

const data = [
  { year: 2022, roles: 2, projects: 1, label: 'Foundation' },
  { year: 2023, roles: 1, projects: 1, label: 'Specialization' },
  { year: 2024, roles: 1, projects: 2, label: 'Scaling' },
  { year: 2025, roles: 1, projects: 1, label: 'Innovation' },
];

const CareerGrowth: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Chart dimensions
  const height = 300;
  const padding = 40;
  const widthPercent = 100; // Logic handles responsive width via viewBox

  // Y-Axis Scaling (Max value is 2, giving buffer up to 3)
  const maxY = 3;
  const normalizeY = (val: number) => height - padding - (val / maxY) * (height - 2 * padding);
  const normalizeX = (index: number) => (index / (data.length - 1)) * 100; // Percentage based X

  // Generate Path Strings
  const generatePath = (key: 'roles' | 'projects') => {
    return data.map((point, index) => {
        const x = normalizeX(index);
        const y = normalizeY(point[key]);
        return `${index === 0 ? 'M' : 'L'} ${x * 8 + 10} ${y}`; // Scaling X to fit generic 800px width roughly
    }).join(' ');
  };

  // Smooth Curve Generator (Simple Catmull-Rom or Bezier approximation could be used, but straight lines with dots work well for this dataset size)
  // For "Movie Visual", let's stick to straight lines with glowing nodes for clarity, or simple cubic bezier.
  
  const createPath = (key: 'roles' | 'projects') => {
     let d = '';
     data.forEach((point, i) => {
         const x = (i / (data.length - 1)) * 800 + 50; // 50px padding left/right
         const y = normalizeY(point[key]);
         if (i === 0) d += `M ${x} ${y}`;
         else d += ` L ${x} ${y}`;
     });
     return d;
  };

  const rolesPath = createPath('roles');
  const projectsPath = createPath('projects');

  return (
    <Section id="career-growth" title="Career Trajectory" className="overflow-hidden">
      <div className="relative w-full bg-slate-900/50 rounded-2xl border border-slate-800/50 p-6 md:p-10 shadow-2xl backdrop-blur-sm">
        {/* Header Legend */}
        <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
            <h3 className="text-slate-400 text-sm font-mono uppercase tracking-wider">Growth Analytics</h3>
            <div className="flex gap-6">
                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></span>
                    <span className="text-xs text-slate-300">Roles / Year</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.8)]"></span>
                    <span className="text-xs text-slate-300">Major Projects</span>
                </div>
            </div>
        </div>

        {/* SVG Chart */}
        <div className="relative w-full aspect-[2/1] md:aspect-[3/1]">
            <svg viewBox="0 0 900 300" className="w-full h-full overflow-visible">
                <defs>
                    <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                    <linearGradient id="violetGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#d946ef" />
                    </linearGradient>
                    <filter id="glow-blue">
                        <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                        <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                    <filter id="glow-violet">
                        <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                        <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                </defs>

                {/* Grid Lines */}
                {[0, 1, 2, 3].map((tick) => {
                    const y = normalizeY(tick);
                    return (
                        <g key={tick}>
                            <line x1="50" y1={y} x2="850" y2={y} stroke="#1e293b" strokeWidth="1" strokeDasharray="5,5" />
                            <text x="30" y={y + 4} fill="#64748b" fontSize="12" fontFamily="monospace" textAnchor="end">{tick}</text>
                        </g>
                    );
                })}

                {/* Roles Line (Blue) */}
                <motion.path
                    d={rolesPath}
                    fill="none"
                    stroke="url(#blueGradient)"
                    strokeWidth="4"
                    filter="url(#glow-blue)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                />

                {/* Projects Line (Violet) */}
                <motion.path
                    d={projectsPath}
                    fill="none"
                    stroke="url(#violetGradient)"
                    strokeWidth="4"
                    filter="url(#glow-violet)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                />

                {/* Data Points & Interactivity */}
                {data.map((point, i) => {
                    const x = (i / (data.length - 1)) * 800 + 50;
                    const yRoles = normalizeY(point.roles);
                    const yProjects = normalizeY(point.projects);

                    return (
                        <g key={i} onMouseEnter={() => setHoveredIndex(i)} onMouseLeave={() => setHoveredIndex(null)}>
                            {/* X Axis Labels */}
                            <text x={x} y={height - 10} fill="#94a3b8" fontSize="14" fontFamily="monospace" textAnchor="middle">{point.year}</text>
                            
                            {/* Hover Interaction Line */}
                            <motion.line 
                                x1={x} y1={20} x2={x} y2={height - 40} 
                                stroke="#334155" 
                                strokeWidth="1" 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: hoveredIndex === i ? 1 : 0 }}
                            />

                            {/* Roles Dot */}
                            <motion.circle
                                cx={x} cy={yRoles} r="6"
                                fill="#0f172a" stroke="#3b82f6" strokeWidth="3"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ delay: 1.5 + i * 0.1 }}
                            />

                            {/* Projects Dot */}
                            <motion.circle
                                cx={x} cy={yProjects} r="6"
                                fill="#0f172a" stroke="#8b5cf6" strokeWidth="3"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ delay: 2 + i * 0.1 }}
                            />

                            {/* Tooltip Box */}
                            <AnimatePresence>
                                {hoveredIndex === i && (
                                    <motion.g
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                    >
                                        <rect x={x - 60} y={20} width="120" height="65" rx="8" fill="#1e293b" stroke="#334155" opacity="0.95" />
                                        <text x={x} y={40} fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">{point.label}</text>
                                        <text x={x} y={58} fill="#60a5fa" fontSize="11" textAnchor="middle">Roles: {point.roles}</text>
                                        <text x={x} y={74} fill="#c084fc" fontSize="11" textAnchor="middle">Projects: {point.projects}</text>
                                    </motion.g>
                                )}
                            </AnimatePresence>
                        </g>
                    );
                })}
            </svg>
        </div>
        
        <div className="mt-4 text-center">
            <p className="text-slate-500 text-sm italic">
                "Consistency in execution, scaling from foundation to innovation."
            </p>
        </div>
      </div>
    </Section>
  );
};

export default CareerGrowth;