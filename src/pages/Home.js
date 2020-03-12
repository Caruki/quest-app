import React from "react";
import Card from "../components/Card";
import "../components/Buttons.css";
import RedirectButton from "../components/RedirectButton";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Card>
        <h1 className="heading">Welcome to the Questing Beast</h1>
        <div className="textContainer">
          <div className="welcome">
            <p>
              Here you can become your very own questing beast by making polls
              or answering other's questions.{" "}
            </p>
            <p>Please choose one:</p>
          </div>
        </div>
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
            name="See the results of your poll"
            destination="/result"
          ></RedirectButton>
        </div>
      </Card>
    </>
  );
}
