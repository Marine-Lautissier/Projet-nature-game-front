import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Button, Form, Header, Select } from 'semantic-ui-react';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

const subjects = ['Suggestion', 'Question', 'Enquête RGPD', 'Autre'];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    subject: 'Suggestion', // Valeur par défaut pour le sujet
    message: '',
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Effectuez ici la logique d'envoi du formulaire de contact
    console.log(formData);
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
