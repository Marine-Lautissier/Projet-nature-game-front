import { Container, Form, Button, Checkbox, Header } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

function RegisterPage() {
  return (
<div>
  <Header as="h1" textAlign="center">
    Page d'Inscription
  </Header>
  <Form>
    <Form.Field>
      <label htmlFor="pseudoInput">Pseudo</label>
      <input id="pseudoInput" placeholder="Pseudo" />
    </Form.Field>
    <Form.Field>
      <label htmlFor="emailInput">Email</label>
      <input id="emailInput" type="email" placeholder="Email" />
    </Form.Field>
    <Form.Field>
      <label htmlFor="passwordInput">Mot de passe</label>
      <input id="passwordInput" type="password" placeholder="Mot de passe" />
    </Form.Field>
    <Form.Field>
      <Checkbox label="J'accepte les Conditions Générales" />
    </Form.Field>
    <Button type="submit">S'Inscrire</Button>
  </Form>
</div>
  );
}

export default RegisterPage;
