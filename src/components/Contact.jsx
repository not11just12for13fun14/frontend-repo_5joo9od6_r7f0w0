import React from 'react';
import { Mail, Send } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = React.useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! I will get back to you soon.');
  };

  return (
    <section id="contact" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-fuchsia-500/10 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">Let’s connect</h2>
          <p className="text-neutral-400">Open to internships, research, and collaboration.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-6">
            <div className="flex items-center gap-3 text-neutral-300">
              <Mail size={18} />
              <span>Reach me directly at your.email@university.edu</span>
            </div>
            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-sm text-neutral-300 mb-1">Name</label>
                <input className="w-full rounded-md border border-neutral-700 bg-neutral-800/60 px-3 py-2 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-600" placeholder="Your name" required />
              </div>
              <div>
                <label className="block text-sm text-neutral-300 mb-1">Email</label>
                <input type="email" className="w-full rounded-md border border-neutral-700 bg-neutral-800/60 px-3 py-2 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-600" placeholder="you@example.com" required />
              </div>
              <div>
                <label className="block text-sm text-neutral-300 mb-1">Message</label>
                <textarea rows={4} className="w-full rounded-md border border-neutral-700 bg-neutral-800/60 px-3 py-2 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-600" placeholder="What would you like to build together?" required />
              </div>
              <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-500 transition-colors">
                Send <Send size={16} />
              </button>
              {status && <p className="text-sm text-emerald-400">{status}</p>}
            </form>
          </div>
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6">
            <h3 className="text-xl font-semibold mb-4">About me</h3>
            <p className="text-neutral-300">
              I’m a CS undergrad passionate about human-computer interaction, systems design, and developer tooling. I love building interactive products that are performant and accessible.
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-neutral-300">
              <li>• Dean’s list, ACM member</li>
              <li>• Coursework: Algorithms, OS, Databases, ML</li>
              <li>• Hackathons: 3x winner</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
