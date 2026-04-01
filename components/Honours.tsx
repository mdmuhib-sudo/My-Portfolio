import React from 'react';
import SectionWrapper from './SectionWrapper';
import { HONOURS } from '../constants';
import { Award } from 'lucide-react';

const Honours: React.FC = () => {
  return (
    <SectionWrapper id="honours">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12 justify-center md:justify-start">
          <Award className="text-yellow-500 w-8 h-8" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">Honours & Awards</h2>
        </div>

        <div className="grid gap-6">
          {HONOURS.map((honour, idx) => (
            <div 
              key={idx} 
              className="relative overflow-hidden bg-gradient-to-r from-yellow-500/10 to-transparent p-8 rounded-2xl border border-yellow-500/20 hover:border-yellow-500/40 transition-colors"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Award className="w-24 h-24 text-yellow-500" />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-3">{honour.title}</h3>
                <p className="text-slate-400 text-lg leading-relaxed text-justify">{honour.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Honours;