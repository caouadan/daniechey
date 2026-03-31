import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import '../styles/not-found.css';

function NotFound() {
  const location = useLocation();

  useEffect(() => {
    console.error('404 Error:', location.pathname);
  }, [location.pathname]);

  return (
    <div className="not-found">
      <div className="not-found__content">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__text">Page introuvable</p>
        <a href="/" className="btn btn--primary">Retour à l'accueil</a>
      </div>
    </div>
  );
}

export default NotFound;
