import React from 'react';
import Card from '../components/Card';
import RedirectButton from '../components/RedirectButton';
import Button from '../components/Button';
import { Form, FormInputQuestion, FormInputAnswer } from '../components/Form';
import styled from '@emotion/styled';
import { postPoll } from '../api/polls';

const RedirectContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  width: 90%;
`;

export default function Add() {
  const [question, setQuestion] = React.useState('');
  const [optionOne, setOptionOne] = React.useState('');
  const [optionTwo, setOptionTwo] = React.useState('');
  const [optionThree, setOptionThree] = React.useState('');
  const [createdPoll, setCreatedPoll] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    const poll = {
      question: question,
      optionOne: optionOne,
      optionTwo: optionTwo,
      optionThree: optionThree,
      votes: []
    };

    const createdPoll = await postPoll(poll);
    setCreatedPoll(createdPoll);
    // alert(`A new poll with the ID ${createdPoll.id} was created!`);
  }

  return (
    <>
      <Card>
        <Form onSubmit={handleSubmit}>
          <FormInputQuestion
            type="text"
            placeholder="Enter your question"
            value={question}
            onChange={event => {
              setQuestion(event.target.value);
            }}
          />
          <FormInputAnswer
            type="text"
            placeholder="First answer option"
            value={optionOne}
            onChange={event => {
              setOptionOne(event.target.value);
            }}
          />
          <FormInputAnswer
            type="text"
            placeholder="Second answer option"
            value={optionTwo}
            onChange={event => {
              setOptionTwo(event.target.value);
            }}
          />
          <FormInputAnswer
            type="text"
            placeholder="Third answer option"
            value={optionThree}
            onChange={event => {
              setOptionThree(event.target.value);
            }}
          />

          <Button variant="submit" disabled={isLoading}>
            <strong>Create Poll</strong>
          </Button>
        </Form>
        {createdPoll && (
          <RedirectContainer>
            <RedirectButton
              name="Go to voting"
              destination={`/polls/${createdPoll.id}/vote`}
            ></RedirectButton>
            <RedirectButton
              name="See results of this poll"
              destination={`/polls/${createdPoll.id}/result`}
            ></RedirectButton>
          </RedirectContainer>
        )}
      </Card>
    </>
  );
}
