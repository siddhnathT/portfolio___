import React from 'react';
import Section from './Section';
import { PROJECTS } from '../constants';
import { ExternalLink, ArrowRight, Layers, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const ArchitectureFlow: React.FC<{ flow: string }> = ({ flow }) => {
  const steps = flow.split(' -> ');
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 text-[10px] font-mono text-slate-400">
      {steps.map((step, i) => (
        <React.Fragment key={i}>
          <div className="bg-slate-800/80 border border-slate-700 px-2 py-1 rounded shadow-sm whitespace-nowrap hover:border-blue-500/50 hover:text-blue-300 transition-colors cursor-default">
            {step}
          </div>
          {i < steps.length - 1 && (
            <ArrowRight size={12} className="text-slate-600" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Impact & Architecture" className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-500"
          >
            {/* Layer 0: KPI (Impact) */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-violet-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

            <div className="p-6 border-b border-white/5 bg-gradient-to-b from-white/5 to-transparent">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-display font-bold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                {project.kpi && (
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold shadow-[0_0_10px_rgba(34,197,94,0.1)]">
                    <Zap size={12} />
                    {project.kpi}
                  </div>
                )}
              </div>
              <p className="text-slate-400 text-sm line-clamp-2">{project.description[0]}</p>
            </div>

            {/* Layer 1: Architecture Sketch */}
            <div className="p-6 bg-slate-950/30 min-h-[120px] flex flex-col justify-center relative overflow-hidden group-hover:bg-slate-950/50 transition-colors">
              <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none"></div>
              <div className="text-xs text-slate-500 font-mono mb-3 uppercase tracking-wider flex items-center gap-2">
                <Layers size={12} /> Architecture Flow
              </div>
              {project.architectureImage ? (
                <ArchitectureFlow flow={project.architectureImage} />
              ) : (
                <div className="flex items-center justify-center text-slate-600 text-xs italic">
                  Architecture details confidential
                </div>
              )}
            </div>

            {/* Layer 2: 1-Click Proof & Tech */}
            <div className="p-4 bg-slate-900/60 border-t border-white/5 flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {project.techStack?.slice(0, 3).map(tech => (
                  <span key={tech} className="text-[10px] px-2 py-1 rounded bg-slate-800 text-slate-400 border border-slate-700">
                    {tech}
                  </span>
                ))}
              </div>

              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-white transition-colors"
                >
                  View Proof <ExternalLink size={12} />
                </a>
              ) : (
                <span className="text-xs text-slate-600 cursor-not-allowed flex items-center gap-2">
                  Internal Project <ExternalLink size={12} />
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;