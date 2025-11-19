import React from 'react';
import { Download, MapPin, Mail } from 'lucide-react';
import { RESUME_DATA } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-primary-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-72 h-72 bg-purple-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary-400 uppercase bg-primary-900/30 rounded-full border border-primary-700/50">
              Available for Opportunities
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Hi, I'm <span className="text-primary-500">{RESUME_DATA.name.split(' ')[0]}</span>
            </h1>
            <h2 className="text-xl sm:text-2xl text-slate-300 mb-6 font-light">
              {RESUME_DATA.title}
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {RESUME_DATA.objective}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary-500" />
                <span>{RESUME_DATA.contact.location}</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-slate-600 rounded-full"></div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-primary-500" />
                <a href={`mailto:${RESUME_DATA.contact.email}`} className="hover:text-primary-400 transition-colors">{RESUME_DATA.contact.email}</a>
              </div>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(RESUME_DATA.contact.email)}`}
                target="_blank"
                rel="noreferrer noopener"
                className="px-8 py-3 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-lg transition-all shadow-lg shadow-primary-900/20"
              >
                Contact Me
              </a>
              <a
                href="/resume.pdf"
                download
                target="_blank"
                rel="noreferrer"
                className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-lg border border-slate-700 transition-all flex items-center gap-2"
              >
                <Download size={18} />
                Download CV
              </a>
            </div>
          </div>

          {/* Image / Visual */}
          <div className="flex-1 relative flex justify-center">
             <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border-4 border-slate-800 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                {/* Placeholder image as per instructions */}
                <img 
                  src="https://picsum.photos/400/400?grayscale" 
                  alt={RESUME_DATA.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
             </div>
             
             {/* Floating Badge */}
             <div className="absolute -bottom-6 -right-6 sm:right-10 bg-slate-900 p-4 rounded-xl border border-slate-700 shadow-xl">
                <div className="flex items-center gap-3">
                   <div className="bg-green-500/20 p-2 rounded-full">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                   </div>
                   <div>
                      <p className="text-xs text-slate-400">Current Status</p>
                      <p className="text-sm font-bold text-white">M.Sc. Student</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
