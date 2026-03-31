import { useState } from 'react';
import '../styles/contact.css';

function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mkopravr', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section section-alt" aria-label="Contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="contact__inner">
          <div className="contact__left">
            <h2>Vous avez un projet ou vous souhaitez me recruter ? Prenons contact !</h2>
            <div className="contact__socials">
              <a href="https://www.linkedin.com/in/danie-chey-3a2613146" className="contact__social-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                in
              </a>
              <a href="https://github.com/caouadan" className="contact__social-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                GH
              </a>
            </div>
          </div>
          <div className="contact__form-wrapper">
            {status === 'success' && (
              <div className="contact__success">
                <p>Votre message a été envoyé !</p>
              </div>
            )}
            <form className="contact__form" onSubmit={handleSubmit} aria-label="Formulaire de contact">
              <label htmlFor="name">Votre nom</label>
              <input
                id="name"
                className="contact__input"
                type="text"
                name="name"
                placeholder="Ton nom"
                required
                autoComplete="name"
              />
              <label htmlFor="email">Votre email</label>
              <input
                id="email"
                className="contact__input"
                type="email"
                name="email"
                placeholder="Ton email"
                required
                autoComplete="email"
              />
              <label htmlFor="message">Votre message</label>
              <textarea
                id="message"
                className="contact__textarea"
                name="message"
                placeholder="Ton message"
                required
              />
              <button type="submit" className="contact__submit">
                Envoyer
              </button>
              {status === 'error' && (
                <p className="contact__error">Une erreur s'est produite. Veuillez réessayer.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
