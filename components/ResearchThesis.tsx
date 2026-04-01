import React from 'react';
import SectionWrapper from './SectionWrapper';
import { RESEARCH_WORK } from '../constants';
import { BookOpen } from 'lucide-react';

const ResearchThesis: React.FC = () => {
  return (
    <SectionWrapper id="thesis" className="bg-slate-900/50 border-y border-slate-800">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
          <BookOpen className="text-cyber-500 w-8 h-8" />
          <h2 className="text-3xl font-bold text-white">Research & Thesis</h2>
        </div>
        
        <div className="glass-card p-8 rounded-xl border-l-4 border-l-cyber-500">
          <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
            {RESEARCH_WORK.title}
          </h3>
          <p className="text-slate-400 mb-6 text-lg leading-relaxed text-justify">
            {RESEARCH_WORK.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {RESEARCH_WORK.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-slate-800 text-slate-300 rounded text-sm font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ResearchThesis;