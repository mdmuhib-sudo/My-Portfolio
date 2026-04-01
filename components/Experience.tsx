import React from 'react';
import SectionWrapper from './SectionWrapper';
import { EXPERIENCE } from '../constants';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <SectionWrapper id="experience">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-12 flex items-center gap-3">
        <span className="w-2 h-8 bg-cyber-500 rounded-full" />
        Professional Experience
      </h2>

      <div className="space-y-12 relative border-l border-slate-800 ml-4 md:ml-8 pl-8 md:pl-12">
        {EXPERIENCE.map((exp, index) => (
          <div key={index} className="relative">
            {/* Dot */}
            <div className="absolute -left-[41px] md:-left-[57px] top-0 p-2 bg-dark-bg border border-slate-700 rounded-full text-cyber-500">
              <Briefcase className="w-5 h-5" />
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
              <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
              <span className="font-mono text-cyber-400 bg-cyber-900/20 px-3 py-1 rounded border border-cyber-900/50 text-sm">
                {exp.period}
              </span>
            </div>
            
            <h4 className="text-xl text-slate-300 mb-4">{exp.company}</h4>
            
            <ul className="space-y-3">
              {exp.description.map((desc, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-400">
                  <span className="mt-2 w-1.5 h-1.5 bg-cyber-500 rounded-full flex-shrink-0" />
                  <span className="leading-relaxed text-justify">{desc}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Experience;