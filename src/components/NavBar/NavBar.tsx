import './NavBar.scss';

import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar">
      {/* <div className="navbar-logo">
        <img src="logo.png" alt="Logo" />
      </div> */}
      <ul className="navbar-links">
        <li>
          <NavLink to="/">Accueil</NavLink>
        </li>
        <li>
          <NavLink to="/game">Jeux</NavLink>
        </li>
        <li>
          <NavLink to="/wiki">Wiki</NavLink>
        </li>
      </ul>
      {/* <div className="navbar-user-dropdown">
        <UserProfileMenu />
      </div> */}
    </nav>
  );
}

export default NavBar;
