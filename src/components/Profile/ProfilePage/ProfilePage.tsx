import React, { useState } from 'react';
import { Segment, Header, Button, Menu ,Image} from 'semantic-ui-react';
import QuizScore from '../QuizScore/QuizScore';
import EditAvatarForm from '../EditAvatarForm/EditAvatarForm';
import EditPasswordForm from '../EditPasswordForm/EditPasswordForm';
import EditEmailForm from '../EditEmailForm/EditEmailForm';
import EditPseudoForm from '../EditPseudoForm/EditPseudoForm';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';

function ProfilePage() {

  const logged = useAppSelector((state) => state.authReducer.logged);
  const pseudo = useAppSelector((state) => state.authReducer.pseudo);
  const username = useAppSelector((state) => state.authReducer.email);
  const avatar = useAppSelector((state) => state.authReducer.avatar);
  console.log(avatar);

  const [activeForm, setActiveForm] = useState<string | null>(null);

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
      {logged && (
          <>
          <Segment>
          <Image src={avatar} size="medium" circular />
          <div style={{ overflow: 'hidden' }}>
            <Button color="green" onClick={displayAvatarForm} style={{ float: 'right' }}>
              Modifier Avatar
            </Button>
          </div>
          {activeForm === 'avatar' && <EditAvatarForm />}
        </Segment>
        <Segment>
            <div style={{ overflow: 'hidden' }}>
              <Button color="green" onClick={displayPasswordForm} style={{ float: 'right' }}>
                Modifier Mot de passe
              </Button>
            </div>
            {activeForm === 'password' && <EditPasswordForm />}
          </Segment>
          <Segment>
          <p>{username}</p>
            <div style={{ overflow: 'hidden' }}>
              <Button color="green" onClick={displayEmailForm} style={{ float: 'right' }}>
                Modifier Email
              </Button>
            </div>
            {activeForm === 'email' && <EditEmailForm />}
          </Segment>
          <Segment>
          <p>{pseudo}</p>
            <div style={{ overflow: 'hidden' }}>
              <Button color="green" onClick={displayPseudoForm} style={{ float: 'right' }}>
                Modifier Pseudo
              </Button>
            </div>
            {activeForm === 'pseudo' && <EditPseudoForm />}
          </Segment>
          <Segment>
            <Header as="h3" style={{ float: 'right' }}>Score du Quizz {score} </Header>
            
          </Segment>
          </>
      )}
    </div>
  );
}

export default ProfilePage;
