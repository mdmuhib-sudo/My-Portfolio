import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { CERTIFICATIONS } from '../constants';
import { CheckCircle, FileText, X, Eye, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Certificate } from '../types';

const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <SectionWrapper id="certifications" className="bg-slate-900/30">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-12 justify-center md:justify-start">
          <CheckCircle className="text-cyber-500 w-8 h-8" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">Training & Certifications</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.button 
              key={idx}
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => cert.image && setSelectedCert(cert)}
              disabled={!cert.image}
              className={`group w-full text-left relative bg-dark-card border border-slate-800 p-6 rounded-xl flex items-center gap-4 transition-all shadow-lg overflow-hidden ${
                cert.image 
                  ? 'cursor-pointer hover:border-cyber-500 hover:shadow-cyber-500/20 hover:bg-slate-800/50' 
                  : 'cursor-default opacity-75'
              }`}
            >
              {/* Button sheen effect */}
              {cert.image && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              )}

              <div className={`p-3 rounded-lg transition-colors shrink-0 ${
                cert.image 
                  ? 'bg-cyber-900/20 text-cyber-400 group-hover:bg-cyber-500 group-hover:text-white' 
                  : 'bg-slate-800/50 text-slate-500'
              }`}>
                {cert.image ? <Award className="w-6 h-6" /> : <FileText className="w-6 h-6" />}
              </div>
              
              <div className="flex-1 min-w-0">
                <span className={`block font-bold text-lg truncate transition-colors ${
                  cert.image ? 'text-slate-200 group-hover:text-cyber-400' : 'text-slate-400'
                }`}>
                  {cert.name}
                </span>
                {cert.image ? (
                   <div className="flex items-center gap-1.5 mt-1 text-xs text-cyber-500 font-medium uppercase tracking-wider">
                     <Eye className="w-3 h-3" /> View Certificate
                   </div>
                ) : (
                   <p className="text-xs text-slate-500 mt-1">Pending Verification</p>
                )}
              </div>
            </motion.button>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            >
              <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full bg-dark-card border border-slate-700 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
              >
                {/* Header */}
                <div className="flex justify-between items-center p-4 md:p-6 border-b border-slate-700 bg-slate-900/80 backdrop-blur sticky top-0 z-10">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">{selectedCert.name}</h3>
                    {(selectedCert.issuer || selectedCert.year) && (
                      <p className="text-sm text-cyber-400 font-mono mt-1">
                        {selectedCert.issuer} {selectedCert.year ? `// ${selectedCert.year}` : ''}
                      </p>
                    )}
                  </div>
                  <button 
                    onClick={() => setSelectedCert(null)}
                    className="p-2 hover:bg-slate-800 rounded-full text-slate-400 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Image Area */}
                <div className="flex-1 bg-slate-950 p-4 overflow-auto flex justify-center items-center">
                   {selectedCert.image ? (
                     <img 
                       src={selectedCert.image} 
                       alt={selectedCert.name}
                       onError={(e) => {
                         const target = e.target as HTMLImageElement;
                         target.src = `https://placehold.co/800x600/1e293b/ef4444?text=Missing:+${selectedCert.image?.replace('/', '')}`;
                       }} 
                       className="max-w-full h-auto object-contain rounded-lg shadow-2xl border border-slate-800"
                     />
                   ) : (
                     <div className="text-slate-500 flex flex-col items-center gap-3">
                       <FileText className="w-16 h-16 opacity-50" />
                       <p>Certificate image not available</p>
                     </div>
                   )}
                </div>

                {/* Footer / Details */}
                {selectedCert.details && (
                  <div className="p-6 border-t border-slate-700 bg-slate-900/50">
                    <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-line font-mono text-justify">
                      {selectedCert.details}
                    </p>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
};

export default Certifications;