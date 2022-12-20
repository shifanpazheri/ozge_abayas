// eslint-disable-next-line
import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function emailChosen() {
  document.getElementById("email-input").style.display = "block";
  document.getElementById("phone-input").style.display = "none";
  document.getElementById("email-button").style.backgroundColor = "#9FA6B2";
  document.getElementById("phone-button").style.backgroundColor = "#fff";
}

function phoneChosen() {
  document.getElementById("phone-input").style.display = "block";
  document.getElementById("email-input").style.display = "none";
  document.getElementById("phone-button").style.backgroundColor = "#9FA6B2";
  document.getElementById("email-button").style.backgroundColor = "#fff";
}

function BootstrapLoginForm() {
  return (
    <div className="login-page">
      <Form>
        <h2 style={{ marginBottom: "5%", color: "#9FA6B2" }}>Login Page</h2>
        <Button
          id="email-button"
          variant="outline-secondary"
          className="choose-mode"
          onClick={emailChosen}
        >
          Email
        </Button>
        <Button
          id="phone-button"
          variant="outline-secondary"
          className="choose-mode"
          onClick={phoneChosen}
        >
          Phone
        </Button>
        <div id="email-input">
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Email" />
          </Form.Group>
        </div>
        <div id="phone-input">
          <InputGroup className="mb-3">
            <InputGroup.Text>+91</InputGroup.Text>
            <Form.Control placeholder="Phone Number" />
          </InputGroup>
        </div>
        <Button variant="outline-secondary" type="submit">
          Login with OTP
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
