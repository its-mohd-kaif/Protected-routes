import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import { useAuth } from "../customHooks/AuthProvider";
import { useNavigate } from "react-router-dom";
// Signup Component
function Signup() {
  // Ref for Input Fields
  const usernameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();
  // State For Alert Message
  const [message, setMessage] = useState("");
  // data for holding context state and method
  const data = useAuth();
  let navigate = useNavigate();
  // Signup Handler
  const signupHandler = (e) => {
    e.preventDefault();
    // Check Validation
    if (usernameRef.current.value === "") {
      setMessage("Username Field Can Not Be Empty !!");
      usernameRef.current.focus();
    } else if (emailRef.current.value === "") {
      setMessage("Email Field Can Not Be Empty !!");
      emailRef.current.focus();
    } else if (passRef.current.value === "") {
      setMessage("Password Field Can Not Be Empty !!");
      passRef.current.focus();
    } else {
      setMessage("");
      let obj = {
        username: usernameRef.current.value,
        email: emailRef.current.value,
        password: passRef.current.value,
      };
      // Pass Object Into Signup Method
      data.signup(obj);
      navigate("/login");
    }
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Signup</h1>
      {/* Form Display */}
      <Form style={{ width: "50%", margin: "auto" }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            ref={usernameRef}
            type="text"
            placeholder="Enter username..."
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail1">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            autoComplete=""
            ref={passRef}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <div className="d-grid">
          <Button onClick={signupHandler} variant="primary" size="lg">
            Signup
          </Button>
        </div>
        <br></br>
        {/* Alert Message */}
        {message !== "" ? (
          <Alert onClose={() => setMessage("")} variant="danger" dismissible>
            <p>{message}</p>
          </Alert>
        ) : null}
      </Form>
    </div>
  );
}

export default Signup;
