import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import Navbar from '../components/Navbar';
import '../styles/global.css';
import '../styles/components.css';
import '../styles/project-page.css';

function ProjectPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(0);

  const images = project?.images || [];
  const displayImages = images.length > 0 ? images : [];

  return (
    <>
      <Navbar />
      <main>
        <div className="project-page">
          <div className="container">
            <Link to="/" className="back-link">Retour a l'accueil</Link>

            <h1 className="project-page__title">{project ? project.title : 'Projet non trouve'}</h1>

            {project && (
              <>
                <div className="project-page__gallery">
                  <div className="project-page__main-image">
                    {displayImages[selectedImage] ? (
                      <img src={displayImages[selectedImage]} alt={`${project.title} - Image ${selectedImage + 1}`} />
                    ) : (
                      <div className="project-page__image-placeholder">
                        <span>Image {selectedImage + 1}</span>
                      </div>
                    )}
                  </div>
                  {displayImages.length > 1 && (
                    <div className="project-page__thumbnails">
                      {displayImages.map((img, index) => (
                        <button
                          key={index}
                          className={`project-page__thumbnail ${selectedImage === index ? 'project-page__thumbnail--active' : ''}`}
                          onClick={() => setSelectedImage(index)}
                        >
                          <img src={img} alt={`${project.title} - Miniature ${index + 1}`} />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="project-page__content">
                  <div className="project-page__block">
                    <h2>Contexte</h2>
                    <p>{project.contexte}</p>
                  </div>

                  <div className="project-page__block">
                    <h2>Objectifs</h2>
                    <p>{project.objectifs}</p>
                  </div>

                  <div className="project-page__block">
                    <h2>Stack technique</h2>
                    <p>{project.stack}</p>
                  </div>

                  <div className="project-page__block">
                    <h2>Competences developpees</h2>
                    <p>{project.competences}</p>
                  </div>

                  <div className="project-page__block">
                    <h2>Resultats et impact</h2>
                    <p>{project.resultats}</p>
                  </div>

                  <div className="project-page__block">
                    <h2>Perspectives d'amelioration</h2>
                    <p>{project.perspectives}</p>
                  </div>

                  {project.link && project.link !== '#' && (
                    <div className="project-page__link">
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                        Demo
                      </a>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </main>
      <footer className="footer">
        <div className="container">
          <p>© 2026 Danie Chey — Tous droits reserves</p>
        </div>
      </footer>
    </>
  );
}

export default ProjectPage;
