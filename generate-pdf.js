const PDFDocument = require('pdfkit');
const fs = require('fs');

const doc = new PDFDocument({ margin: 50 });
doc.pipe(fs.createWriteStream('public/resume.pdf'));

// Title
doc.font('Helvetica-Bold').fontSize(24).text('MD MUHIBBULLAH', { align: 'center' });
doc.moveDown(0.5);

// Subtitle
doc.font('Helvetica-Bold').fontSize(12).text('Cyber Security | Digital Forensics | Network & Cloud Security', { align: 'center' });
doc.moveDown(0.5);

// Contact Info
doc.font('Helvetica').fontSize(10).text('Birmingham, United Kingdom | mdmuhib936@gmail.com | +44 7482 564700', { align: 'center' });
doc.text('linkedin.com/in/md-muhibbullah-a9927b1b2/', { align: 'center' });
doc.moveDown(1.5);

// Section: PROFESSIONAL PROFILE
doc.font('Helvetica-Bold').fontSize(12).text('PROFESSIONAL PROFILE', { underline: true });
doc.moveDown(0.5);
doc.font('Helvetica').fontSize(10).text('A highly motivated Cyber Security specialist and current MSc student at Aston University with a strong foundation in networking and digital investigations. Dedicated to transitioning into Higher Education to deliver high-quality learning and teaching. Proven ability to lead academic teams and design secured network models, with a commitment to upholding institutional standards, including Safeguarding and PREVENT.', { align: 'justify' });
doc.moveDown(1.5);

// Section: CORE COMPETENCIES
doc.font('Helvetica-Bold').fontSize(12).text('CORE COMPETENCIES', { underline: true });
doc.moveDown(0.5);
doc.font('Helvetica').fontSize(10);
doc.list([
  'Technical: Cyber Security, Networking (Cisco Packet Tracer), Digital Forensics, Ethical Hacking, Cryptography, and Secure Software Engineering.',
  'Academic: Curriculum Design Support, Student Assessment Preparation, and Interactive Learning and Teaching.',
  'Compliance: GDPR, Equality and Diversity, and Safeguarding and PREVENT agenda.'
], { bulletRadius: 2 });
doc.moveDown(1.5);

// Section: PROFESSIONAL EXPERIENCE
doc.font('Helvetica-Bold').fontSize(12).text('PROFESSIONAL EXPERIENCE', { underline: true });
doc.moveDown(0.5);
doc.font('Helvetica-Bold').fontSize(10).text('IT Intern (Network) | Libas Textiles Ltd., Bangladesh', { continued: true });
doc.font('Helvetica').text('                                          Feb 2024 - Jul 2024', { align: 'right' });
doc.moveDown(0.5);
doc.text('Libas Textiles Ltd. is a prominent industrial textile manufacturing corporation based in Gazipur, Bangladesh. It has a large-scale industrial textile manufacturing corporation supporting a high-density infrastructure of 7,500 active computer network users per shift.', { align: 'justify' });
doc.moveDown(0.5);
doc.list([
  'Conducted Cyber Security audits and network troubleshooting to enhance organisational security.',
  'Led the design of a secured networking model, prioritising practical demonstration over theoretical concepts to ensure efficiency.',
  'Delivered informal peer support and shared good practice during network design and configuration training sessions, reflecting a commitment to learning and teaching.'
], { bulletRadius: 2 });
doc.moveDown(1.5);

// Section: TECHNICAL PROJECT & RESEARCH (THESIS)
doc.font('Helvetica-Bold').fontSize(12).text('TECHNICAL PROJECT & RESEARCH (THESIS)', { underline: true });
doc.moveDown(0.5);
doc.font('Helvetica-Bold').fontSize(10).text('A Secured and Optimised Network Model for Libas Textiles Ltd.', { continued: true });
doc.font('Helvetica').text('                                May 2024 - Jul 2024', { align: 'right' });
doc.moveDown(0.5);
doc.list([
  'Conducted a comprehensive Cyber Security audit of a legacy network infrastructure (established in 2005), identifying critical vulnerabilities and hardware inefficiencies that compromised organisational security.',
  'Proposed a modern, high-performance, and secured networking model for five industrial buildings, incorporating hardware and ISP redundancy to guarantee 24/7 connectivity.',
  'Presented a detailed analysis report based on the proposal, which successfully secured formal approval from IT administration and senior management within a seven-day timeframe for implementation.'
], { bulletRadius: 2 });
doc.moveDown(1);

