import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Goals from './components/Goals';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      {/* Header / Nav */}
      <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="text-sm font-semibold tracking-tight">
            rp<span className="text-sky-600">.dev</span>
          </a>
          <nav className="hidden gap-6 text-sm text-slate-600 md:flex">
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#projects" className="hover:text-slate-900">Projects</a>
            <a href="#skills" className="hover:text-slate-900">Skills</a>
            <a href="#goals" className="hover:text-slate-900">Goals</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#" className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium shadow-sm hover:bg-slate-50">
              <FileText size={16} /> Lihat Resume
            </a>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Goals />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-slate-600 md:flex-row">
          <p>
            © {new Date().getFullYear()} Rahman Pratama. Dibuat dengan pendekatan minimalis.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-900"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-900"
            >
              <Linkedin size={18} />
            </a>
            <a href="mailto:email@example.com" className="hover:text-slate-900">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
