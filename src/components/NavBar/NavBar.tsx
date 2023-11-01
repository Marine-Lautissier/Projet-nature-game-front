import { NavLink } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { Menu, Dropdown, Image } from 'semantic-ui-react';

import UserProfileMenu from '../UserProfileMenu/UserProfileMenu';

import logo from '../../assets/logo-site.png';

import './NavBar.scss';

function NavBar() {
  const logoStyle = {
    width: '50px', // Largeur souhaitée
    height: '40px', // Hauteur souhaitée
  };
  return (
    <Menu secondary>
      <Image src={logo} style={logoStyle} />
      <Menu.Item name="Accueil" as={NavLink} to="/" />
      <Menu.Item name="Jeux" as={NavLink} to="/game" />
      <Menu.Item name="Wiki" as={NavLink} to="/wiki" />
      <Menu.Menu position="right">
        <Menu vertical>
          <Dropdown item text="Menu">
            <Dropdown.Menu>
              <Dropdown.Item>Se connecter</Dropdown.Item>
              <Dropdown.Item>S'inscrire</Dropdown.Item>
              <Dropdown.Item>Accéder au profil</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu>
      </Menu.Menu>
    </Menu>







    // <nav className="navbar">
    //   <div className="navbar-logo">
    //     <img src={logo} alt="Logo" />
    //   </div>
    //   <ul className="navbar-links">
    //     <li>
    //       <NavLink to="/">Accueil</NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="/game">Jeux</NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="/wiki">Wiki</NavLink>
    //     </li>
    //   </ul>
    //   <div className="navbar-user-profile-menu">
    //     <UserProfileMenu />
    //   </div>
    // </nav>
  );
}

export default NavBar;
