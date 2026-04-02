import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/navbar.css';
import logo from '../../assets/logo-portfolio-danie-chey.webp';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const links = [
    { id: "about", label: "À propos" },
    { id: "skills", label: "Compétences" },
    { id: "projects", label: "Projets" },
    { id: "timeline", label: "Parcours" },
    { id: "contact", label: "Contact" }
  ];

  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault();
    setIsOpen(false);

    // Vérifier si on est déjà sur la page d'accueil
    if (location.pathname === '/') {
      // On est sur la page d'accueil, scroller directement
      const element = document.getElementById(sectionId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 0);
      }
    } else {
      // On est sur une autre page, naviguer vers l'accueil et scroller
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <nav className="navbar" role="navigation" aria-label="Navigation principale">
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo" aria-label="Danie Chey - Accueil">
          <img src={logo} alt="" className="navbar__logo-dot" aria-hidden="true" />
          Danie Chey
        </Link>
        <button
          className="navbar__hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Ouvrir le menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`navbar__links ${isOpen ? 'navbar__links--open' : ''}`}>
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="navbar__link"
                onClick={(e) => handleScrollToSection(e, link.id)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
