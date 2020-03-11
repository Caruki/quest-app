import React from "react";
import "./Header.css";
import Chimera from "./chimera1.svg";

function Header() {
  return (
    <header className="header">
      <img className="logo fliphorizontally" src={Chimera} alt="logo"></img>
      <h1 className="title">The Questing Beast</h1>
      <img className="logo" src={Chimera} alt="logo"></img>
    </header>
  );
}

export default Header;
