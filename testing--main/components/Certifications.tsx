import React from 'react';
import Section from './Section';
import { CERTIFICATIONS } from '../constants';
import { Award, ExternalLink, BadgeCheck } from 'lucide-react';

const Certifications: React.FC = () => {
  return (
    <Section id="certifications" title="Certifications & Badges">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {CERTIFICATIONS.map((cert, index) => (
          <div 
            key={index} 
            className={`relative group flex gap-4 items-start p-6 rounded-2xl border transition-all duration-300 ${
              cert.link 
              ? 'bg-slate-900/40 border-cyan-500/30 hover:border-cyan-400/60 hover:shadow-[0_0_15px_rgba(34,211,238,0.1)] cursor-pointer' 
              : 'bg-slate-900/30 border-slate-800 hover:bg-slate-800/50 hover:border-violet-500/30'
            }`}
            onClick={() => cert.link && window.open(cert.link, '_blank')}
          >
            <div className={`p-3 rounded-full shrink-0 ${
                cert.link ? 'bg-cyan-500/10 text-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.2)]' : 'bg-violet-500/10 text-violet-400'
            }`}>
              {cert.link ? <BadgeCheck size={24} /> : <Award size={24} />}
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-1">
                  <h3 className={`font-bold text-lg leading-tight pr-4 ${cert.link ? 'text-cyan-100 group-hover:text-cyan-300 transition-colors' : 'text-slate-200'}`}>
                      {cert.title}
                  </h3>
                  {cert.link && (
                      <ExternalLink size={16} className="text-slate-500 group-hover:text-cyan-400 transition-colors" />
                  )}
              </div>
              <p className="text-xs font-mono text-slate-500 mb-2">{cert.period}</p>
              <p className="text-sm text-slate-400 leading-relaxed">
                {cert.description}
              </p>
              
              {cert.link && (
                  <div className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-cyan-400 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-500/20 group-hover:bg-cyan-500/10 transition-colors">
                      <span>View Verified Profile</span>
                      <ExternalLink size={10} />
                  </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Certifications;