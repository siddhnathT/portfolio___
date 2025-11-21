import React from 'react';
import Section from './Section';
import { EXPERIENCE } from '../constants';
import { Briefcase, Building2 } from 'lucide-react';

const Experience: React.FC = () => {
    return (
        <Section id="experience" title="Work Experience">
            <div className="space-y-8">
                {EXPERIENCE.map((job, index) => (
                    <div
                        key={index}
                        className="relative pl-8 md:pl-0 group"
                    >
                        {/* Desktop Layout: Timeline style */}
                        <div className="hidden md:flex gap-8 items-start">
                            <div className="w-32 shrink-0 pt-2 text-right">
                                <span className="text-sm font-mono text-slate-500 block">{job.period.split('–')[0]}</span>
                                <div className="h-full w-px bg-gradient-to-b from-blue-500 to-transparent mx-auto my-2 absolute left-32 top-4 opacity-20 group-last:hidden"></div>
                            </div>

                            <div className="relative z-10">
                                <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-blue-400 shadow-lg shadow-blue-900/20 group-hover:scale-110 group-hover:border-blue-500 transition-all duration-300">
                                    <Briefcase size={18} />
                                </div>
                            </div>

                            <div className="flex-1 bg-slate-900/40 backdrop-blur-sm p-6 rounded-2xl border border-slate-800 hover:border-blue-500/30 transition-all duration-300 hover:bg-slate-800/60">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-100">{job.title}</h3>
                                        <div className="flex items-center text-blue-400 font-medium mt-1">
                                            <Building2 size={14} className="mr-2" />
                                            {job.company}
                                        </div>
                                    </div>
                                    <div className="text-xs font-mono text-slate-500 bg-slate-950 px-3 py-1 rounded-full border border-slate-800">
                                        {job.period}
                                    </div>
                                </div>

                                <ul className="space-y-2 mb-4">
                                    {job.description.map((desc, i) => (
                                        <li key={i} className="text-slate-400 text-sm leading-relaxed flex items-start">
                                            <span className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-2 mr-3 shrink-0 group-hover:bg-blue-500 transition-colors"></span>
                                            {desc}
                                        </li>
                                    ))}
                                </ul>

                                {job.skills && (
                                    <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/50">
                                        {job.skills.map(skill => (
                                            <span key={skill} className="px-2.5 py-1 text-xs rounded-md bg-blue-500/5 text-blue-300 border border-blue-500/20">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Mobile Layout */}
                        <div className="md:hidden border-l-2 border-slate-800 pl-6 pb-12 last:pb-0">
                            <div className="absolute left-[-5px] top-0 w-3 h-3 rounded-full bg-blue-500 ring-4 ring-slate-900"></div>
                            <div className="bg-card p-5 rounded-xl border border-slate-800 shadow-sm">
                                <div className="mb-3">
                                    <span className="text-xs font-mono text-blue-400 mb-1 block">{job.period}</span>
                                    <h3 className="font-bold text-lg text-slate-100">{job.title}</h3>
                                    <h4 className="text-slate-400 text-sm">{job.company}</h4>
                                </div>
                                <ul className="space-y-2 text-sm text-slate-400">
                                    {job.description.slice(0, 3).map((desc, i) => (
                                        <li key={i} className="flex items-start">
                                            <span className="mr-2 mt-1.5 w-1 h-1 bg-slate-500 rounded-full"></span>
                                            {desc}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Experience;