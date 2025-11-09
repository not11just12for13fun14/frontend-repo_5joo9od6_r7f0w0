import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/50 border-b border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-white text-lg">CS Portfolio</a>
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-neutral-300 hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
            <div className="flex items-center gap-4">
              <a aria-label="GitHub" href="https://github.com" target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-white"><Github size={18} /></a>
              <a aria-label="LinkedIn" href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-white"><Linkedin size={18} /></a>
              <a aria-label="Email" href="#contact" className="text-neutral-300 hover:text-white"><Mail size={18} /></a>
            </div>
          </nav>

          <button
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-neutral-800 bg-neutral-900/70 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-neutral-200 hover:text-white">
                {l.label}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-2">
              <a aria-label="GitHub" href="https://github.com" target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-white"><Github size={18} /></a>
              <a aria-label="LinkedIn" href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-white"><Linkedin size={18} /></a>
              <a aria-label="Email" href="#contact" className="text-neutral-300 hover:text-white"><Mail size={18} /></a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
