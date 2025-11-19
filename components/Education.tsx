
import React from 'react';
import { GraduationCap, MapPin } from 'lucide-react';
import { RESUME_DATA } from '../constants';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Education</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {RESUME_DATA.education.map((edu, index) => (
            <div key={index} className="bg-slate-900 p-6 rounded-xl border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-slate-700 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-800/50 rounded-lg text-primary-500">
                  <GraduationCap size={28} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                  <p className="text-slate-400">{edu.institution}</p>
                  <div className="flex items-center gap-2 text-sm text-slate-500 mt-1">
                    <MapPin size={14} />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>
              <div className="text-right sm:text-right pl-14 sm:pl-0">
                <span className="inline-block px-3 py-1 bg-slate-800 text-primary-400 text-xs font-mono rounded-full border border-slate-700">
                  {edu.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
