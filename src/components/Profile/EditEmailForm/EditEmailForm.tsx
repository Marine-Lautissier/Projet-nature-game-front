import React from 'react';
import { Button, Form, Header } from 'semantic-ui-react';

function EditEmailForm() {
  const handleSubmit = (event) => {
    event.preventDefault();

  };

  return (
    <div>
      <Header as="h1" textAlign="center">
        Modifier l'Email
      </Header>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label htmlFor="newEmailInput">Nouvel Email</label>
          <input
            id="newEmailInput"
            type="email"
            placeholder="Nouvel Email"
          />
        </Form.Field>
        <Button type="submit" color="green">
          Enregistrer
        </Button>
      </Form>
    </div>
  );
}

export default EditEmailForm;