import React from 'react';
import Section from './Section';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';
import { Mail, MapPin, Phone, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <Section id="contact" title="Get In Touch">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-slate-300 text-lg mb-8">
            I'm currently looking for new opportunities in AI, IoT, and Full-stack development.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-slate-400">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-blue-400">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm text-slate-500">Email</p>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-white hover:text-blue-400 transition-colors">
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 text-slate-400">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-blue-400">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-sm text-slate-500">Phone</p>
                <p className="text-white">{PERSONAL_INFO.phone}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-slate-400">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-blue-400">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-sm text-slate-500">Location</p>
                <p className="text-white">{PERSONAL_INFO.location}</p>
              </div>
            </div>
          </div>

          <div className="mt-10">
             <h4 className="text-white font-semibold mb-4">Connect with me</h4>
             <div className="flex gap-4">
                {SOCIAL_LINKS.map(link => (
                    <a 
                        key={link.name} 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-lg text-slate-300 hover:bg-blue-600 hover:text-white transition-all"
                    >
                        {link.name} <ExternalLink size={14} />
                    </a>
                ))}
             </div>
          </div>
        </div>

        <div className="bg-card p-8 rounded-2xl border border-slate-800">
            <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>
            <form className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1">Name</label>
                    <input type="text" id="name" className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" placeholder="Your Name" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1">Email</label>
                    <input type="email" id="email" className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" placeholder="your@email.com" />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-1">Message</label>
                    <textarea id="message" rows={4} className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" placeholder="Hi, I'd like to discuss..."></textarea>
                </div>
                <button type="button" className="w-full bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/20">
                    Send Message
                </button>
            </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
