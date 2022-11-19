import React from "react";
import { Navbar } from "react-bootstrap";
import "./App.css";
import Address from "./Component/Profile/Address";
import FullName from "./Component/Profile/FullName";
import ProfilePhoto from "./Component/Profile/ProfilePhoto";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      {/* Navbar part */}
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt="aaa"
                src="https://cdn-icons-png.flaticon.com/512/2/2144.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              Malek Profile
            </Navbar.Brand>
          </Container>
        </Navbar>
      </div>
      {/* Body part */}
      <div className="first">
        <ProfilePhoto />
        <div className="second">
          <FullName />
          <Address />
        </div>
      </div>
    </div>
  );
}

export default App;
