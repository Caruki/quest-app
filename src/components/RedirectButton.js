import React from "react";
import "./Buttons.css";
import { useHistory } from "react-router-dom";

export default function RedirectButton(props) {
  let history = useHistory();

  function handleClick(destination) {
    history.push(destination);
  }

  return (
    <button
      type="button"
      className={props.className || "redirectButton"}
      onClick={() => handleClick(props.destination)}
    >
      {props.name}
    </button>
  );
}
