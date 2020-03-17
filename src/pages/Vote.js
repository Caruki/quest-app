import React from 'react';
import Card from '../components/Card';
import RedirectButton from '../components/RedirectButton';

export default function Vote() {
  return (
    <Card>
      <Form onSubmit={handleSubmit}>
        <h2>{poll?.question}</h2>
        <Label>
          <input
            type="radio"
            name="answer"
            value="optionOne"
            checked={answer === 'optionOne'}
            onChange={event => setAnswer(event.target.value)}
          />
          {poll?.optionOne}
        </Label>
        <Label>
          <input
            type="radio"
            name="answer"
            value="optionTwo"
            checked={answer === 'optionTwo'}
            onChange={event => setAnswer(event.target.value)}
          />
          {poll?.optionTwo}
        </Label>
        <Label>
          <input
            type="radio"
            name="answer"
            value="optionThree"
            checked={answer === 'optionThree'}
            onChange={event => setAnswer(event.target.value)}
          />
          {poll?.optionThree}
        </Label>
        <Button>Vote {answer}</Button>
      </Form>
    </Card>
  );
}
