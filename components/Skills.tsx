import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from 'recharts';
import { RESUME_DATA } from '../constants';

const Skills: React.FC = () => {
  const data = RESUME_DATA.skills.map(skill => ({
    name: skill.category,
    level: skill.level,
    detail: skill.skills
  }));

  return (
    <section id="skills" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Proficiency</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400">A quantitative overview of my technical expertise.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Chart */}
          <div className="h-[400px] w-full bg-slate-950/50 p-6 rounded-2xl border border-slate-800 shadow-inner">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" horizontal={false} />
                <XAxis type="number" domain={[0, 100]} hide />
                <YAxis 
                  dataKey="name" 
                  type="category" 
                  width={100} 
                  tick={{ fill: '#94a3b8', fontSize: 12 }} 
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', color: '#f1f5f9' }}
                  itemStyle={{ color: '#38bdf8' }}
                  cursor={{fill: 'transparent'}}
                />
                <Bar dataKey="level" radius={[0, 4, 4, 0]} barSize={20}>
                  {data.map((_entry, index) => (
                    <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#0ea5e9' : '#6366f1'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Detailed List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
             {RESUME_DATA.skills.map((skill, idx) => (
                <div key={idx} className="bg-slate-800/50 p-5 rounded-xl border border-slate-700 hover:border-primary-500/50 transition-colors">
                   <h3 className="text-primary-400 font-semibold mb-2">{skill.category}</h3>
                   <p className="text-slate-300 text-sm leading-relaxed">{skill.skills}</p>
                </div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
