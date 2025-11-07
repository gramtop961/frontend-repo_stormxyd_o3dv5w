import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'TaskFlow Minimal',
    desc: 'Aplikasi manajemen tugas ringan dengan fokus pada keyboard-first dan tampilan bersih.',
    link: 'https://github.com/yourname/taskflow-minimal',
    tags: ['React', 'Tailwind', 'Vite'],
  },
  {
    title: 'API Kampus Tracker',
    desc: 'REST API untuk mengelola jadwal kuliah dan deadline tugas secara terstruktur.',
    link: 'https://github.com/yourname/kampus-tracker-api',
    tags: ['FastAPI', 'MongoDB', 'Pydantic'],
  },
  {
    title: 'Portfolio Generator',
    desc: 'Generator portofolio statis dengan tema minimalis dan performa tinggi.',
    link: 'https://github.com/yourname/portfolio-generator',
    tags: ['Node', 'MDX', 'Static'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Proyek Unggulan</h2>
          <p className="mt-2 text-sm text-slate-500">3–4 proyek terbaik dengan fokus hasil nyata</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="group block rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-slate-900/10"
          >
            <div className="flex items-start justify-between">
              <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
              <ArrowUpRight className="h-5 w-5 text-slate-400 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-slate-900" />
            </div>
            <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-700">{t}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
