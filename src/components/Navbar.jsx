import React from "react";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import { Link, Outlet } from "react-router-dom";
// Navbar Component
function NavbarComponent() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Link to={"/"}>
          <Button className="ms-5" variant="success">
            Home
          </Button>
        </Link>
        <Link to={"/signup"}>
          <Button className="ms-5" variant="success">
            Signup
          </Button>
        </Link>
        <Link to={"/login"}>
          <Button className="ms-5" variant="success">
            Login
          </Button>
        </Link>
      </Navbar>
      <Outlet />
    </div>
  );
}

export default NavbarComponent;
