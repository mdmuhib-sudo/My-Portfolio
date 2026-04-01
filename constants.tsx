import { ExperienceItem, Project, EducationItem, Skill, ResearchItem, Certificate } from './types';
import { Shield, Cloud, Lock, Server, Terminal, Globe, Cpu, Wifi, Crosshair } from 'lucide-react';
import React from 'react';

export const SOCIAL_LINKS = {
  whatsapp: 'https://wa.me/447482564700',
  email: 'mailto:mdmuhib936@gmail.com',
  linkedin: 'https://linkedin.com', // Placeholder as per request
  orcid: 'https://orcid.org/0009-0007-9485-3600',
  github: 'https://github.com/mdmuhib-sudo?tab=packages',
  location: 'Birmingham, United Kingdom',
  phone: '+44 7482 564700'
};

export const RESEARCH_INTERESTS = [
  {
    title: 'Network & Cloud Security',
    icon: <Cloud className="w-8 h-8 text-cyber-400" />,
    description: 'Focus on secure network architecture, enterprise network protection, and securing cloud infrastructures and distributed systems.'
  },
  {
    title: 'Digital Forensics',
    icon: <Terminal className="w-8 h-8 text-cyber-400" />,
    description: 'Investigation, recovery, and analysis of material found in digital devices related to cybercrime.'
  },
  {
    title: 'Offensive Cyber Security',
    icon: <Crosshair className="w-8 h-8 text-cyber-400" />,
    description: 'Proactive security testing, vulnerability assessment, penetration testing, and simulating cyber attacks to strengthen defenses.'
  },
  {
    title: 'Cyber Security Risk Management',
    icon: <Shield className="w-8 h-8 text-cyber-400" />,
    description: 'Strategic approach to identifying, assessing, and mitigating digital security risks in enterprise environments.'
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'Libas Textiles Ltd',
    role: 'IT Intern (Network)',
    period: 'Feb 2024 – May 2024',
    description: [
      'Conducted rigorous network troubleshooting and diagnostics.',
      'Performed comprehensive network security audits.',
      'Assisted in enterprise network design and optimization.',
      'Configured and deployed new network devices (routers, switches).'
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    institution: 'Aston University',
    degree: 'MSc Cyber Security Management',
    status: 'Current',
    // Uncomment the line below to add your CGPA when you complete your Masters.
    // grade: 'CGPA 4.00/4.00', 
    modules: [
      'Strategic Digital Forensic Management',
      'Managing Offensive Cyber Security Operations',
      'Cyber Security Risk Management and Governance',
      'Network and Cloud Security Management',
      'Management of Cryptosystems',
      'Artificial Intelligence for Business'
    ]
  },
  {
    institution: 'International University of Business Agriculture and Technology',
    degree: 'BSc Computer Science & Engineering',
    grade: 'CGPA 3.74/4.00',
    modules: [
      'Data communication and computer network',
      'Computer Hardware and Maintanance',
      'Database Management systems',
      'Programming in C, C++, Java',
      'Assembly Language',
      'Software Engineering',
      'Programming Language and Structures',
      'Data Structure and Algorithms'
    ]
  },
  {
    institution: 'Dhaka Imperial College',
    degree: 'HSC',
    grade: 'Science'
  },
  {
    institution: 'Gawair Adarsha High School',
    degree: 'SSC',
    grade: 'Science'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Network Security', level: 90, category: 'Network' },
  { name: 'Cisco Packet Tracer', level: 95, category: 'Tools' },
  { name: 'Network Design', level: 90, category: 'Network' },
  { name: 'Network Configuration', level: 88, category: 'Network' },
  { name: 'Linux Administration', level: 80, category: 'OS' },
  { name: 'Windows Administration', level: 85, category: 'OS' },
  { name: 'Digital Forensics', level: 75, category: 'Security' },
  { name: 'Cloud Security', level: 70, category: 'Security' },
];

export const PROJECTS: Project[] = [
  {
    title: 'Secured & Optimized Network Model for Libas Textiles Ltd',
    description: 'Designed and simulated a secured & optimized enterprise network architecture ensuring high availability and redundancy. This project presents an in-depth exploration of the design and implementation of a network infrastructure tailored to the specific needs of Libas Textiles Ltd.',
    tech: ['Cisco Packet Tracer', 'VLAN', 'OSPF', 'ACL'],
  },
  {
    title: 'Automatic Car Parking System',
    description: 'IoT-based automated parking solution using Arduino microcontrollers and sensors for efficient space management.',
    tech: ['Arduino', 'C++', 'Sensors', 'IoT'],
  },
  {
    title: 'Hospital Management System',
    description: 'A comprehensive software solution for managing hospital operations, patient records, and staff scheduling.',
    tech: ['Java', 'SQL', 'Swing'],
  }
];

export const RESEARCH_WORK: ResearchItem = {
  title: 'Performance Evaluation of MANET Routing Protocols in VANET for Expressway Scenario',
  description: 'Evaluated MANET routing protocols for vehicular networks using multiple performance metrics. Recognized as one of the best research works during final defense.',
  tags: ['VANET', 'MANET', 'Routing Protocols', 'Network Simulation', 'NS2/NS3']
};

export const CERTIFICATIONS: Certificate[] = [
  { 
    name: 'Ethical Hacking for Professionals',
    image: 'https://picsum.photos/seed/hacking/800/600'
  },
  { 
    name: 'Cisco Network Security',
    image: 'https://picsum.photos/seed/cisco/800/600'
  },
  { 
    name: 'CCNA',
    issuer: 'Cisco Networking Academy',
    year: '2022',
    // Replace this with your actual image path later (e.g., '/ccna_certificate.png')
    image: 'https://picsum.photos/seed/ccna/800/600'
  },
  { 
    name: 'Cyber Security Essentials',
    issuer: 'Bangladesh Hi-Tech Park Authority',
    year: '2022',
    // Replace this with your actual image path later (e.g., '/cyber_security_certificate.png')
    image: 'https://picsum.photos/seed/cyber/800/600' 
  },
  { 
    name: 'Mobile Forensics',
    image: 'https://picsum.photos/seed/forensics/800/600'
  },
  { 
    name: 'Linux Essentials',
    image: 'https://picsum.photos/seed/linux/800/600'
  },
  { 
    name: 'GIS',
    image: 'https://picsum.photos/seed/gis/800/600'
  }
];

export const HONOURS = [
  {
    title: 'IUBAT Scholar',
    description: 'Awarded for outstanding academic performance during undergraduate studies.'
  }
];

export const LANGUAGES = ['Bengali', 'English', 'Hindi'];
export const INTERESTS = ['Cricket', 'Theater', 'Travelling', 'Debate', 'Singing'];