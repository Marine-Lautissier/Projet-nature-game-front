import React, { useState } from 'react';
import { Segment, Header, Button } from 'semantic-ui-react';
import QuizScore from '../QuizScore/QuizScore';
import EditAvatarForm from '../EditAvatarForm/EditAvatarForm';
import EditPasswordForm from '../EditPasswordForm/EditPasswordForm';
import EditEmailForm from '../EditEmailForm/EditEmailForm';
import EditPseudoForm from '../EditPseudoForm/EditPseudoForm';

function ProfilePage() {
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
    <div>
      <Header as="h1">Profile Page</Header>
      <Segment>
        <Button color="blue" onClick={displayAvatarForm}>
          Modifier Avatar
        </Button>
        {activeForm === 'avatar' && <EditAvatarForm />}
      </Segment>
      <Segment>
        <Button color="blue" onClick={displayPasswordForm}>
          Modifier Mot de passe
        </Button>
        {activeForm === 'password' && <EditPasswordForm />}
      </Segment>
      <Segment>
        <Button color="blue" onClick={displayEmailForm}>
          Modifier Email
        </Button>
        {activeForm === 'email' && <EditEmailForm />}
      </Segment>
      <Segment>
        <Button color="blue" onClick={displayPseudoForm}>
          Modifier Pseudo
        </Button>
        {activeForm === 'pseudo' && <EditPseudoForm />}
      </Segment>
      <Segment>
        <Header as="h3">Score du Quizz</Header>
        <QuizScore score={100} />
      </Segment>
    </div>
  );
}


export default ProfilePage;
