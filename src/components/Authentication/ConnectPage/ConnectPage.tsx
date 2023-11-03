import { Button, Checkbox, Form } from 'semantic-ui-react'

function ConnectPage() {
  return (
    <div>
      <h1>Page de Connexion</h1>
      <Form>
        <Form.Field>
          <label htmlFor="firstNameInput">First Name</label>
          <input id="firstNameInput" placeholder="First Name" />
        </Form.Field>
        <Form.Field>
          <label htmlFor="lastNameInput">Last Name</label>
          <input placeholder="Last Name" />
        </Form.Field>
        <Form.Field>
          <Checkbox label="I agree to the Terms and Conditions" />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default ConnectPage;
