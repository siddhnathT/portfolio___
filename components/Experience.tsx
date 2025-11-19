import React from 'react';
import { Briefcase, MapPin } from 'lucide-react';
import { RESUME_DATA } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative space-y-12">
           {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 -translate-x-1/2 md:translate-x-0"></div>

          {RESUME_DATA.experience.map((exp, index) => (
            <div key={index} className={`relative flex flex-col md:flex-row items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-slate-950 -translate-x-1/2 mt-1.5 z-10 shadow-[0_0_15px_rgba(14,165,233,0.5)]"></div>

              {/* Content Box */}
              <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                 <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all shadow-lg hover:shadow-xl group">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 gap-2">
                       <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">{exp.role}</h3>
                       <span className="text-xs font-mono text-slate-500 bg-slate-950 px-2 py-1 rounded border border-slate-800 whitespace-nowrap">
                          {exp.duration}
                       </span>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                       <div className="flex items-center gap-1">
                          <Briefcase size={14} />
                          <span>{exp.company}</span>
                       </div>
                       <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                       </div>
                    </div>

                    <ul className="space-y-2">
                       {exp.points.map((point, i) => (
                          <li key={i} className="text-slate-300 text-sm flex items-start">
                             <span className="text-primary-500 mr-2 mt-1.5">•</span>
                             <span className="leading-relaxed">{point}</span>
                          </li>
                       ))}
                    </ul>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;