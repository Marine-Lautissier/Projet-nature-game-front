import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Button, Form, Header, Select } from 'semantic-ui-react';
import instanceAxios from '../../../utils/axios';


const subjects = ['Suggestion', 'Question', 'Enquête RGPD', 'Aide technique', 'Autre'];

const Contact = () => {
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    email: '',
    subject: 'Suggestion',
    message: '',
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      // Effectue la requête POST à l'API
      const response = await instanceAxios.post('/contact', formData);

      // Logique de traitement des données de réponse si nécessaire
      console.log(response.data);
    } catch (error) {
      // Gére les erreurs ici
      console.error('Une erreur s\'est produite lors de l\'envoi du formulaire', error);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <Header as="h1" textAlign="center">
        Formulaire de Contact
      </Header>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            label="Prénom"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <Form.Input
            label="Nom"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Input
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <Form.Field
          control={Select}
          label="Sujet"
          name="subject"
          options={subjects.map((subject) => ({
            text: subject,
            value: subject,
          }))}
          value={formData.subject}
          onChange={(_, data) =>
           setFormData({ ...formData, subject: data.value as string })
          }
        />
        <Form.TextArea
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        <Button type="submit" color="green">
          Envoyer
        </Button>
      </Form>
    </div>
  );
};

export default Contact;
