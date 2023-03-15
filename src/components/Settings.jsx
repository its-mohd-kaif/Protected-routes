import React, { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import { createSearchParams, useNavigate } from "react-router-dom";

function Settings() {
  // Ref For Input Fields
  const setting1Ref = useRef();
  const setting2Ref = useRef();
  // State For Alert Message
  const [message, setMessage] = useState("");
  let navigate = useNavigate();
  useEffect(() => {
    setting1Ref.current.focus();
  }, []);
  const settingHandler = (e) => {
    e.preventDefault();
    // Check Validation
    if (setting1Ref.current.value === "") {
      setMessage("Setting 1 Field Can Not Be Empty !!");
      setting1Ref.current.focus();
    } else if (setting2Ref.current.value === "") {
      setMessage("Setting 2 Field Can Not Be Empty !!");
      setting2Ref.current.focus();
    } else {
      // Navigate With Search Params
      navigate({
        pathname: "/settingDisplay",
        search: createSearchParams({
          setting1: setting1Ref.current.value,
          setting2: setting2Ref.current.value,
        }).toString(),
      });
    }
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Settings</h1>
      <hr></hr>
      <Form style={{ width: "50%", margin: "auto" }}>
        {/* Form Display */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Setting 1</Form.Label>
          <Form.Control
            ref={setting1Ref}
            type="text"
            placeholder="Enter setting ..."
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail1">
          <Form.Label>Setting 2</Form.Label>
          <Form.Control
            ref={setting2Ref}
            type="text"
            placeholder="Enter setting ..."
          />
        </Form.Group>
        <div className="d-grid">
          <Button onClick={settingHandler} variant="primary" size="lg">
            Set Setting
          </Button>
        </div>
        <br></br>
        {message !== "" ? (
          <Alert onClose={() => setMessage("")} variant="danger" dismissible>
            <p>{message}</p>
          </Alert>
        ) : null}
      </Form>
    </div>
  );
}

export default Settings;
