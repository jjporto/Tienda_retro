import React from 'react';
import './Contact.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contáctanos</h2>
      <p className="contact-description">
        Conéctate con nosotros a través de nuestras redes sociales y mantente al día con las últimas novedades de El Camerino.
      </p>
        <div className="social-icons">
        <a href="https://www.facebook.com/ElCamerino" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.instagram.com/camerino_jersey/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
          <i className="fab fa-instagram"></i>
        </a>
  </div>
    </div>
  );
};

export default Contact;
