import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-24 sm:pt-20 md:pt-24 lg:pt-28 lg:pb-28">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Copy */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/60 bg-white px-3 py-1 text-xs text-slate-600 shadow-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-sky-500" />
              Fokus: Produktivitas & Estetika Minimalis
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Rahman Pratama
            </h1>
            <p className="mt-2 text-base font-medium text-slate-600 sm:text-lg">
              Mahasiswa Ilmu Komputer | Pengembang Web
            </p>
            <p className="mt-6 max-w-xl text-slate-600">
              Saya membangun antarmuka web yang bersih, fungsional, dan efisien. Prinsip saya: sederhana, konsisten, dan fokus pada hasil.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#" 
                className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900/20"
              >
                Lihat Resume
                <ArrowRight size={16} />
              </a>
              <a
                href="mailto:email@example.com"
                className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
              >
                Hubungi Saya
              </a>
              <div className="ml-2 flex items-center gap-3">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="text-slate-500 transition hover:text-slate-900"
                >
                  <Github size={22} />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="text-slate-500 transition hover:text-slate-900"
                >
                  <Linkedin size={22} />
                </a>
                <a
                  href="mailto:email@example.com"
                  aria-label="Email"
                  className="text-slate-500 transition hover:text-slate-900"
                >
                  <Mail size={22} />
                </a>
              </div>
            </div>
          </div>

          {/* 3D Spline */}
          <div className="relative h-[380px] sm:h-[420px] md:h-[460px] lg:h-[520px] xl:h-[560px]">
            <div className="absolute inset-0">
              <Spline
                scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
            {/* soft gradient overlay for readability, non-blocking */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent" />
          </div>
        </div>
      </div>

      {/* subtle background accents */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-sky-100 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-slate-100 blur-3xl" />
    </section>
  );
};

export default Hero;
