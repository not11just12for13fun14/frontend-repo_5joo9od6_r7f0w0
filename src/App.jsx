import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
