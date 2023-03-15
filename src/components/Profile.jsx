import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useAuth } from "../customHooks/AuthProvider";
import { useNavigate } from "react-router-dom";
import profile from "../assets/profile.png";
// Profile Component
function Profile() {
  // user for holding context state and method
  const user = useAuth();
  let navigate = useNavigate();
  // Logout Handler
  const logoutHandler = () => {
    user.logout();
    navigate("/");
  };
  // Navigate On Setting Page
  const settingHandler = () => {
    navigate("/settings");
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Profile Page</h1>
      <hr></hr>
      <Card style={{ width: "28rem", margin: "auto", padding: "2em" }}>
        <Card.Img style={{ width: "100%" }} variant="top" src={profile} />
        <Card.Body>
          <Card.Title className="text-center">
            Welcome,&nbsp;
            {user.currentUser}
          </Card.Title>
          <br></br>
          <div className="d-flex justify-content-around">
            <Button onClick={logoutHandler} variant="primary">
              Logout
            </Button>
            <Button onClick={settingHandler} variant="warning">
              Setting
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Profile;
