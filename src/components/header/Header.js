import React from "react";
import "./Header.css";
import Chimera from "./chimera.svg";
import ChimeraFlipped from "./chimeraflipped.svg";

function Header() {
  return (
    <header className="header">
      <img className="logo logoflipped" src={ChimeraFlipped} alt="logo"></img>
      <h1 className="title">The Questing Beast</h1>
      <img className="logo" src={Chimera} alt="logo"></img>
    </header>
  );
}

export default Header;
