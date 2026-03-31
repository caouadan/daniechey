import '../styles/about.css';

function About() {
  return (
    <section id="about" className="section section-alt" aria-label="A propos">
      <div className="container">
        <h2 className="section-title">À propos</h2>
        <div className="about__card">
          <img src="/assets/illustration-profil.jpg" alt="Danie Chey" className="about__image" />
          <div className="about__content">
            <div className="about__card-header">Danie Chey</div>
            <p className="about__text">
              Designer et développeuse, je conbine technologie, créativité et pédagogie pour concevoir des expériences digitales à la fois belles et fonctionnelles. Mon profil hybride me permet de créer des solutions sur mesure : applications accessibles, identités visuelles percutantes ou modules d’apprentissage interactifs.
            </p>
            <div className="about__tags">
              <span className="tag tag--dark">Développement</span>
              <span className="tag tag--medium">Graphisme</span>
              <span className="tag tag--light">E-learning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
