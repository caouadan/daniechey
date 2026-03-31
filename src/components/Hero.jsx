import '../styles/hero.css';

function Hero() {
  const handleScrollToContact = (e) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero section" aria-label="Présentation">
      <div className="container">
        <div className="hero__badges">
          <span className="hero__badge hero__badge--highlight">CDI / Freelance</span>
          <span className="hero__badge">Lyon / Télétravail</span>
          <span className="hero__badge">TJM : à discuter</span>
        </div>
        <h1 className="hero__title">
          Développeuse web, Graphic & e-learning designer
        </h1>
        <p className="hero__subtitle">
          Designer multimédia et développeuse web, je conçois des contenus, des modules e-learning et des sites web accessibles, performants et engageants.
        </p>
        <div className="hero__cta">
          <a href="https://github.com/caouadan" className="btn btn--primary" target="_blank" rel="noopener noreferrer" aria-label="Voir le profil GitHub">
            GitHub
          </a>
          <a href="#contact" onClick={handleScrollToContact} className="btn btn--secondary" aria-label="Aller à la section contact">
            Me contacter
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
