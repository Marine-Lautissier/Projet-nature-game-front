import React from 'react';
import { Button, Form, Header } from 'semantic-ui-react';

function EditAvatarForm() {
  const handleSubmit = (event) => {
    event.preventDefault();

  };

  return (
    <div>
      <Header as="h1" textAlign="center">
        Modifier l'Avatar
      </Header>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label htmlFor="avatarInput">Sélectionnez une nouvelle image</label>
          <input
            id="avatarInput"
            type="file"
            accept="image/*"
          />
        </Form.Field>
        <Button type="submit" color="green">
          Enregistrer
        </Button>
      </Form>
    </div>
  );
}

export default EditAvatarForm;

