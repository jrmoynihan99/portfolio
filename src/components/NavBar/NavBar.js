import React, { useState } from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <ul className="nav-list">
        <li style={{ marginLeft: "55%" }}>Home</li>
        <li>About Me</li>
        <li>Skills</li>
        <li>Accolades</li>
      </ul>
    </nav>
  );
}

export default NavBar;
