import React from "react";
import Card from "../components/Card";
import "../components/Buttons.css";
import RedirectButton from "../components/RedirectButton";

export default function Home() {
  return (
    <Card>
      <div className="buttonContainer">
        <RedirectButton
          className="navButton"
          name="Create your own poll"
          destination="/add"
        ></RedirectButton>
        <RedirectButton
          className="navButton"
          name="Vote in one of our polls"
          destination="/vote"
        ></RedirectButton>
        <RedirectButton
          className="navButton"
          name="See the result of the poll"
          destination="/result"
        ></RedirectButton>
      </div>
    </Card>
  );
}
