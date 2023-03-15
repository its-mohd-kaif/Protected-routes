import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { useAuth } from "../customHooks/AuthProvider";
// Setting Display Component
function SettingDisplay() {
  // Hold Search Params Data
  let [params] = useSearchParams();
  const auth = useAuth();
  let navigate = useNavigate();
  //   Logout Handler
  const logoutHandler = () => {
    auth.logout();
    navigate("/");
  };
  return (
    <div>
      <h1 className="text-center">Setting Display</h1>
      <hr></hr>
      <Table style={{ width: "60%", margin: "auto" }} striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Setting 1</th>
            <th>Setting 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{params.get("setting1")}</td>
            <td>{params.get("setting2")}</td>
          </tr>
        </tbody>
      </Table>
      <br></br>
      <div style={{ margin: "auto" }} className="d-grid col-6 gap-2">
        <Button onClick={logoutHandler} variant="primary" size="lg">
          Logout
        </Button>
      </div>
    </div>
  );
}

export default SettingDisplay;
