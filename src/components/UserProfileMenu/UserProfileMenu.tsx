import './UserProfileMenu.scss';

import React from 'react';

function UserProfileMenu() {
  return (
    <div className="user-profile-menu">
      <div className="user-profile">
        {/* Contenu du profil de l'utilisateur (nom, avatar, etc.) */}
      </div>
      <div>
      <select>
        <option>Se connecter</option>
        <option>S'inscrire</option>
        <option>Accéder au profil</option>
      </select>
      <button>Se déconnecter</button>
    </div>
    </div>
  );
}

export default UserProfileMenu;
