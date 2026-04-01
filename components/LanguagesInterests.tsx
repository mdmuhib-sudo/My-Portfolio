import React from 'react';
import SectionWrapper from './SectionWrapper';
import { LANGUAGES, INTERESTS } from '../constants';
import { Globe, Heart } from 'lucide-react';

const LanguagesInterests: React.FC = () => {
  return (
    <SectionWrapper id="interests" className="py-10">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Languages */}
        <div className="glass-card p-8 rounded-xl border border-slate-800">
           <div className="flex items-center gap-3 mb-6">
             <Globe className="text-cyber-500 w-6 h-6" />
             <h3 className="text-xl font-bold text-white">Languages</h3>
           </div>
           <div className="flex flex-wrap gap-3">
             {LANGUAGES.map(lang => (
               <span key={lang} className="px-4 py-2 bg-slate-900 text-slate-300 rounded-lg border border-slate-700">
                 {lang}
               </span>
             ))}
           </div>
        </div>

        {/* Interests */}
        <div className="glass-card p-8 rounded-xl border border-slate-800">
           <div className="flex items-center gap-3 mb-6">
             <Heart className="text-red-500 w-6 h-6" />
             <h3 className="text-xl font-bold text-white">Interests</h3>
           </div>
           <div className="flex flex-wrap gap-3">
             {INTERESTS.map(int => (
               <span key={int} className="px-4 py-2 bg-slate-900 text-slate-300 rounded-lg border border-slate-700">
                 {int}
               </span>
             ))}
           </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default LanguagesInterests;
