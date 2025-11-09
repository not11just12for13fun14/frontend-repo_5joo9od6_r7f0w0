import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[70vh]">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full border border-neutral-800/70 bg-neutral-900/70 px-3 py-1 text-xs text-neutral-300">Computer Science Undergraduate</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Building clean, fast and interactive web experiences.
            </h1>
            <p className="text-neutral-300 max-w-xl">
              I craft performant, accessible apps with a focus on elegant systems, developer experience, and delightful UX.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-500 transition-colors">
                View Projects <ArrowRight size={16} />
              </a>
              <a href="/resume.pdf" className="inline-flex items-center gap-2 rounded-md border border-neutral-700 px-4 py-2 font-medium text-white hover:bg-neutral-800 transition-colors">
                Download Resume <Download size={16} />
              </a>
            </div>
            <div className="flex flex-wrap gap-2 text-xs text-neutral-400">
              <span className="rounded-md bg-neutral-900/60 border border-neutral-800 px-2 py-1">React</span>
              <span className="rounded-md bg-neutral-900/60 border border-neutral-800 px-2 py-1">TypeScript</span>
              <span className="rounded-md bg-neutral-900/60 border border-neutral-800 px-2 py-1">Node</span>
              <span className="rounded-md bg-neutral-900/60 border border-neutral-800 px-2 py-1">Python</span>
              <span className="rounded-md bg-neutral-900/60 border border-neutral-800 px-2 py-1">FastAPI</span>
            </div>
          </div>
          <div className="relative min-h-[40vh] lg:min-h-[60vh]">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/30" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
