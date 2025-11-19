
import React from 'react';
import { FolderGit2, Calendar } from 'lucide-react';
import { RESUME_DATA } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {RESUME_DATA.projects.map((project, index) => (
            <div key={index} className="bg-slate-900/80 rounded-2xl p-8 border border-slate-800 hover:border-primary-500/30 hover:shadow-2xl hover:shadow-primary-900/10 transition-all duration-300 group">
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-primary-600 transition-colors">
                  <FolderGit2 size={24} className="text-primary-400 group-hover:text-white" />
                </div>
                <div className="flex items-center text-xs text-slate-500 font-mono">
                   <Calendar size={12} className="mr-1" />
                   {project.date}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                {project.title}
              </h3>
              
              <ul className="space-y-3 mb-6">
                 {project.description.map((desc, i) => (
                    <li key={i} className="text-slate-400 text-sm leading-relaxed flex items-start">
                       <span className="text-primary-500/50 mr-2 mt-1">›</span>
                       <span>{desc}</span>
                    </li>
                 ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
