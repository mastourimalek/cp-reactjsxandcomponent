import React from "react";
import { Navbar } from "react-bootstrap";
import "./App.css";
import Address from "./Component/Profile/Address";
import FullName from "./Component/Profile/FullName";

import ProfilePhoto from "./Component/Profile/ProfilePhoto";

function App() {
  return (
    <div className="App">
      <ProfilePhoto />
      <FullName />
      <Address />
    </div>
  );
}

export default App;
