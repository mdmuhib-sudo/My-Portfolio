import React from 'react';
import SectionWrapper from './SectionWrapper';
import { BookOpen, Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const SAMPLE_BLOGS = [
  {
    title: "Understanding Zero Trust Architecture in Modern Networks",
    excerpt: "An in-depth look at how Zero Trust principles are reshaping enterprise network security, moving away from perimeter-based defenses to continuous verification.",
    date: "March 15, 2026",
    readTime: "5 min read",
    tags: ["Network Security", "Zero Trust", "Enterprise"],
    link: "https://medium.com/tag/cybersecurity"
  },
  {
    title: "The Role of Digital Forensics in Incident Response",
    excerpt: "Exploring the critical steps in digital forensics during a cyber incident, focusing on evidence preservation, analysis, and reporting methodologies.",
    date: "February 28, 2026",
    readTime: "7 min read",
    tags: ["Digital Forensics", "Incident Response", "Cyber Security"],
    link: "https://medium.com/tag/digital-forensics"
  }
];

const Blogs: React.FC = () => {
  return (
    <SectionWrapper id="blogs" className="bg-slate-900/30">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">Latest Writings</h2>
        <div className="w-20 h-1 bg-cyber-500 mx-auto rounded-full" />
        <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
          Insights, research, and thoughts on cyber security, network architecture, and digital forensics.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {SAMPLE_BLOGS.map((blog, index) => (
          <motion.article
            key={index}
            whileHover={{ y: -8 }}
            className="group bg-dark-card border border-slate-800 hover:border-cyber-500/50 rounded-xl p-6 transition-all shadow-lg hover:shadow-cyber-500/10 flex flex-col relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyber-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="flex items-center gap-4 text-xs font-mono text-slate-400 mb-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3 text-cyber-400" />
                {blog.date}
              </span>
              <span className="flex items-center gap-1">
                <BookOpen className="w-3 h-3 text-cyber-400" />
                {blog.readTime}
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyber-400 transition-colors">
              {blog.title}
            </h3>
            
            <p className="text-slate-400 mb-6 flex-grow text-sm leading-relaxed text-justify">
              {blog.excerpt}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {blog.tags.map(tag => (
                <span key={tag} className="px-3 py-1 text-xs font-mono text-cyber-300 bg-cyber-900/30 rounded-full border border-cyber-900/50">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-auto pt-4 border-t border-slate-800/50">
              <a 
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-cyber-400 hover:text-cyber-300 transition-colors group/link"
              >
                Read Article 
                <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Blogs;
