import { Link, NavLink } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { Menu, Dropdown, Image } from 'semantic-ui-react';
import logo from '../../assets/logo-site.png';
import './NavBar.scss';
import React from 'react';

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
              <Dropdown.Item as={Link} to="/connexion">Se connecter</Dropdown.Item>
              <Dropdown.Item as={Link} to="/inscription">S'inscrire</Dropdown.Item>
              <Dropdown.Item as={Link} to="/profil">Accéder au profil</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu>
      </Menu.Menu>
    </Menu>
  );
}

export default NavBar;
