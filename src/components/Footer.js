import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <p>&copy; 2024 Ingeniero Juan José Romero Porto. Todos los derechos reservados.</p>
        <div className="footer-links">
          <a href="#contact">Contacto,  </a>
          <a href="#privacy">Política de Privacidad,  </a>
          <a href="#terms">  Términos y Condiciones.</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
