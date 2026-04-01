import React from 'react';
import SectionWrapper from './SectionWrapper';
import { RESEARCH_WORK, EDUCATION, CERTIFICATIONS, HONOURS } from '../constants';
import { BookOpen, Award, GraduationCap, FileText, CheckCircle } from 'lucide-react';

const Academic: React.FC = () => {
  return (
    <>
      {/* Research / Thesis Section */}
      <SectionWrapper id="thesis" className="bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="text-cyber-500 w-8 h-8" />
            <h2 className="text-3xl font-bold text-white">Research & Thesis</h2>
          </div>
          
          <div className="glass-card p-8 rounded-xl border-l-4 border-l-cyber-500">
            <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
              {RESEARCH_WORK.title}
            </h3>
            <p className="text-slate-400 mb-6 text-lg leading-relaxed">
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

      {/* Education & Certs */}
      <SectionWrapper id="education">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-cyber-500 w-6 h-6" />
              <h2 className="text-2xl font-bold text-white">Education</h2>
            </div>
            
            <div className="space-y-8">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="relative pl-8 border-l border-slate-800">
                  <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-cyber-500" />
                  <h3 className="text-lg font-bold text-white">{edu.institution}</h3>
                  <p className="text-cyber-400 mb-1">{edu.degree}</p>
                  {edu.grade && <span className="text-sm text-slate-500 bg-slate-900 px-2 py-0.5 rounded">{edu.grade}</span>}
                  {edu.status && <span className="text-sm text-green-400 bg-green-900/20 px-2 py-0.5 rounded border border-green-900/50">{edu.status}</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Honours */}
          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <CheckCircle className="text-cyber-500 w-6 h-6" />
                <h2 className="text-2xl font-bold text-white">Certifications</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CERTIFICATIONS.map((cert, idx) => (
                  <div key={idx} className="bg-dark-card border border-slate-800 p-4 rounded-lg flex items-center gap-3 hover:border-cyber-500/30 transition-colors">
                     <FileText className="text-slate-500 w-5 h-5 flex-shrink-0" />
                     <span className="text-slate-300 font-medium">{cert.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <Award className="text-yellow-500 w-6 h-6" />
                <h2 className="text-2xl font-bold text-white">Honours & Awards</h2>
              </div>
              {HONOURS.map((honour, idx) => (
                <div key={idx} className="bg-gradient-to-r from-yellow-500/10 to-transparent p-6 rounded-xl border border-yellow-500/20">
                  <h3 className="text-xl font-bold text-white mb-2">{honour.title}</h3>
                  <p className="text-slate-400">{honour.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Academic;
