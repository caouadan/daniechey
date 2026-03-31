import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import logo from '../../assets/logo-portfolio-danie-chey.webp';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/#about", label: "À propos" },
    { href: "/#skills", label: "Compétences" },
    { href: "/#projects", label: "Projets" },
    { href: "/#timeline", label: "Parcours" },
    { href: "/#contact", label: "Contact" }
  ];

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
            <li key={link.href}>
              <a
                href={link.href}
                className="navbar__link"
                onClick={() => setIsOpen(false)}
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
