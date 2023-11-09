import React, { ChangeEvent, FormEvent } from 'react';
import { Button, Form, Header, Container, Checkbox } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import { fetchConnectUser } from '../../../store/thunks/connectUser';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { actionLogin, changeInputValue } from '../../../store/actions/userActions';
import { useNavigate } from 'react-router-dom';

function ConnectPage() {
  const dispatch = useAppDispatch();
  const email = useAppSelector((state) => state.authReducer.email);
  const password = useAppSelector((state) => state.authReducer.password);
  const loading = useAppSelector((state) => state.authReducer.loading);

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    dispatch(changeInputValue({
      email: newEmail,
      password,
    }));
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value;
    dispatch(changeInputValue({
      email,
      password: newPassword,
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(fetchConnectUser());
    if (loading) {
      navigate('/');
    }
  }

  return (
    <div>
      <Container text style={{ maxWidth: '650px', margin: '0 auto' }}>
        <Header as="h1" textAlign="center">
          Page de Connexion
        </Header>
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <label htmlFor="emailInput">Email</label>
            <input
              id="emailInput"
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email"
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="passwordInput">Mot de passe</label>
            <input
              id="passwordInput"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Mot de passe"
            />
          </Form.Field>
          <Button type="submit" color="green" onClick={() => { dispatch(actionLogin()) }}>Se Connecter</Button>
        </Form>
      </Container>
    </div>
  );
}

export default ConnectPage;
