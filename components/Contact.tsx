import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { SOCIAL_LINKS } from '../constants';
import { Mail, Linkedin, MapPin, Phone, Send, Fingerprint, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <SectionWrapper id="contact" className="bg-gradient-to-t from-black to-slate-900/50">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-6">Get In Touch</h2>
          <p className="text-slate-400 mb-10 text-lg leading-relaxed text-justify">
            Interested in collaboration or have a security question? Feel free to reach out. I am always open to discussing new projects, research opportunities, or creative ideas.
          </p>

          <div className="space-y-6">
            <a 
              href={SOCIAL_LINKS.email} 
              className="flex items-center gap-4 p-4 bg-slate-800/30 hover:bg-slate-800/50 border border-slate-700 hover:border-cyber-500 rounded-xl transition-all group"
            >
              <div className="p-3 bg-slate-900 rounded-lg text-cyber-500 group-hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Email Me</p>
                <p className="text-white font-medium">mdmuhib936@gmail.com</p>
              </div>
            </a>

            <a 
              href={SOCIAL_LINKS.whatsapp} 
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-4 bg-slate-800/30 hover:bg-slate-800/50 border border-slate-700 hover:border-green-500 rounded-xl transition-all group"
            >
              <div className="p-3 bg-slate-900 rounded-lg text-green-500 group-hover:text-white transition-colors">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-slate-500">WhatsApp</p>
                <p className="text-white font-medium">+44 7482 564700</p>
              </div>
            </a>

            <a 
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noreferrer" 
              className="flex items-center gap-4 p-4 bg-slate-800/30 hover:bg-slate-800/50 border border-slate-700 hover:border-blue-500 rounded-xl transition-all group"
            >
              <div className="p-3 bg-slate-900 rounded-lg text-blue-500 group-hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-slate-500">LinkedIn</p>
                <p className="text-white font-medium">Connect Professionally</p>
              </div>
            </a>

            <a 
              href={SOCIAL_LINKS.orcid}
              target="_blank"
              rel="noreferrer" 
              className="flex items-center gap-4 p-4 bg-slate-800/30 hover:bg-slate-800/50 border border-slate-700 hover:border-[#A6CE39] rounded-xl transition-all group"
            >
              <div className="p-3 bg-slate-900 rounded-lg text-[#A6CE39] group-hover:text-white transition-colors">
                <Fingerprint className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-slate-500">ORCID iD</p>
                <p className="text-white font-medium">0009-0007-9485-3600</p>
              </div>
            </a>

            <a 
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noreferrer" 
              className="flex items-center gap-4 p-4 bg-slate-800/30 hover:bg-slate-800/50 border border-slate-700 hover:border-slate-400 rounded-xl transition-all group"
            >
              <div className="p-3 bg-slate-900 rounded-lg text-slate-400 group-hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-slate-500">GitHub</p>
                <p className="text-white font-medium">mdmuhib-sudo</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 pl-0">
               <div className="p-3 text-slate-500">
                 <MapPin className="w-6 h-6" />
               </div>
               <div>
                 <p className="text-sm text-slate-500">Location</p>
                 <p className="text-white font-medium">{SOCIAL_LINKS.location}</p>
               </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-dark-card border border-slate-800 p-8 rounded-2xl shadow-xl">
          <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-400 mb-2">Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-cyber-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-2">Email</label>
                <input 
                  type="email" 
                  required
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-cyber-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm text-slate-400 mb-2">Subject</label>
              <input 
                type="text" 
                required
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-cyber-500 transition-colors"
                placeholder="Collaboration Inquiry"
              />
            </div>

            <div>
              <label className="block text-sm text-slate-400 mb-2">Message</label>
              <textarea 
                required
                rows={4}
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-cyber-500 transition-colors resize-none"
                placeholder="Your message here..."
              />
            </div>

            <button 
              type="submit" 
              disabled={formStatus !== 'idle'}
              className="w-full bg-cyber-600 hover:bg-cyber-500 text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {formStatus === 'idle' && (
                <>Send Message <Send className="w-4 h-4" /></>
              )}
              {formStatus === 'submitting' && 'Sending...'}
              {formStatus === 'success' && 'Message Sent!'}
            </button>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;