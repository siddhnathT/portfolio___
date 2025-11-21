import React from 'react';
import Section from './Section';
import { EDUCATION } from '../constants';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <Section id="education" title="Education">
      <div className="space-y-6">
        {EDUCATION.map((edu, index) => (
          <div key={index} className="flex gap-6 items-start bg-card p-6 rounded-xl border border-slate-800">
            <div className="p-4 bg-violet-500/10 rounded-full text-violet-400 shrink-0 hidden md:flex items-center justify-center">
              <GraduationCap size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-100">{edu.degree}</h3>
              <p className="text-lg text-blue-400 mt-1">{edu.institution}</p>
              <p className="text-sm text-slate-500 mt-2 font-mono bg-slate-900 inline-block px-2 py-1 rounded">
                {edu.period}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;
