import { Button, Form, Header } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import { fetchConnectUser } from '../../../store/thunks/connectUser';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { actionLogin, changeInputValue } from '../../../store/actions/userActions';
import { useNavigate } from 'react-router-dom';
import { ChangeEvent, FormEvent } from 'react';

function ConnectPage() {
  const dispatch = useAppDispatch();
  const email = useAppSelector((state) => state.authReducer.email);
  const password = useAppSelector((state) => state.authReducer.password);
  let loading = useAppSelector((state) => state.authReducer.loading);

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    dispatch(changeInputValue({
      email: newEmail, password,
    }));
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value;
    dispatch(changeInputValue({
      email, password: newPassword,
    }));
  };
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(fetchConnectUser()) 
    if (loading = true){
      navigate('/');
  }
}

  return (
    <div>
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
        <Button type="submit" onClick={() => {dispatch(actionLogin())}}>Se Connecter</Button>
      </Form>
    </div>
  );
}

export default ConnectPage;
