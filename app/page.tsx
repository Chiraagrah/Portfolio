"use client";

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Download, ExternalLink, Star, GitFork, Code2, Brain, Server, Wrench } from 'lucide-react';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeSection, setActiveSection] = useState('home');

  // Manual featured projects from CV
  const manualProjects = [
    {
      id: 1,
      title: "AI-Powered Math Learning App",
      summary: "Duolingo-style gamified learning platform for CBSE 10th grade math with AI-powered tutoring",
      stack: ["Python", "scikit-learn", "Next.js", "Drizzle", "Neon"],
      kind: "AI/ML",
      featured: true,
      accuracy: null,
      links: [
        { label: "Case Study", href: "#" },
        { label: "GitHub", href: "https://github.com/Chiraagrah/DuoLingo" }
      ]
    },
    {
      id: 2,
      title: "Car Parking Detection System",
      summary: "Deep learning-powered vacant parking spot detection with real-time monitoring",
      stack: ["Python", "TensorFlow", "OpenCV", "Flask"],
      kind: "AI/ML",
      featured: true,
      accuracy: "98.24%",
      links: [
        { label: "Demo", href: "#" },
        { label: "GitHub", href: "https://github.com/Chiraagrah/Car-Parking-Slot-Detection/tree/main" }
      ]
    },
    {
      id: 3,
      title: "Smart Mirror",
      summary: "Voice-controlled smart mirror with AI assistant integration and real-time information display",
      stack: ["Python", "Raspberry Pi", "OpenCV", "API Integration"],
      kind: "Embedded/IoT",
      featured: true,
      accuracy: null,
      links: [
        { label: "Video", href: "#" },
        { label: "GitHub", href: "#" }
      ]
    },
    {
      id: 4,
      title: "Tiger Dev NFT Platform",
      summary: "NFT marketplace for wildlife conservation, generating 100+ NFTs supporting tiger conservation",
      stack: ["Solidity", "Web3.js", "Next.js", "IPFS"],
      kind: "Full-Stack",
      featured: false,
      accuracy: null,
      impact: "100+ NFTs for conservation",
      links: [
        { label: "Platform", href: "#" },
        { label: "GitHub", href: "https://github.com/dsc-gtbit/solana-app" }
      ]
    },
    {
      id: 5,
      title: "Generational Car Racing AI",
      summary: "Genetic algorithm-based car racing simulation with evolutionary learning",
      stack: ["Python", "Pygame", "Neural Networks"],
      kind: "AI/ML",
      featured: false,
      accuracy: null,
      links: [
        { label: "Demo", href: "#" },
        { label: "GitHub", href: "https://github.com/Chiraagrah/Generational-Car-Racing" }
      ]
    },
    {
      id: 6,
      title: "Income Prediction Model",
      summary: "Machine learning model for income prediction using demographic and employment data",
      stack: ["Python", "scikit-learn", "Pandas", "XGBoost"],
      kind: "AI/ML",
      featured: false,
      accuracy: null,
      links: [
        { label: "Notebook", href: "https://colab.research.google.com/drive/1RWrH4s-oDzk2X_mMjSOFur3BC_rQQ4xJ?usp=sharing" },
        { label: "GitHub", href: "#" }
      ]
    }
  ];

  const experience = [
    {
      title: "Tech Researcher",
      org: "Guru Tegh Bahadur Institute of Technology",
      period: "2022 - 2023",
      impact: [
        "Led IoT + AI research for precision agriculture",
        "Developed sensor mesh for soil monitoring",
        "Published research on spectroscopy-based soil analysis"
      ]
    },
    {
      title: "Creative Lead",
      org: "Google Developer Student Clubs",
      period: "2021 - 2022",
      impact: [
        "Designed brand identity and event materials",
        "Led workshops on design thinking",
        "Coordinated tech events for 500+ students"
      ]
    },
    {
      title: "Lead Designer",
      org: "Phoenix Guild Delhi",
      period: "2020 - 2021",
      impact: [
        "Created visual identity for gaming community",
        "Designed promotional materials and merchandise",
        "Managed social media presence"
      ]
    }
  ];

  const skills = {
    languages: ["Python", "Java", "C/C++", "JavaScript", "TypeScript", "SQL", "MATLAB"],
    frameworks: ["Next.js", "React", "Flutter", "TensorFlow", "PyTorch", "scikit-learn"],
    tools: ["Git", "Docker", "Drizzle", "Neon", "Arduino", "Figma", "Node.js"]
  };

  const research = {
    title: "Inter Connected Sensor Mesh To Monitor Soil",
    abstract: "IoT-based spectroscopy system for real-time soil analysis in precision agriculture",
    topics: ["IoT", "Spectroscopy", "Machine Learning", "Agriculture"],
    link: "https://ieeexplore.ieee.org/document/10698620"
  };

  const filteredProjects = activeFilter === 'all' 
    ? manualProjects 
    : manualProjects.filter(p => p.kind === activeFilter);

  const stats = [
    { label: "Years Experience", value: "3+" },
    { label: "Projects", value: manualProjects.length },
    { label: "Publications", value: "1" }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-zinc-900 text-zinc-100' : 'bg-zinc-50 text-zinc-900'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-lg ${darkMode ? 'bg-zinc-900/80 border-zinc-800' : 'bg-white/80 border-zinc-200'} border-b`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-bold">CS</div>
          <div className="flex items-center gap-6">
            {['home', 'projects', 'research', 'experience', 'about', 'contact'].map(section => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`capitalize transition-colors ${
                  activeSection === section 
                    ? 'text-blue-500' 
                    : darkMode ? 'text-zinc-400 hover:text-zinc-100' : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                {section}
              </button>
            ))}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-colors ${darkMode ? 'bg-zinc-800 hover:bg-zinc-700' : 'bg-zinc-200 hover:bg-zinc-300'}`}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </nav>

      <div className="pt-20">
        {/* Hero Section */}
        {activeSection === 'home' && (
          <section className="max-w-6xl mx-auto px-6 py-20">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-6xl font-bold tracking-tight">
                  Chirag Sharma
                </h1>
                <p className="text-2xl text-blue-500 font-medium">
                  AI Developer • Tech Researcher • Cross-Platform Developer
                </p>
                <p className={`text-xl max-w-3xl ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  Quick to learn, curious by nature — I thrive on building AI-driven, cross-platform solutions while diving into research that pushes tech forward.
                </p>
              </div>

              {/* Contact Info */}
              <div className={`flex flex-wrap gap-4 text-sm ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Newark, NJ, USA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>chirag.sharma1701@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 (646) 323-2874</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex gap-4">
                <button 
                  onClick={() => setActiveSection('projects')}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors"
                >
                  View Projects
                </button>
                <button className={`px-6 py-3 rounded-xl font-medium transition-colors flex items-center gap-2 ${darkMode ? 'bg-zinc-800 hover:bg-zinc-700' : 'bg-zinc-200 hover:bg-zinc-300'}`}>
                  <Download className="w-4 h-4" />
                  Download CV
                </button>
                <button 
                  onClick={() => setActiveSection('contact')}
                  className={`px-6 py-3 rounded-xl font-medium transition-colors ${darkMode ? 'bg-zinc-800 hover:bg-zinc-700' : 'bg-zinc-200 hover:bg-zinc-300'}`}
                >
                  Contact
                </button>
              </div>

              {/* Quick Links */}
              <div className="flex gap-3">
                <a href="#" className={`p-3 rounded-lg transition-colors ${darkMode ? 'bg-zinc-800 hover:bg-zinc-700' : 'bg-zinc-200 hover:bg-zinc-300'}`}>
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className={`p-3 rounded-lg transition-colors ${darkMode ? 'bg-zinc-800 hover:bg-zinc-700' : 'bg-zinc-200 hover:bg-zinc-300'}`}>
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className={`p-3 rounded-lg transition-colors ${darkMode ? 'bg-zinc-800 hover:bg-zinc-700' : 'bg-zinc-200 hover:bg-zinc-300'}`}>
                  <Code2 className="w-5 h-5" />
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                {stats.map(stat => (
                  <div key={stat.label} className={`p-6 rounded-xl ${darkMode ? 'bg-zinc-800' : 'bg-white shadow-sm'}`}>
                    <div className="text-3xl font-bold text-blue-500">{stat.value}</div>
                    <div className={`text-sm ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Featured Projects Preview */}
              <div className="pt-12">
                <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {manualProjects.filter(p => p.featured).map(project => (
                    <div 
                      key={project.id}
                      className={`p-6 rounded-xl transition-all hover:-translate-y-1 cursor-pointer ${darkMode ? 'bg-zinc-800 hover:bg-zinc-750' : 'bg-white shadow-sm hover:shadow-md'}`}
                    >
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      {project.accuracy && (
                        <div className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium mb-3">
                          {project.accuracy} Accuracy
                        </div>
                      )}
                      <p className={`text-sm mb-4 ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                        {project.summary}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.stack.slice(0, 3).map(tech => (
                          <span key={tech} className={`text-xs px-2 py-1 rounded ${darkMode ? 'bg-zinc-700 text-zinc-300' : 'bg-zinc-100 text-zinc-700'}`}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Currently Working On */}
              <div className={`p-6 rounded-xl ${darkMode ? 'bg-zinc-800' : 'bg-white shadow-sm'}`}>
                <h3 className="text-xl font-semibold mb-2">Currently</h3>
                <p className={darkMode ? 'text-zinc-400' : 'text-zinc-600'}>
                  Pursuing MS in Computer Science at NJIT, focusing on advanced AI/ML applications and full-stack development with modern cloud infrastructure.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <section className="max-w-6xl mx-auto px-6 py-20">
            <h1 className="text-5xl font-bold mb-8">Projects</h1>
            
            {/* Filters */}
            <div className="flex gap-3 mb-8 flex-wrap">
              {['all', 'AI/ML', 'Full-Stack', 'Embedded/IoT'].map(filter => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeFilter === filter
                      ? 'bg-blue-600 text-white'
                      : darkMode ? 'bg-zinc-800 hover:bg-zinc-700' : 'bg-zinc-200 hover:bg-zinc-300'
                  }`}
                >
                  {filter === 'all' ? 'All Projects' : filter}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {filteredProjects.map(project => (
                <div 
                  key={project.id}
                  className={`p-6 rounded-xl transition-all hover:-translate-y-1 ${darkMode ? 'bg-zinc-800' : 'bg-white shadow-sm'}`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                    <span className={`text-xs px-2 py-1 rounded ${darkMode ? 'bg-zinc-700' : 'bg-zinc-100'}`}>
                      {project.kind}
                    </span>
                  </div>
                  
                  {(project.accuracy || project.impact) && (
                    <div className="mb-3">
                      {project.accuracy && (
                        <div className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium">
                          {project.accuracy} Accuracy
                        </div>
                      )}
                      {project.impact && (
                        <div className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                          {project.impact}
                        </div>
                      )}
                    </div>
                  )}

                  <p className={`mb-4 ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    {project.summary}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map(tech => (
                      <span key={tech} className={`text-xs px-2 py-1 rounded ${darkMode ? 'bg-zinc-700 text-zinc-300' : 'bg-zinc-100 text-zinc-700'}`}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.links.map(link => (
                      <a
                        key={link.label}
                        href={link.href}
                        className={`text-sm flex items-center gap-1 transition-colors ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}
                      >
                        {link.label}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Research Section */}
        {activeSection === 'research' && (
          <section className="max-w-6xl mx-auto px-6 py-20">
            <h1 className="text-5xl font-bold mb-8">Research</h1>
            <div className={`p-8 rounded-xl ${darkMode ? 'bg-zinc-800' : 'bg-white shadow-sm'}`}>
              <h2 className="text-3xl font-bold mb-4">{research.title}</h2>
              <p className={`text-lg mb-6 ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                {research.abstract}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {research.topics.map(topic => (
                  <span key={topic} className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                    {topic}
                  </span>
                ))}
              </div>
              <a 
                href={research.link}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                View Publication
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </section>
        )}

        {/* Experience Section */}
        {activeSection === 'experience' && (
          <section className="max-w-6xl mx-auto px-6 py-20">
            <h1 className="text-5xl font-bold mb-8">Experience</h1>
            <div className="space-y-6">
              {experience.map((exp, idx) => (
                <div key={idx} className={`p-6 rounded-xl ${darkMode ? 'bg-zinc-800' : 'bg-white shadow-sm'}`}>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold">{exp.title}</h3>
                      <p className="text-blue-500 font-medium">{exp.org}</p>
                    </div>
                    <span className={`text-sm ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>{exp.period}</span>
                  </div>
                  <ul className={`space-y-2 ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    {exp.impact.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* About Section */}
        {activeSection === 'about' && (
          <section className="max-w-6xl mx-auto px-6 py-20">
            <h1 className="text-5xl font-bold mb-8">About</h1>
            
            {/* Education */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Education</h2>
              <div className="space-y-4">
                <div className={`p-6 rounded-xl ${darkMode ? 'bg-zinc-800' : 'bg-white shadow-sm'}`}>
                  <h3 className="text-xl font-semibold">Master of Science in Computer Science</h3>
                  <p className="text-blue-500">New Jersey Institute of Technology</p>
                  <p className={darkMode ? 'text-zinc-400' : 'text-zinc-600'}>Expected 2026</p>
                </div>
                <div className={`p-6 rounded-xl ${darkMode ? 'bg-zinc-800' : 'bg-white shadow-sm'}`}>
                  <h3 className="text-xl font-semibold">Bachelor of Technology in Computer Science</h3>
                  <p className="text-blue-500">Guru Gobind Singh Indraprastha University</p>
                  <p className={darkMode ? 'text-zinc-400' : 'text-zinc-600'}>2020 - 2024 • GPA: 9.375/10</p>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Skills</h2>
              <div className="space-y-6">
                <div className={`p-6 rounded-xl ${darkMode ? 'bg-zinc-800' : 'bg-white shadow-sm'}`}>
                  <div className="flex items-center gap-2 mb-4">
                    <Code2 className="w-5 h-5 text-blue-500" />
                    <h3 className="text-xl font-semibold">Languages</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.languages.map(lang => (
                      <span key={lang} className={`px-3 py-1 rounded ${darkMode ? 'bg-zinc-700' : 'bg-zinc-100'}`}>
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={`p-6 rounded-xl ${darkMode ? 'bg-zinc-800' : 'bg-white shadow-sm'}`}>
                  <div className="flex items-center gap-2 mb-4">
                    <Brain className="w-5 h-5 text-blue-500" />
                    <h3 className="text-xl font-semibold">Frameworks & Libraries</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.frameworks.map(fw => (
                      <span key={fw} className={`px-3 py-1 rounded ${darkMode ? 'bg-zinc-700' : 'bg-zinc-100'}`}>
                        {fw}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={`p-6 rounded-xl ${darkMode ? 'bg-zinc-800' : 'bg-white shadow-sm'}`}>
                  <div className="flex items-center gap-2 mb-4">
                    <Wrench className="w-5 h-5 text-blue-500" />
                    <h3 className="text-xl font-semibold">Tools & Platforms</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map(tool => (
                      <span key={tool} className={`px-3 py-1 rounded ${darkMode ? 'bg-zinc-700' : 'bg-zinc-100'}`}>
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <section className="max-w-6xl mx-auto px-6 py-20">
            <h1 className="text-5xl font-bold mb-8">Contact</h1>
            <div className="grid md:grid-cols-2 gap-8">
              <div className={`p-8 rounded-xl ${darkMode ? 'bg-zinc-800' : 'bg-white shadow-sm'}`}>
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <form className="space-y-4">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                      Name
                    </label>
                    <input
                      type="text"
                      className={`w-full px-4 py-2 rounded-lg transition-colors ${darkMode ? 'bg-zinc-900 border-zinc-700 focus:border-blue-500' : 'bg-zinc-50 border-zinc-300 focus:border-blue-600'} border outline-none`}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                      Email
                    </label>
                    <input
                      type="email"
                      className={`w-full px-4 py-2 rounded-lg transition-colors ${darkMode ? 'bg-zinc-900 border-zinc-700 focus:border-blue-500' : 'bg-zinc-50 border-zinc-300 focus:border-blue-600'} border outline-none`}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className={`w-full px-4 py-2 rounded-lg transition-colors ${darkMode ? 'bg-zinc-900 border-zinc-700 focus:border-blue-500' : 'bg-zinc-50 border-zinc-300 focus:border-blue-600'} border outline-none`}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              <div className="space-y-6">
                <div className={`p-6 rounded-xl ${darkMode ? 'bg-zinc-800' : 'bg-white shadow-sm'}`}>
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-blue-500" />
                      <span>contact@example.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-blue-500" />
                      <span>+1 (XXX) XXX-XXXX</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-blue-500" />
                      <span>Newark, NJ, USA</span>
                    </div>
                  </div>
                </div>

                <div className={`p-6 rounded-xl ${darkMode ? 'bg-zinc-800' : 'bg-white shadow-sm'}`}>
                  <h3 className="text-xl font-semibold mb-4">Social Links</h3>
                  <div className="flex gap-3">
                    <a href="#" className={`p-3 rounded-lg transition-colors ${darkMode ? 'bg-zinc-700 hover:bg-zinc-600' : 'bg-zinc-100 hover:bg-zinc-200'}`}>
                      <Github className="w-5 h-5" />
                    </a>
                    <a href="#" className={`p-3 rounded-lg transition-colors ${darkMode ? 'bg-zinc-700 hover:bg-zinc-600' : 'bg-zinc-100 hover:bg-zinc-200'}`}>
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className={`p-3 rounded-lg transition-colors ${darkMode ? 'bg-zinc-700 hover:bg-zinc-600' : 'bg-zinc-100 hover:bg-zinc-200'}`}>
                      <Code2 className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <div className={`p-6 rounded-xl ${darkMode ? 'bg-zinc-800' : 'bg-white shadow-sm'}`}>
                  <h3 className="text-xl font-semibold mb-2">Book a Call</h3>
                  <p className={`mb-4 ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    Schedule a 15-minute intro call to discuss opportunities or collaborations.
                  </p>
                  <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                    Book on Calendly
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>

      {/* Footer */}
      <footer className={`border-t mt-20 ${darkMode ? 'border-zinc-800 bg-zinc-900' : 'border-zinc-200 bg-white'}`}>
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className={darkMode ? 'text-zinc-400' : 'text-zinc-600'}>
              © 2025 Chirag Sharma. Built with Next.js & Tailwind CSS
            </div>
            <div className="flex gap-4">
              <a href="#" className={`transition-colors ${darkMode ? 'text-zinc-400 hover:text-zinc-100' : 'text-zinc-600 hover:text-zinc-900'}`}>
                Privacy
              </a>
              <a href="#" className={`transition-colors ${darkMode ? 'text-zinc-400 hover:text-zinc-100' : 'text-zinc-600 hover:text-zinc-900'}`}>
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
                