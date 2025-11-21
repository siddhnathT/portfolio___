import React from 'react';
import Section from './Section';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p>{PERSONAL_INFO.about}</p>
          <p>
            Currently pursuing my Masters in Medical Systems Engineering in Germany,
            I combine a strong foundation in Electronics and Communication with advanced software engineering skills.
          </p>
          <p>
            My focus areas include Computer Vision, Blockchain, and Cybersecurity, aiming to build secure, intelligent systems.
          </p>
        </div>
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-violet-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
          <div className="relative bg-card p-8 rounded-2xl border border-slate-700">
            <h3 className="text-xl font-semibold text-white mb-4">Quick Highlights</h3>
            <ul className="space-y-3">
              {[
                "Master's Student in Medical Systems",
                "Expertise in AI & Computer Vision",
                "Blockchain & Smart Contract Development",
                "Cybersecurity & Penetration Testing",
                "Full Stack Web Development"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center text-slate-400">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>



    </Section>
  );
};

export default About;
