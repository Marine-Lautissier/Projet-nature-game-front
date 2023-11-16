import React, { useState } from 'react';
import { Segment, Header, Button, Menu, Image } from 'semantic-ui-react';
import EditAvatarForm from '../EditAvatarForm/EditAvatarForm';
import EditPasswordForm from '../EditPasswordForm/EditPasswordForm';
import EditEmailForm from '../EditEmailForm/EditEmailForm';
import EditPseudoForm from '../EditPseudoForm/EditPseudoForm';
import { useAppSelector } from '../../../hooks/redux';

function ProfilePage() {

  // Récupère les données de l'utilisateur depuis le state Redux
  const logged = useAppSelector((state) => state.authReducer.logged);
  const pseudo = useAppSelector((state) => state.authReducer.pseudo);
  const username = useAppSelector((state) => state.authReducer.email);
  const avatar = useAppSelector((state) => state.authReducer.avatar);
  const quizzScore = useAppSelector((state) => state.authReducer.quizzScore);

  // État local pour gérer quel formulaire est actuellement affiché
  const [activeForm, setActiveForm] = useState<string | null>(null);

  // Fonctions pour afficher les différents formulaires de modification
  const displayAvatarForm = () => {
    setActiveForm('avatar');
  };

  const displayPasswordForm = () => {
    setActiveForm('password');
  };

  const displayEmailForm = () => {
    setActiveForm('email');
  };

  const displayPseudoForm = () => {
    setActiveForm('pseudo');
  };

  return (
    <div style={{ maxWidth: '650px', margin: '0 auto' }}>
      <Header as="h1" textAlign="center">Profile Page</Header>

      {/* Si l'utilisateur est connecté, affiche les informations du profil */}
      {logged && (
        <>
          {/* Segment pour l'avatar avec bouton de modification */}
          <Segment>
            <Image src={avatar} size="tiny" circular />
            <div style={{ overflow: 'hidden' }}>
              <Button color="green" onClick={displayAvatarForm} style={{ float: 'right' }}>
                Modifier Avatar
              </Button>
            </div>
            {activeForm === 'avatar' && <EditAvatarForm />}
          </Segment>

          {/* Segment pour le mot de passe avec bouton de modification */}
          <Segment>
            <div style={{ overflow: 'hidden' }}>
              <Button color="green" onClick={displayPasswordForm} style={{ float: 'right' }}>
                Modifier Mot de passe
              </Button>
            </div>
            {activeForm === 'password' && <EditPasswordForm />}
          </Segment>

          {/* Segment pour l'e-mail avec bouton de modification */}
          <Segment>
            <p>{username}</p>
            <div style={{ overflow: 'hidden' }}>
              <Button color="green" onClick={displayEmailForm} style={{ float: 'right' }}>
                Modifier Email
              </Button>
            </div>
            {activeForm === 'email' && <EditEmailForm />}
          </Segment>

          {/* Segment pour le pseudo avec bouton de modification */}
          <Segment>
            <p>{pseudo}</p>
            <div style={{ overflow: 'hidden' }}>
              <Button color="green" onClick={displayPseudoForm} style={{ float: 'right' }}>
                Modifier Pseudo
              </Button>
            </div>
            {activeForm === 'pseudo' && <EditPseudoForm />}
          </Segment>

          {/* Segment pour afficher le score du quizz - en cours de construction... */}
          {/* <Segment>
            <Header >Score du Quizz: {quizzScore} </Header>
          </Segment> */}
        </>
      )}
    </div>
  );
}

export default ProfilePage;
