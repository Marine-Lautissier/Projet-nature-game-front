import React from 'react';
import { Button, Form, Header } from 'semantic-ui-react';

function EditPasswordForm() {
  const handleSubmit = (event) => {
    event.preventDefault();

    // Ici, vous pouvez envoyer une requête API pour mettre à jour le mot de passe
    // Assurez-vous de gérer les erreurs, le succès, etc.
  };

  return (
    <div>
      <Header as="h1" textAlign="center">
        Modifier le Mot de passe
      </Header>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label htmlFor="currentPasswordInput">Mot de passe actuel</label>
          <input
            id="currentPasswordInput"
            type="password"
            placeholder="Mot de passe actuel"
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="newPasswordInput">Nouveau Mot de passe</label>
          <input
            id="newPasswordInput"
            type="password"
            placeholder="Nouveau Mot de passe"
          />
        </Form.Field>
        <Button type="submit" color="green">
          Enregistrer
        </Button>
      </Form>
    </div>
  );
}

export default EditPasswordForm;

