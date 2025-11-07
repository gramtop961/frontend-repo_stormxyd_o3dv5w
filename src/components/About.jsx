import React from 'react';

const About = () => {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-16">
      <div className="grid gap-10 md:grid-cols-3">
        <div className="md:col-span-1">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Tentang Saya</h2>
          <p className="mt-2 text-sm text-slate-500">Metode belajar & filosofi kerja</p>
        </div>
        <div className="md:col-span-2">
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600">
              Saya percaya bahwa produktivitas datang dari sistem yang sederhana dan konsisten. Saya menggunakan pendekatan <span className="font-medium">"build, measure, learn"</span> untuk setiap proyek: membangun versi minimal, mengukur dampak, lalu memperbaiki berdasarkan data.
            </p>
            <p className="mt-4 text-slate-600">
              Alat utama saya termasuk jurnal digital untuk pengelolaan waktu, template komponen yang konsisten, dan otomasi kecil untuk mengurangi pekerjaan berulang. Target saya adalah menjaga fokus pada hal yang benar-benar memberikan nilai.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
