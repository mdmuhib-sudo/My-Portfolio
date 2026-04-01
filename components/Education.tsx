import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { EDUCATION } from '../constants';
import { GraduationCap, ChevronDown, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { EducationItem } from '../types';

const EducationCard: React.FC<{ edu: EducationItem; index: number }> = ({ edu, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasModules = edu.modules && edu.modules.length > 0;

  return (
    <div className="relative">
      {/* Timeline Dot */}
      <div className="absolute -left-[41px] md:-left-[58px] top-1 w-6 h-6 rounded-full bg-dark-bg border-2 border-cyber-500 z-10" />
      <div className="absolute -left-[37px] md:-left-[54px] top-2 w-4 h-4 rounded-full bg-cyber-500 animate-pulse" />
      
      <motion.div 
        layout
        onClick={() => hasModules && setIsOpen(!isOpen)}
        className={`glass-card p-6 rounded-xl border border-slate-800 transition-all duration-300 relative overflow-hidden group ${hasModules ? 'cursor-pointer hover:border-cyber-500/50' : ''}`}
      >
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-2">
          <div className="flex-1 pr-4">
            <h3 className="text-xl font-bold text-white group-hover:text-cyber-400 transition-colors">
              {edu.institution}
            </h3>
            <p className="text-lg text-slate-300 font-medium mt-1">{edu.degree}</p>
          </div>
          
          <div className="flex flex-col items-end gap-2 shrink-0">
             {edu.status && (
               <span className="text-sm text-green-400 bg-green-900/20 px-3 py-1 rounded-full border border-green-900/50 whitespace-nowrap">
                 {edu.status}
               </span>
             )}
             {edu.grade && (
               <span className="text-sm text-cyber-300 bg-cyber-900/20 px-3 py-1 rounded-full border border-cyber-900/30 font-mono whitespace-nowrap">
                 {edu.grade}
               </span>
             )}
          </div>
        </div>

        <AnimatePresence>
          {isOpen && hasModules && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="border-t border-slate-800 pt-4">
                <div className="flex items-center gap-2 mb-3 text-cyber-400">
                  <BookOpen className="w-4 h-4" />
                  <span className="text-sm font-bold uppercase tracking-wider">Key Modules</span>
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  {edu.modules!.map((module, i) => (
                    <div key={i} className="flex items-start gap-2 text-slate-400 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyber-500 mt-1.5 shrink-0" />
                      <span>{module}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {hasModules && (
          <div className="absolute bottom-2 right-1/2 translate-x-1/2 opacity-50 group-hover:opacity-100 transition-opacity">
            <ChevronDown className={`w-5 h-5 text-cyber-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
          </div>
        )}
      </motion.div>
    </div>
  );
};

const Education: React.FC = () => {
  return (
    <SectionWrapper id="education">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12 justify-center md:justify-start">
          <GraduationCap className="text-cyber-500 w-8 h-8" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">Education</h2>
        </div>
        
        <div className="space-y-10 border-l border-slate-800 ml-3 md:ml-6 pl-8 md:pl-12 py-2">
          {EDUCATION.map((edu, idx) => (
            <EducationCard key={idx} edu={edu} index={idx} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Education;