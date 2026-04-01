import React from 'react';
import SectionWrapper from './SectionWrapper';
import { User, ShieldCheck, Database, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <SectionWrapper id="about">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-6 flex items-center gap-3">
          <span className="w-2 h-8 bg-cyber-500 rounded-full" />
          About Me
        </h2>
        <div className="glass-card p-8 md:p-10 rounded-2xl border border-slate-800 relative overflow-hidden">
          {/* Background decoration moved inside the card */}
          <div className="absolute inset-0 bg-gradient-to-tr from-cyber-900/10 to-purple-900/10 blur-3xl rounded-full -z-10" />
          
          <p className="text-slate-400 leading-relaxed text-lg mb-6 text-justify">
            Hi, I’m Md. Muhibbullah (Muhib). I am currently an MSc Cyber Security Management student at Aston University. I am deeply passionate about Digital Forensics, Network Security, and Offensive Security. I explore the intersection of human behavior and technology through my current research into the psychological phenomena behind phishing attacks. I am now seeking a Ph.D. path to further investigate these emerging global threats.
          </p>
          <p className="text-slate-400 leading-relaxed text-lg mb-6 text-justify">
            My technical expertise is backed by professional certifications in Ethical Hacking, Cisco Network Security, and CCNA . While I love technical challenges, my ultimate dream is to become a teacher in Higher Education teaching. I am a dedicated lifelong learner who is constantly curious about new technologies. My goal is to share this knowledge with students, delivering practical learning that prepares them for real-world global roles while adhering to standards like Safeguarding and the PREVENT agenda today. I am truly excited to begin this new academic chapter.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            <div className="flex items-center gap-3 text-slate-300">
              <ShieldCheck className="text-cyber-500 shrink-0" /> 
              <span className="font-medium">Network Security</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
              <Database className="text-cyber-500 shrink-0" /> 
              <span className="font-medium">Data Protection</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
              <Globe className="text-cyber-500 shrink-0" /> 
              <span className="font-medium">Cloud Infra</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
              <User className="text-cyber-500 shrink-0" /> 
              <span className="font-medium">Academic Research</span>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;