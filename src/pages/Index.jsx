import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
  const location = useLocation();

  useEffect(() => {
    // Scroll to section if we navigated from another page
    if (location.state?.scrollSection) {
      const element = document.getElementById(location.state.scrollSection);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.state?.scrollSection]);

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
