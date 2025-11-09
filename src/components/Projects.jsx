import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const PROJECTS = [
  {
    title: 'Algorithm Visualizer',
    description:
      'Interactive visualizations for graph and sorting algorithms built with React and Canvas.',
    tags: ['React', 'D3', 'Algorithms'],
    links: {
      github: '#',
      live: '#',
    },
  },
  {
    title: 'Full-stack Notes App',
    description:
      'A fast, offline-ready PWA that syncs notes with end-to-end encryption.',
    tags: ['TypeScript', 'FastAPI', 'MongoDB'],
    links: {
      github: '#',
      live: '#',
    },
  },
  {
    title: 'Code Tutor Bot',
    description:
      'Conversational AI assistant to explain code snippets and CS concepts.',
    tags: ['Python', 'NLP', 'RAG'],
    links: {
      github: '#',
      live: '#',
    },
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Selected Projects</h2>
            <p className="text-neutral-400">A snapshot of work focusing on systems, performance, and UX.</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <article key={p.title} className="group relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/40 p-5 hover:border-neutral-700 transition-colors">
              <div className="mb-4 h-36 rounded-lg bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-fuchsia-600/20" />
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-1 text-sm text-neutral-300">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-[11px] rounded-md bg-neutral-800 px-2 py-1 text-neutral-300">{t}</span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3">
                <a href={p.links.github} className="inline-flex items-center gap-1 text-sm text-neutral-300 hover:text-white"><Github size={16}/>Code</a>
                <a href={p.links.live} className="inline-flex items-center gap-1 text-sm text-neutral-300 hover:text-white"><ExternalLink size={16}/>Live</a>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