doc.font('Helvetica-Bold').fontSize(10).text('Performance Evaluation of MANET\'s Routing Protocols in VANET for Mawa-Bhanga Expressway', { continued: true });
doc.font('Helvetica').text('                                Jun 2023 - Dec 2023', { align: 'right' });
doc.moveDown(0.5);
doc.list([
  'Conducted a comparative technical assessment of five routing protocols—including AODV, MAODV, OLSR, DSR, and GPSR—within a dynamic Vehicular Ad-Hoc Network (VANET) environment.',
  'Simulated high-speed expressway scenarios to evaluate networking efficiency across seven performance parameters, focusing on protocol behaviour under varying node densities.',
  'Utilised advanced data analysis to determine the most reliable Cyber Security and communication protocols for intelligent transportation systems.'
], { bulletRadius: 2 });
doc.moveDown(1.5);

// Section: EDUCATION
doc.font('Helvetica-Bold').fontSize(12).text('EDUCATION', { underline: true });
doc.moveDown(0.5);
doc.font('Helvetica-Bold').fontSize(10).text('MSc in Cyber Security Management | Aston University, Birmingham', { continued: true });
doc.font('Helvetica').text('                                Sept 2025 - Oct 2026', { align: 'right' });
doc.moveDown(0.5);
doc.list([
  'Key Modules: Strategic Digital Forensics Management, Network and Cloud Security Management, Managing Offensive Cybersecurity Operations, Cyber Security Risk Management and Governance.',
  'Actively engaging in Higher Education research regarding psychological phenomena in phishing attacks.'
], { bulletRadius: 2 });
doc.moveDown(1);

doc.font('Helvetica-Bold').fontSize(10).text('BSc in Computer Science and Engineering | IUBAT, Bangladesh', { continued: true });
doc.font('Helvetica').text('                                Jan 2020 - May 2024', { align: 'right' });
doc.moveDown(0.5);
doc.list([
  'Final Grade: 3.74/4.00 CGPA; Honoured as an IUBAT Scholar for outstanding academic performance.',
  'Developed a comprehensive understanding of Higher Education academic structures through rigorous coursework and team leadership.'
], { bulletRadius: 2 });
doc.moveDown(1.5);

// Section: TRAINING & CERTIFICATIONS
doc.font('Helvetica-Bold').fontSize(12).text('TRAINING & CERTIFICATIONS', { underline: true });
doc.moveDown(0.5);
doc.font('Helvetica-Bold').fontSize(10).text('Ethical Hacking for Professionals | ByteCapsule IT, Bangladesh', { continued: true });
doc.font('Helvetica').text('                                Feb 2025 - Dec 2025', { align: 'right' });
doc.moveDown(0.5);
doc.text('Key Modules: Vulnerability management, creating a report that considers web application security, Active Directory pentesting and severity, among other factors to determine remediation priority.', { align: 'justify' });
doc.moveDown(0.5);

doc.font('Helvetica-Bold').fontSize(10).text('Cisco Network Security | NACTAR, Bangladesh', { continued: true });
doc.font('Helvetica').text('                                Dec 2024 - Mar 2024', { align: 'right' });
doc.moveDown(0.2);
doc.font('Helvetica-Bold').fontSize(10).text('Cisco Certified Network Associate - CCNA | AIUB, Bangladesh', { continued: true });
doc.font('Helvetica').text('                                Apr 2022 - Jan 2023', { align: 'right' });
doc.moveDown(0.2);
doc.font('Helvetica-Bold').fontSize(10).text('Cisco Cyber Security Essentials | AIUB, Bangladesh', { continued: true });
doc.font('Helvetica').text('                                Jun 2022 - Jul 2023', { align: 'right' });
doc.moveDown(1.5);

// Section: LANGUAGES & INTERESTS
doc.font('Helvetica-Bold').fontSize(12).text('LANGUAGES & INTERESTS', { underline: true });
doc.moveDown(0.5);
doc.font('Helvetica').fontSize(10);
doc.text('Languages: English, Bengali, Hindi');
doc.moveDown(0.5);
doc.list([
  'Continuous Technical Learning',
  'Academic Community Engagement',
  'Academic Research in Cyber Security'
], { bulletRadius: 2 });

doc.end();
