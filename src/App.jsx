import { Award, Cpu, Download, Github, Globe, Linkedin, Mail } from 'lucide-react';

const Portfolio = () => {
  const personalInfo = {
    name: "Veeresh Hanni",
    title: "Full-Stack Software Engineer", // Stronger title than "Developer" [cite: 4]
    // Value proposition focusing on your specific architectural strengths 
    tagline: "Architecting secure, scalable web solutions with Django, React, and Hybrid Database Systems.",
    email: "veereshhanni347@gmail.com", // [cite: 2]
    linkedin: "https://linkedin.com/in/veeresh-hanni", // [cite: 2]
    github: "https://github.com/veeresh-hanni", // [cite: 2]
    location: "Gadag, India",
    resumeLink: "/resume.pdf" // Placeholder for your actual resume file
  };

  const skills = [
    { category: "Core Stack", items: ["Python", "React.js", "Django", "SQL"] }, // [cite: 7]
    { category: "Infrastructure", items: ["Docker", "Linux", "REST APIs", "Apache Maven"] }, // [cite: 7, 13]
    { category: "Data Architecture", items: ["MongoDB (Atlas)", "MySQL", "PostgreSQL", "Hybrid Systems"] }, // [cite: 8]
    { category: "Tools", items: ["Git", "VS Code", "IntelliJ IDEA", "Postman"] }, // [cite: 9]
  ];

  const projects = [
    {
      title: "Pingone - Secure AI Architecture", // Professional rebranding of the project name 
      role: "Full-Stack Architect",
      tech: ["React", "Django", "MongoDB", "PostgreSQL"],
      // Description emphasizes security and architecture over just "chatting" 
      description: "Designed a secure, real-time AI conversational platform. Engineered a hybrid database architecture utilizing MongoDB for encrypted unstructured logs and PostgreSQL for relational user metadata. Implemented end-to-end cryptography for data privacy.",
      link: "https://pingone.onrender.com", // 
      github: "https://github.com/veeresh-hanni",
      featured: true
    },
    {
      title: "Pharmacy Resource Planning System", // More professional than "Dispensing System" 
      role: "Backend Lead",
      tech: ["Python", "Django ORM", "MySQL"],
      // Focus on business logic and MVC pattern 
      description: "Developed a comprehensive inventory management solution using the MVC pattern. Optimized complex Django ORM queries for stock tracking and implemented Role-Based Access Control (RBAC) for secure pharmacy operations.",
      link: "#",
      github: "https://github.com/veeresh-hanni",
      featured: false
    },
    {
      title: "IPO Web Application", // [cite: 19]
      role: "SDE Intern Project",
      tech: ["React.js", "Django", "SQL"],
      // Highlight the "Real-time" and "Optimization" aspect [cite: 20, 22]
      description: "Contributed to a high-traffic fintech application at Bluestock Fintech. Optimized API response times for real-time IPO data retrieval and engineered scalable frontend components.",
      link: "#",
      github: "#",
      featured: false
    }
  ];

  const experience = [
    {
      role: "Software Development Engineer Intern", // [cite: 19]
      company: "Bluestock Fintech",
      location: "Remote",
      period: "April 2025 – May 2025", // [cite: 19]
      // Action-oriented description [cite: 20, 21, 22]
      achievements: [
        "Engineered full-stack features for a live IPO Web Application using React and Django.",
        "Optimized SQL queries to reduce data retrieval latency for large datasets.",
        "Collaborated in an agile environment to enhance system scalability."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-teal-500/30 selection:text-teal-200">

      {/* Navbar / Top Bar */}
      <nav className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-xl text-teal-400 tracking-tight">VH.</span>
          <div className="flex gap-4">
            <a href={personalInfo.github} className="hover:text-white transition-colors"><Github size={20} /></a>
            <a href={personalInfo.linkedin} className="hover:text-white transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-16 space-y-24">

        {/* Hero Section */}
        <section className="flex flex-col md:flex-row gap-12 items-center pt-8">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-400/10 text-teal-400 text-sm font-medium border border-teal-400/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              Available for Hire
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
              {personalInfo.name}
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 font-light max-w-2xl leading-relaxed">
              {personalInfo.tagline}
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#contact" className="px-6 py-3 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold rounded-lg transition-all">
                Contact Me
              </a>
              <a href={personalInfo.resumeLink} className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg border border-slate-700 flex items-center gap-2 transition-all">
                <Download size={18} /> Resume
              </a>
            </div>
          </div>

          {/* Decorative Code Snippet Element */}
          <div className="hidden md:block w-80 h-80 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-purple-500/20 rounded-2xl blur-2xl"></div>
            <div className="relative bg-slate-900 border border-slate-700 rounded-xl p-6 h-full font-mono text-sm overflow-hidden opacity-90">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="space-y-2 text-slate-400">
                <p><span className="text-purple-400">class</span> <span className="text-yellow-400">Engineer</span>:</p>
                <p className="pl-4">def <span className="text-blue-400">__init__</span>(self):</p>
                <p className="pl-8">self.stack = [<span className="text-green-400">'React'</span>, <span className="text-green-400">'Django'</span>]</p>
                <p className="pl-8">self.passion = <span className="text-green-400">'Scalability'</span></p>
                <p className="pl-4 mt-4">def <span className="text-blue-400">build_future</span>(self):</p>
                <p className="pl-8">return <span className="text-green-400">'Innovation'</span></p>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Grid */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold text-white">Technical Arsenal</h2>
            <div className="h-px bg-slate-800 flex-1"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-teal-500/30 transition-colors">
                <h3 className="text-teal-400 font-medium mb-4 text-sm uppercase tracking-wider">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((item, i) => (
                    <li key={i} className="text-slate-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Work */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl font-bold text-white">Selected Works</h2>
            <div className="h-px bg-slate-800 flex-1"></div>
          </div>

          <div className="grid gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className={`group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-teal-500/50 transition-all ${project.featured ? 'md:col-span-2' : ''}`}>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-teal-500 text-xs font-bold uppercase tracking-wider mb-1 block">{project.role}</span>
                      <h3 className="text-2xl font-bold text-white group-hover:text-teal-400 transition-colors">{project.title}</h3>
                    </div>
                    <div className="flex gap-3">
                      {project.link !== "#" && <a href={project.link} className="p-2 bg-slate-800 rounded-lg hover:bg-teal-500 hover:text-slate-900 transition-all"><Globe size={18} /></a>}
                      {project.github !== "#" && <a href={project.github} className="p-2 bg-slate-800 rounded-lg hover:bg-white hover:text-slate-900 transition-all"><Github size={18} /></a>}
                    </div>
                  </div>
                  <p className="text-slate-400 leading-relaxed mb-6 max-w-3xl">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-800 text-slate-300 text-xs font-mono rounded-md border border-slate-700/50">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience & Education Split */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* Experience */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl font-bold text-white">Experience</h2>
              <div className="h-px bg-slate-800 flex-1"></div>
            </div>
            {experience.map((exp, idx) => (
              <div key={idx} className="relative pl-8 border-l border-slate-800 space-y-2">
                <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-teal-500"></div>
                <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                <div className="flex justify-between text-sm text-slate-500 mb-4">
                  <span>{exp.company}</span>
                  <span>{exp.period}</span>
                </div>
                <ul className="space-y-2">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="text-slate-400 text-sm leading-relaxed flex items-start gap-2">
                      <span className="text-teal-500 mt-1.5">›</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Certifications & Education */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl font-bold text-white">Credentials</h2>
              <div className="h-px bg-slate-800 flex-1"></div>
            </div>
            <div className="space-y-6">
              <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                <h3 className="text-white font-semibold mb-1">Diploma in CS & Engineering</h3>
                <p className="text-slate-500 text-sm mb-2">Govt. Polytechnic, Gadag • 9.5 CGPA</p>
                <div className="text-xs text-teal-400 bg-teal-400/10 inline-block px-2 py-1 rounded">2022 - 2025</div>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest">Certifications</h4>
                <div className="flex items-center gap-3 text-slate-300">
                  <Award className="text-teal-500" size={18} />
                  <span>Java, DSA & OOP <span className="text-slate-500">(Scaler Academy)</span></span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Cpu className="text-teal-500" size={18} />
                  <span>Google Baseline Tooling Hackathon <span className="text-slate-500">(Participant)</span></span>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer / Contact */}
        <footer id="contact" className="py-20 border-t border-slate-800 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Let's Build Something Scalable</h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">
            I am currently looking for full-time Software Engineering roles.
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <a href={`mailto:${personalInfo.email}`} className="inline-flex items-center gap-2 px-8 py-4 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold rounded-lg transition-all mx-auto">
            <Mail size={20} /> Say Hello
          </a>
          <p className="mt-12 text-slate-600 text-sm">© 2026 Veeresh Hanni. All Rights Reserved.</p>
        </footer>

      </main>
    </div>
  );
};

export default Portfolio;