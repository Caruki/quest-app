import React from "react";
import "../components/Buttons.css";

export default function Button(props) {
  // let returnElement = undefined

  // if (props.type === "submit") {
  //     returnElement = <input type="submit"></input>
  // } else {
  //     returnElement= <button className={props.className || "button"} {...props} />;
  // }

  return <button className={props.className || "button"} {...props} />;
}
