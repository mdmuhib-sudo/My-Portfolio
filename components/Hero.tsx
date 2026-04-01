import React from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronRight, Mail, BookOpen } from 'lucide-react';

const Hero: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="home">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyber-500/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-4"
          >
            <div className="h-[1px] w-8 bg-cyber-500" />
            <span className="text-cyber-400 font-mono text-sm tracking-wider uppercase">
              System Online
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-slate-100 leading-tight mb-6"
          >
            MD Muhibbullah <br />
            <span className="text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-cyber-400 to-blue-500">
              Cyber Security Specialist
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-xl text-slate-400 max-w-2xl mb-8 leading-relaxed border-l-2 border-slate-700 pl-6 text-justify"
          >
            Securing networks. Optimizing infrastructure. Protecting digital systems.
            <br />
            Researcher & Network Engineer dedicated to building resilient cyber architectures.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a 
              href="#projects" 
              onClick={(e) => handleScrollTo(e, '#projects')}
              className="px-8 py-3 bg-cyber-600 hover:bg-cyber-500 text-white font-medium rounded-lg transition-all flex items-center gap-2 shadow-lg shadow-cyber-900/20 hover:shadow-cyber-500/40 cursor-pointer"
            >
              View Projects <ChevronRight className="w-4 h-4" />
            </a>
            
            <a 
              href="/resume.pdf" 
              download="MD_Muhibbullah_CV.pdf"
              className="px-8 py-3 border border-slate-700 hover:border-cyber-500 text-slate-300 hover:text-white font-medium rounded-lg transition-all flex items-center gap-2 bg-slate-900/50 backdrop-blur-sm cursor-pointer"
            >
              <Download className="w-4 h-4" /> Download CV
            </a>

            <a 
              href="#blogs" 
              onClick={(e) => handleScrollTo(e, '#blogs')}
              className="px-8 py-3 border border-slate-700 hover:border-cyber-500 text-slate-300 hover:text-white font-medium rounded-lg transition-all flex items-center gap-2 bg-slate-900/50 backdrop-blur-sm cursor-pointer"
            >
              <BookOpen className="w-4 h-4" /> Blogs
            </a>

            <a 
              href="#contact" 
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="px-8 py-3 border border-transparent hover:bg-slate-800 text-slate-300 font-medium rounded-lg transition-all flex items-center gap-2 cursor-pointer"
            >
              <Mail className="w-4 h-4" /> Contact Me
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 md:right-20 opacity-20 hidden md:block"
      >
        <div className="grid grid-cols-4 gap-2">
          {[...Array(16)].map((_, i) => (
            <div key={i} className={`w-2 h-2 rounded-full ${Math.random() > 0.5 ? 'bg-cyber-400' : 'bg-slate-700'}`} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;