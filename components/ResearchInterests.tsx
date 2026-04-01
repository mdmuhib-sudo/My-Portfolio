import React from 'react';
import SectionWrapper from './SectionWrapper';
import { RESEARCH_INTERESTS } from '../constants';
import { motion } from 'framer-motion';

const ResearchInterests: React.FC = () => {
  return (
    <SectionWrapper id="research" className="bg-slate-900/30">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">Research Interests</h2>
        <div className="w-20 h-1 bg-cyber-500 mx-auto rounded-full" />
        <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-justify md:text-center">
          Exploring advanced methodologies in cybersecurity to secure modern infrastructures.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {RESEARCH_INTERESTS.map((item, index) => (
          <motion.div
            key={item.title}
            whileHover={{ y: -5 }}
            className="group relative p-6 bg-dark-card border border-slate-800 hover:border-cyber-500/50 transition-all rounded-xl overflow-hidden flex flex-col h-full"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              {item.icon}
            </div>
            
            <div className="mb-6 p-4 bg-slate-800/50 w-fit rounded-lg text-cyber-400 group-hover:bg-cyber-500/10 group-hover:text-cyber-300 transition-colors">
              {item.icon}
            </div>

            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyber-400 transition-colors">
              {item.title}
            </h3>
            
            <p className="text-slate-400 leading-relaxed text-sm flex-grow text-justify">
              {item.description}
            </p>

            <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
              <span className="h-[1px] w-8 bg-cyber-500" />
              <span className="text-xs text-cyber-400 uppercase tracking-wider">Research Area</span>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ResearchInterests;