import { Form, Button, Checkbox } from 'semantic-ui-react';

function RegisterPage() {
  return (
    <div>
      <h1>RegisterPage</h1>
      <Form>
        <Form.Field>
          <label htmlFor="firstNameInput">First Name</label>
          <input id="firstNameInput" placeholder="First Name" />
        </Form.Field>
        <Form.Field>
          <label htmlFor="lastNameInput">Last Name</label>
          <input id="lastNameInput" placeholder="Last Name" />
        </Form.Field>
        <Form.Field>
          <label htmlFor="emailInput">Email</label>
          <input id="emailInput" type="email" placeholder="Email" />
        </Form.Field>
        <Form.Field>
          <label htmlFor="passwordInput">Password</label>
          <input id="passwordInput" type="password" placeholder="Password" />
        </Form.Field>
        <Form.Field>
          <Checkbox label="I agree to the Terms and Conditions" />
        </Form.Field>
        <Button type="submit">Register</Button>
      </Form>
    </div>
  );
}

export default RegisterPage;
