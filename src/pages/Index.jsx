import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Timeline from '../components/Timeline';
import Contact from '../components/Contact';
import '../styles/global.css';
import '../styles/components.css';

function Index() {
  useEffect(() => {
    const hash = window.location.hash;

    const sectionId = hash.split('#').pop();

    if (sectionId) {
      const element = document.getElementById(sectionId);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container">
          <p>© 2026 Danie Chey — Tous droits réservés</p>
        </div>
      </footer>
    </>
  );
}

export default Index;
