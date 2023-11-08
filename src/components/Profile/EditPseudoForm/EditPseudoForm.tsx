import React from 'react';
import { Button, Form, Header } from 'semantic-ui-react';

function EditPseudoForm() {
  const handleSubmit = (event) => {
    event.preventDefault();

  };

  return (
    <div>
      <Header as="h1" textAlign="center">
        Modifier le Pseudo
      </Header>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label htmlFor="newPseudoInput">Nouveau Pseudo</label>
          <input
            id="newPseudoInput"
            type="text"
            placeholder="Nouveau Pseudo"
          />
        </Form.Field>
        <Button type="submit" color="green">
          Enregistrer
        </Button>
      </Form>
    </div>
  );
}

export default EditPseudoForm;
