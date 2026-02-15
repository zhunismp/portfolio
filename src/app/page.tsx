'use client';

import { useState, useEffect as React_useEffect } from 'react';
import * as React from 'react';
import Image from 'next/image';
import { Code, Server, Terminal, Linkedin, Github, Mail, Phone, Database, Cloud } from 'lucide-react';

function TechStackTabs() {
  const [activeTab, setActiveTab] = useState<'frontend' | 'backend' | 'database' | 'devops' | 'tools'>('frontend');

  const techStacks = {
    frontend: [
      { name: 'TypeScript', logo: '/ts-logo.svg' },
      { name: 'React', logo: '/react-logo.svg' },
      { name: 'Next.js', logo: '/next-logo.svg' },
      { name: 'Tailwind', logo: '/tailwind-logo.svg' },
    ],
    backend: [
      { name: 'Go', logo: '/go-logo.svg' },
      { name: 'Scala', logo: '/scala-logo.svg' },
      { name: 'Java', logo: '/java-logo.svg' },
      { name: 'Spring Boot', logo: '/spring-logo.png' },
    ],
    database: [
      { name: 'PostgreSQL', logo: '/pgsql-logo.svg' },
      { name: 'Redis', logo: '/redis-logo.svg' },
    ],
    devops: [
      { name: 'Docker', logo: '/docker-logo.svg' },
      { name: 'Kubernetes', logo: '/k8s-logo.svg' },
      { name: 'ArgoCD', logo: '/argo-logo.svg' },
      { name: 'Terraform', logo: '/tf-logo.svg' },
      { name: 'Gitlab CI', logo: '/gitlab-logo.svg' },
      { name: 'Github Actions', logo: '/gh-action-logo.png' },
    ],
    tools: [
      { name: 'Kafka', logo: '/kafka-logo.webp' },
      { name: 'AWS', logo: '/aws-logo.png' },
      { name: 'GCP', logo: '/gcp-logo.webp' },
      { name: 'Jira', logo: '/jira-logo.webp' },
    ],
  };

  const tabConfig = {
    frontend: {
      label: 'Frontend',
      icon: Code,
      gradient: 'from-purple-500/20 to-blue-500/20',
      hoverColor: 'hover:border-purple-500/50 hover:shadow-purple-500/20',
      activeColor: 'border-purple-500 bg-purple-500/10',
      textColor: 'text-purple-400',
    },
    backend: {
      label: 'Backend',
      icon: Server,
      gradient: 'from-blue-500/20 to-cyan-500/20',
      hoverColor: 'hover:border-blue-500/50 hover:shadow-blue-500/20',
      activeColor: 'border-blue-500 bg-blue-500/10',
      textColor: 'text-blue-400',
    },
    database: {
      label: 'Database',
      icon: Database,
      gradient: 'from-emerald-500/20 to-teal-500/20',
      hoverColor: 'hover:border-emerald-500/50 hover:shadow-emerald-500/20',
      activeColor: 'border-emerald-500 bg-emerald-500/10',
      textColor: 'text-emerald-400',
    },
    devops: {
      label: 'DevOps',
      icon: Cloud,
      gradient: 'from-orange-500/20 to-amber-500/20',
      hoverColor: 'hover:border-orange-500/50 hover:shadow-orange-500/20',
      activeColor: 'border-orange-500 bg-orange-500/10',
      textColor: 'text-orange-400',
    },
    tools: {
      label: 'Tools & Platforms',
      icon: Terminal,
      gradient: 'from-pink-500/20 to-orange-500/20',
      hoverColor: 'hover:border-pink-500/50 hover:shadow-pink-500/20',
      activeColor: 'border-pink-500 bg-pink-500/10',
      textColor: 'text-pink-400',
    },
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {(Object.keys(tabConfig) as Array<keyof typeof tabConfig>).map((tab) => {
          const Icon = tabConfig[tab].icon;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg border transition-all duration-300 font-medium flex items-center gap-2 ${activeTab === tab
                ? `${tabConfig[tab].activeColor} ${tabConfig[tab].textColor}`
                : 'border-slate-800 bg-slate-900/40 text-slate-400 hover:border-slate-700'
                }`}
            >
              <Icon className="w-5 h-5" />
              {tabConfig[tab].label}
            </button>
          );
        })}
      </div>

      <div key={activeTab} className="border border-slate-800 rounded-2xl p-8 bg-slate-900/20 backdrop-blur-sm min-h-[500px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {techStacks[activeTab].map((tech, index) => {
            const config = tabConfig[activeTab];
            return (
              <div
                key={tech.name}
                style={{ animationDelay: `${index * 50}ms` }}
                className={`group relative bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-xl p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${config.hoverColor} animate-[fadeInUp_0.5s_ease-out_both] flex items-center gap-4`}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${config.gradient} flex items-center justify-center shadow-lg shrink-0`}>
                  <div className="w-10 h-10 rounded bg-slate-900/90 flex items-center justify-center p-1.5">
                    <Image
                      src={tech.logo}
                      alt={tech.name}
                      width={32}
                      height={32}
                      className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>

                {/* Text */}
                <span className="text-slate-300 font-medium group-hover:text-white transition-colors">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ExperienceSection() {
  const experiences = [
    {
      company: 'LSEG',
      role: 'Associate Software Engineer',
      description: 'Building historical time-series data services',
      logo: '/lseg-logo.png',
      gradient: 'from-pink-500/10 to-orange-500/10',
      borderHover: 'hover:border-pink-500/50',
      shadowHover: 'hover:shadow-pink-500/20',
      textGradient: 'text-pink-400',
    },
    {
      company: 'Agoda',
      role: 'Software Engineer Intern',
      description: 'Built flights inspector tool for visualize pricing process of flights at Agoda',
      logo: '/agoda-logo.svg',
      gradient: 'from-purple-500/10 to-blue-500/10',
      borderHover: 'hover:border-purple-500/50',
      shadowHover: 'hover:shadow-purple-500/20',
      textGradient: 'text-purple-400',
    },
    {
      company: '100X',
      role: 'Full Stack Developer Intern',
      description: 'Built BFF application to bridge frontend and trading engine microservices',
      logo: '/100x-logo.jpeg',
      gradient: 'from-blue-500/10 to-cyan-500/10',
      borderHover: 'hover:border-blue-500/50',
      shadowHover: 'hover:shadow-blue-500/20',
      textGradient: 'text-blue-400',
    },
  ];

  return (
    <section id="experience" className="min-h-screen px-6 py-8 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Experiences
        </h2>
        <p className="text-slate-400 text-center mb-16 text-lg">
          Companies I&apos;ve had the privilege to work with
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center max-w-6xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`group relative bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 w-full h-full flex flex-col ${exp.borderHover} ${exp.shadowHover}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>

              <div className="relative w-20 h-20 mb-6 rounded-xl bg-slate-800/50 flex items-center justify-center shadow-lg overflow-hidden border border-slate-700/50 group-hover:border-slate-600 transition-colors">
                <Image
                  src={exp.logo}
                  alt={exp.company}
                  width={20}
                  height={20}
                  className="w-10 h-10 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 relative z-10">{exp.company}</h3>
              <p className={`${exp.textGradient} mb-2 font-medium relative z-10`}>{exp.role}</p>
              <p className="text-slate-400 text-sm leading-relaxed relative z-10">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [displayedName, setDisplayedName] = useState('');
  const fullName = 'Kobkit Ruangsuriyakij';

  React.useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullName.length) {
        setDisplayedName(fullName.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <main className="relative">
      <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-6 py-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent animate-[gradient-shift_8s_ease_infinite] bg-[length:200%_auto] tracking-tight">
            {displayedName}
          </h1>

          <p className="text-xl md:text-3xl text-slate-300 mb-8 font-light">
            Software Engineer
          </p>

          <p className="text-base md:text-xl text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            Passionate software engineer with 1+ years experience building scalable web applications
            and distributed systems. Specialized in modern development and cloud architecture.
          </p>

          <div className="flex justify-center mb-12 w-full px-4">
            <span className="px-5 py-2.5 rounded-full bg-slate-900/50 border border-slate-700/50 text-slate-300 backdrop-blur-md flex flex-wrap justify-center items-center gap-2 hover:border-purple-500/50 transition-colors duration-300 group cursor-default max-w-full">
              <span className="text-xl group-hover:scale-110 transition-transform duration-300">🚀</span>
              <span className="font-medium bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent text-center text-sm md:text-base">
                Eager to learn, fast to adapt, obsessed with how things work.
              </span>
            </span>
          </div>
        </div>
      </section>

      <ExperienceSection />

      <section id="tech-stack" className="min-h-screen px-6 py-8 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <p className="text-slate-400 text-center mb-12 text-lg">
            Technologies and tools I specialize in
          </p>

          <TechStackTabs />
        </div>
      </section>

      <section id="contact" className="min-h-screen px-6 py-8 relative flex items-center">
        <div className="max-w-5xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-slate-400 text-center mb-16 text-lg">
            Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto auto-rows-fr">
            <a href="https://www.linkedin.com/in/kobkit-ruangsuriyakij" target="_blank" rel="noopener noreferrer"
              className="group relative bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">LinkedIn</p>
                  <p className="text-white font-medium group-hover:text-blue-400 transition-colors">@kruangsuriya</p>
                </div>
              </div>
            </a>

            <a href="https://github.com/zhunismp" target="_blank" rel="noopener noreferrer"
              className="group relative bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-1">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                  <Github className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">GitHub</p>
                  <p className="text-white font-medium group-hover:text-purple-400 transition-colors">@zhunismp</p>
                </div>
              </div>
            </a>

            <a href="mailto:kobkit.zhun@gmail.com"
              className="group relative bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-pink-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/20 hover:-translate-y-1">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="text-white font-medium group-hover:text-pink-400 transition-colors">kobkit.zhun@gmail.com</p>
                </div>
              </div>
            </a>

            <a href="tel:+66616616514"
              className="group relative bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-1">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Phone</p>
                  <p className="text-white font-medium group-hover:text-cyan-400 transition-colors">+66 61 661 6514</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <footer className="px-6 py-8 border-t border-slate-800/50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400 text-sm">
            Designed and built by Kobkit Ruangsuriyakij with ❤️ and Claude of course.
          </p>
          <p className="text-slate-500 text-xs mt-2">
            © 2026 All rights reserved
          </p>
        </div>
      </footer>
    </main>
  );
}
