import React from "react";
import "./Add.css";
import Card from "../components/Card";
import RedirectButton from "../components/RedirectButton";
import Button from "../components/Button";

export default function Add() {
  const [question, setQuestion] = React.useState("");
  const [optionOne, setOptionOne] = React.useState("");
  const [optionTwo, setOptionTwo] = React.useState("");
  const [optionThree, setOptionThree] = React.useState("");

  const poll = {
    question: question,
    optionOne: optionOne,
    optionTwo: optionTwo,
    optionThree: optionThree
  };

  function handleSubmit(event) {
    event.preventDefault();
    alert(JSON.stringify(poll));
  }
  return (
    <>
      <Card>
        <form className="add-form" onSubmit={handleSubmit}>
          <input
            className="add-form_input add-form_input-question"
            type="text"
            placeholder="Enter your question"
            value={question}
            onChange={event => {
              setQuestion(event.target.value);
            }}
          />
          <input
            className="add-form_input add-form_input-answer"
            type="text"
            placeholder="First answer option"
            value={optionOne}
            onChange={event => {
              setOptionOne(event.target.value);
            }}
          />
          <input
            className="add-form_input add-form_input-answer"
            type="text"
            placeholder="Second answer option"
            value={optionTwo}
            onChange={event => {
              setOptionTwo(event.target.value);
            }}
          />
          <input
            className="add-form_input add-form_input-answer"
            type="text"
            placeholder="Third answer option"
            value={optionThree}
            onChange={event => {
              setOptionThree(event.target.value);
            }}
          />

          <Button type="submit">
            <strong>Create Poll</strong>
          </Button>
        </form>
        <div className="redirect-container">
          <RedirectButton
            name="Go to voting"
            destination="/vote"
          ></RedirectButton>
          <RedirectButton
            name="See results of this poll"
            destination="/result"
          ></RedirectButton>
        </div>
      </Card>
    </>
  );
}
