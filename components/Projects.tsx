import React from 'react';
import SectionWrapper from './SectionWrapper';
import { PROJECTS } from '../constants';
import { Github, ExternalLink, Folder } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  return (
    <SectionWrapper id="projects" className="bg-slate-900/30">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">Featured Projects</h2>
        <div className="w-20 h-1 bg-cyber-500 mx-auto rounded-full" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -8 }}
            className="group bg-dark-card border border-slate-800 hover:border-cyber-500/50 rounded-xl p-6 transition-all shadow-lg hover:shadow-cyber-500/10 flex flex-col"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-slate-800/50 rounded-lg text-cyber-400 group-hover:text-cyber-300">
                <Folder className="w-6 h-6" />
              </div>
              <div className="flex gap-4">
                {project.github && (
                  <a href={project.github} className="text-slate-400 hover:text-white transition-colors" aria-label="GitHub Repo">
                    <Github className="w-5 h-5" />
                  </a>
                )}
                <a href={project.link || "#"} className="text-slate-400 hover:text-white transition-colors" aria-label="View Project">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyber-400 transition-colors">
              {project.title}
            </h3>
            
            <p className="text-slate-400 mb-6 flex-grow text-sm leading-relaxed text-justify">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map(t => (
                <span key={t} className="px-3 py-1 text-xs font-mono text-cyber-300 bg-cyber-900/30 rounded-full border border-cyber-900/50">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;