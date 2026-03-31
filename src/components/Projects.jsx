import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects, categories } from '../data/projects';
import '../styles/projects.css';

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.categories.includes(activeFilter));


  return (
    <section id="projects" className="section section-alt" aria-label="Projets">
      <div className="container">
        <h2 className="section-title">Projets</h2>
        <div className="projects__filters" role="group" aria-label="Filtrer les projets">
          {categories.map((cat) => (
            <button
              key={cat.key}
              className={`projects__filter-btn ${activeFilter === cat.key ? 'projects__filter-btn--active' : ''}`}
              onClick={() => setActiveFilter(cat.key)}
              aria-pressed={activeFilter === cat.key}
              data-category={cat.key}
            >
              {cat.label}
            </button>
          ))}
        </div>
        <div className="projects__grid">
          {filtered.map((project) => (
            <article className="project-card" key={project.id}>
              <div className={`project-card__category-indicator project-card__category-indicator--${project.categories[0]}`}></div>
              <Link to={`/projet/${project.id}`} className="project-card__link-full">
                <div className="project-card__image">
                  {project.images && project.images[0] ? (
                    <img src={project.images[0]} alt={project.title} />
                  ) : (
                    <span>Image</span>
                  )}
                </div>
                <div className="project-card__content">
                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__desc">{project.accroche}</p>
                  <div className="project-card__tags">
                    {project.stack.split(', ').map((tech) => (
                      <span key={tech} className="tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </Link>
              {project.link && project.link !== '#' && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-card__demo">
                  Demo
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
