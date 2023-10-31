import { NavLink } from 'react-router-dom';

import './Footer.scss';
import React from 'react';

function Footer() {
  return (
    <nav className="footer">
      <ul className="footer-links">
        <li>
          <NavLink to="/conditions-utilisations">Conditions d'utilisations</NavLink>
        </li>
        <li>
          <NavLink to="/mentions-legales">Mentions Légales</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Footer;