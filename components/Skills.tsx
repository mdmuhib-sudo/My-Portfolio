import React from 'react';
import SectionWrapper from './SectionWrapper';
import { SKILLS } from '../constants';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  // Group skills by category for better organization
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <SectionWrapper id="skills">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-6 flex items-center gap-3">
          <span className="w-2 h-8 bg-cyber-500 rounded-full" />
          Technical Competencies
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {categories.map((category) => (
          <div key={category} className="space-y-6">
            <h3 className="text-xl font-semibold text-slate-200 border-b border-slate-800 pb-2 mb-4">
              {category}
            </h3>
            {SKILLS.filter(s => s.category === category).map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-slate-300 font-medium">{skill.name}</span>
                  <span className="text-cyber-400 font-mono text-sm">{skill.level}%</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-cyber-600 to-cyber-400 rounded-full relative"
                  >
                    <div className="absolute top-0 right-0 bottom-0 w-1 bg-white/50 animate-pulse" />
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
