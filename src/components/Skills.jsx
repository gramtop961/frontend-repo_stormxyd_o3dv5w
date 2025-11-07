import React from 'react';
import { Code2, Database, Layout, Wrench } from 'lucide-react';

const skills = [
  { icon: <Code2 className="h-5 w-5" />, title: 'Bahasa', items: ['JavaScript/TypeScript', 'Python', 'SQL'] },
  { icon: <Layout className="h-5 w-5" />, title: 'Frontend', items: ['React', 'Tailwind CSS', 'Framer Motion'] },
  { icon: <Database className="h-5 w-5" />, title: 'Backend', items: ['FastAPI', 'MongoDB', 'Node'] },
  { icon: <Wrench className="h-5 w-5" />, title: 'Alat', items: ['Git', 'VS Code', 'Figma'] },
];

const Skills = () => {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Tools & Skills</h2>
        <p className="mt-2 text-sm text-slate-500">Kemampuan inti dan perangkat kerja</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {skills.map((s) => (
          <div key={s.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-slate-900">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-50 text-sky-600">
                {s.icon}
              </div>
              <h3 className="text-sm font-semibold">{s.title}</h3>
            </div>
            <ul className="mt-4 space-y-1 text-sm text-slate-600">
              {s.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
