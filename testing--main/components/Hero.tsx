import React, { useEffect, useState } from 'react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "AI Engineer",
    "Full-Stack Developer",
    "IoT Specialist",
    "Blockchain Developer"
  ];

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentRole = roles[currentRoleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setDisplayText(
          currentRole.substring(0, displayText.length + (isDeleting ? -1 : 1))
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, roles]);

  const getIcon = (name: string) => {
    switch (name) {
      case 'GitHub': return <Github size={20} />;
      case 'LinkedIn': return <Linkedin size={20} />;
      case 'Email': return <Mail size={20} />;
      default: return <FileText size={20} />;
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative px-6 pt-20 overflow-hidden">

      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">


        {/* Floating Icons */}
        {[
          { Icon: <div className="w-3 h-3 bg-blue-500 rounded-full" />, x: '10%', y: '20%', delay: 0 },
          { Icon: <div className="w-2 h-2 bg-violet-500 rounded-full" />, x: '85%', y: '15%', delay: 1 },
          { Icon: <div className="w-4 h-4 border border-cyan-400/30 rounded-full" />, x: '15%', y: '80%', delay: 2 },
          { Icon: <div className="w-2 h-2 bg-emerald-400 rounded-full" />, x: '80%', y: '75%', delay: 3 },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="absolute opacity-40"
            initial={{ x: item.x, y: item.y }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item.delay,
            }}
            style={{ left: item.x, top: item.y }}
          >
            {item.Icon}
          </motion.div>
        ))}

        {/* Floating Code Snippets (Glassmorphism) */}
        <motion.div
          className="absolute top-[15%] left-[5%] md:left-[10%] p-3 rounded-xl bg-slate-900/40 backdrop-blur-sm border border-white/5 shadow-xl hidden lg:block"
          animate={{ y: [0, 15, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flex gap-1.5 mb-2">
            <div className="w-2 h-2 rounded-full bg-red-500/50" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
          </div>
          <code className="text-[10px] font-mono text-blue-300">
            const <span className="text-violet-300">ai</span> = <span className="text-emerald-300">new</span> Future();
          </code>
        </motion.div>

        <motion.div
          className="absolute bottom-[20%] right-[5%] md:right-[10%] p-3 rounded-xl bg-slate-900/40 backdrop-blur-sm border border-white/5 shadow-xl hidden lg:block"
          animate={{ y: [0, -15, 0], rotate: [0, -2, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <div className="flex gap-1.5 mb-2">
            <div className="w-2 h-2 rounded-full bg-slate-600/50" />
          </div>
          <code className="text-[10px] font-mono text-slate-400">
            <span className="text-pink-400">while</span>(alive) &#123; learn(); &#125;
          </code>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center z-10 w-full">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 lg:order-1 flex flex-col items-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-blue-400/20 bg-blue-900/10 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.2)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-blue-200 font-mono text-[10px] tracking-widest uppercase">
              Open to Work
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight font-display">
            <span className="block text-slate-400 text-xl md:text-2xl font-semibold mb-2 tracking-wide">Hi, I'm</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-slate-400 drop-shadow-2xl">
              {PERSONAL_INFO.name.split(' ')[0]}
            </span>
          </h1>

          <div className="h-12 mb-6 flex items-center justify-center gap-2 text-xl md:text-3xl">
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400 min-w-[250px] text-center border-r-4 border-blue-500/50 pr-4 animate-pulse font-display">
              {displayText}
            </span>
          </div>

          <p className="text-slate-300/90 text-lg leading-relaxed font-light mb-8 max-w-xl mx-auto">
            {PERSONAL_INFO.about.split('.')[0]}. Bridging the gap between complex AI models and user-friendly applications.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <Link to="projects" smooth={true} duration={500} className="cursor-pointer group relative px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all hover:-translate-y-1 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                View Work <ArrowRight size={18} />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Link>

            {SOCIAL_LINKS.slice(0, 2).map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-4 rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 hover:border-blue-500/50 transition-all flex items-center justify-center"
              >
                {getIcon(link.name)}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;