import React from 'react';
import Card from '../components/Card';
import { useParams, useHistory } from 'react-router-dom';
import Form from '../components/Form';
import styled from '@emotion/styled';
import Button from '../components/Button';

const Label = styled.label`
  display: block;
`;

const pollApiURL =
  process.env.REACT_APP_POLLS_API ||
  'https://my-json-server.typicode.com/Caruki/quest-app/polls';

export default function Vote() {
  const { pollId } = useParams();
  const history = useHistory();
  const [poll, setPoll] = React.useState(null);
  const [answer, setAnswer] = React.useState(null);

  React.useEffect(() => {
    async function getPoll() {
      const response = await fetch(`${pollApiURL}/${pollId}`);
      const poll = await response.json();
      setPoll(poll);
    }
    getPoll();
  }, [pollId]);

  async function handleSubmit(event) {
    event.preventDefault();
    const updatedPoll = { ...poll };
    updatedPoll.votes.push(answer);

    await fetch(`${pollApiURL}/${pollId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(updatedPoll)
    });
    history.push(`/polls/${poll.id}`);
  }

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
        <Button>Vote</Button>
      </Form>
    </Card>
  );
}
