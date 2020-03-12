import React from "react";
import "./Add.css";
import Card from "../components/Card";
import RedirectButton from "../components/RedirectButton";
import Button from "../components/Button";

export default function Add() {
  return (
    <>
      <Card>
        <form className="add-form">
          <input
            className="add-form_input add-form_input-question"
            type="text"
            placeholder="Enter your question"
          />
          <input
            className="add-form_input add-form_input-answer"
            type="text"
            placeholder="First answer option"
          />
          <input
            className="add-form_input add-form_input-answer"
            type="text"
            placeholder="Second answer option"
          />
          <input
            className="add-form_input add-form_input-answer"
            type="text"
            placeholder="Third answer option"
          />

          <Button type="submit">Create Poll</Button>
        </form>
        <RedirectButton
          name="Go to voting"
          destination="/vote"
        ></RedirectButton>
        <RedirectButton
          name="See results of this poll"
          destination="/result"
        ></RedirectButton>
      </Card>
    </>
  );
}
