// eslint-disable-next-line
import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function BootstrapLoginForm() {
  return (
    <div className="login-page">
      <Form>
        <h2 style={{ marginBottom: "5%" }}>Login Page</h2>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Email or phone number" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

function LoginForm() {
  return (
    <div>
      <BootstrapLoginForm />
    </div>
  );
}

export default LoginForm;
