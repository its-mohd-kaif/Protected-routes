import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { useAuth } from "../customHooks/AuthProvider";
import { useNavigate } from "react-router-dom";
// Login Component
function Login() {
  // Ref for Input Fields
  const usernameRef = useRef();
  // State For Alert Message
  const [message, setMessage] = useState("");
  // data for holding context state and method
  const data = useAuth();
  let navigate = useNavigate();
  // Login Handler
  const loginHandler = (e) => {
    e.preventDefault();
    // Check Validation
    if (usernameRef.current.value === "") {
      setMessage("Username Field Can Not Be Empty !!");
      usernameRef.current.focus();
    } else if (data.user.username === "") {
      setMessage("Please Create Your Account !!");
      usernameRef.current.focus();
    } else if (usernameRef.current.value !== data.user.username) {
      setMessage("Wrong Username !!");
      usernameRef.current.focus();
    } else {
      data.login(usernameRef.current.value);
      setMessage("");
      usernameRef.current.value = "";
      navigate("/profile");
    }
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Login</h1>
      <Form style={{ width: "50%", margin: "auto" }}>
        {/* Form Display */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            ref={usernameRef}
            type="text"
            placeholder="Enter Username"
          />
        </Form.Group>
        <div className="d-grid">
          <Button onClick={loginHandler} variant="primary" size="lg">
            Login
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

export default Login;
