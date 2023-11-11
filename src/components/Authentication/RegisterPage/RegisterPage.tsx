import React, { ChangeEvent, FormEvent } from 'react';
import { Button, Form, Header, Container, Checkbox } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import { fetchRegisterUser } from '../../../store/thunks/registerUser';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { actionRegister, changeInputRegisterValue } from '../../../store/actions/userActions';
import { Navigate, useNavigate } from 'react-router-dom';

function RegisterPage() {
  const dispatch = useAppDispatch();
  const email = useAppSelector((state) => state.authReducer.email);
  const password = useAppSelector((state) => state.authReducer.password);
  const pseudo = useAppSelector((state) => state.authReducer.pseudo);
  let loading = useAppSelector((state) => state.authReducer.loading);

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    dispatch(changeInputRegisterValue({
      email: newEmail, password, pseudo
    }));
  };
  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value;
    dispatch(changeInputRegisterValue({
      email, password: newPassword, pseudo
    }));
  };
  const handlePseudoChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newPseudo = event.target.value;
    dispatch(changeInputRegisterValue({
      email, password, pseudo: newPseudo,
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(fetchRegisterUser())
    if (loading = true) {
      navigate('/');
    }
  }

  return (
    <div>
      <Container text style={{ maxWidth: '650px', margin: '0 auto' }}>
        <Header as="h1" textAlign="center">
          Page d'Inscription
        </Header>
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <label htmlFor="pseudoInput">Pseudo</label>
            <input id="pseudoInput" placeholder="Pseudo" value={pseudo}
              onChange={handlePseudoChange} />
          </Form.Field>
          <Form.Field>
            <label htmlFor="emailInput">Email</label>
            <input id="emailInput" type="email" placeholder="Email" value={email}
              onChange={handleEmailChange} />
          </Form.Field>
          <Form.Field>
            <label htmlFor="passwordInput">Mot de passe</label>
            <input id="passwordInput" type="password" placeholder="Mot de passe" value={password}
              onChange={handlePasswordChange} />
          </Form.Field>
          <Form.Field>
            <Checkbox label="J'accepte les Conditions Générales" />
          </Form.Field>
          <Button onClick={() => { dispatch(actionRegister()) }} type="submit" color="green">S'Inscrire</Button>
        </Form>
      </Container>
    </div>
  );
}

export default RegisterPage;
