import React from "react";
import "./Buttons.css";
import { useHistory } from "react-router-dom";

export default function RedirectButton(props) {
  let history = useHistory();

  function handleClick(destination) {
    history.push(destination);
  }
  function addClass(newClassName) {
    if (newClassName) {
      return newClassName;
    } else {
      return "redirectButton";
    }
  }

  return (
    <button
      type="button"
      className={addClass(props.className)}
      onClick={() => handleClick(props.destination)}
    >
      {props.name}
    </button>
  );
}
