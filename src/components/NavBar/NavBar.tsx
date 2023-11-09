import { Link, NavLink } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { Menu, Dropdown, Image } from 'semantic-ui-react';
import logo from '../../assets/logo-site.png';
import './NavBar.scss';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { logOut } from '../../store/actions/userActions';

function NavBar() {
  const dispatch = useAppDispatch();
  const logged = useAppSelector((state) => state.authReducer.logged);
  const pseudo = useAppSelector((state) => state.authReducer.pseudo);
  console.log(pseudo);

  const logoStyle = {
    width: '50px', // Largeur souhaitée
    height: '40px', // Hauteur souhaitée
  };

  const handleLogout = () => {
    dispatch(logOut());
  }


  return (
    <Menu>
      <Image src={logo} style={logoStyle} />
      <Menu.Item name="Accueil" as={NavLink} to="/"></Menu.Item>
      <Menu.Item name="Jeux" as={NavLink} to="/jeux"></Menu.Item>
      <Menu.Item name="Wiki" as={NavLink} to="/wiki"></Menu.Item>
      {!logged && (
        <Menu.Item name={`${pseudo}`} />
      )}
      <Dropdown text="Menu" pointing className="link item right">
        <Dropdown.Menu>
          {!logged && (
            <Dropdown.Item as={Link} to="/connexion">Se connecter</Dropdown.Item>
          )}
          {logged && (
            <Dropdown.Item onClick={handleLogout}>Se Déconnecter</Dropdown.Item>
          )}
          <Dropdown.Item as={Link} to="/inscription">S'inscrire</Dropdown.Item>
          <Dropdown.Item as={Link} to="/profil">Accéder au profil</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu>
  );
}

export default NavBar;

