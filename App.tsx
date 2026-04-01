import React from 'react';
import NetworkBackground from './components/NetworkBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ResearchThesis from './components/ResearchThesis';
import ResearchInterests from './components/ResearchInterests';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Honours from './components/Honours';
import LanguagesInterests from './components/LanguagesInterests';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorSpotlight from './components/CursorSpotlight';

const App: React.FC = () => {
  return (
    <div className="bg-dark-bg min-h-screen text-slate-300 font-sans selection:bg-cyber-500 selection:text-white relative">
      <CursorSpotlight />
      <NetworkBackground />
      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <ResearchThesis />
        <Blogs />
        <ResearchInterests />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Certifications />
        <Honours />
        <LanguagesInterests />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;