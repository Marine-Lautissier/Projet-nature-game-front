import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, Dropdown, Image } from 'semantic-ui-react';
import logo from '../../assets/logo-site.png';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { logOut } from '../../store/actions/userActions';

function NavBar() {
  const dispatch = useAppDispatch();
  const logged = useAppSelector((state) => state.authReducer.logged);
  const pseudo = useAppSelector((state) => state.authReducer.pseudo);

  const logoStyle = {
    width: '50px',
    height: '50px',
  };

  const handleLogout = () => {
    const token = localStorage.clear();
    dispatch(logOut(token));
  };

  return (
    <Menu>
      <Menu.Item>
        <Image src={logo} style={logoStyle} />
      </Menu.Item>
      <Menu.Item as={NavLink} to="/" name="Accueil" />
      <Menu.Item as={NavLink} to="/jeux" name="Jeux" />
      <Menu.Item as={NavLink} to="/wiki" name="Wiki" />
      <Menu.Menu position="right">
        {logged && (
          <Menu.Item name={pseudo} style={{ color: 'green' }} />
        )}
        <Dropdown text="Menu" pointing className="link item">
          <Dropdown.Menu>
            {!logged && (
              <Dropdown.Item as={Link} to="/connexion">
                Se connecter
              </Dropdown.Item>
            )}
            {logged && (
              <Dropdown.Item onClick={handleLogout}>Se Déconnecter</Dropdown.Item>
            )}
            <Dropdown.Item as={Link} to="/inscription">
              S'inscrire
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/profil">
              Accéder au profil
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    </Menu>
  );
}

export default NavBar;
