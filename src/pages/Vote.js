import React from 'react';
import Card from '../components/Card';
import { useParams, useHistory } from 'react-router-dom';
import { Form, FormVoteQuestion, FormVoteAnswer } from '../components/Form';
import styled from '@emotion/styled';
import Button from '../components/Button';

const Label = styled.label`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  display: block;
  width: 100%;
  cursor: pointer;
`;

const Input = styled.input`
  opacity: 0;
  position: absolute;
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
    history.push(`/polls/${poll.id}/result`);
  }

  return (
    <Card>
      <Form onSubmit={handleSubmit}>
        <FormVoteQuestion>{poll?.question}</FormVoteQuestion>
        <Label>
          <Input
            type="radio"
            name="answer"
            value="optionOne"
            checked={answer === 'optionOne'}
            onChange={event => setAnswer(event.target.value)}
          />
          <FormVoteAnswer>{poll?.optionOne}</FormVoteAnswer>
        </Label>
        <Label>
          <Input
            type="radio"
            name="answer"
            value="optionTwo"
            checked={answer === 'optionTwo'}
            onChange={event => setAnswer(event.target.value)}
          />
          <FormVoteAnswer>{poll?.optionTwo}</FormVoteAnswer>
        </Label>
        <Label>
          <Input
            type="radio"
            name="answer"
            value="optionThree"
            checked={answer === 'optionThree'}
            onChange={event => setAnswer(event.target.value)}
          />
          <FormVoteAnswer>{poll?.optionThree}</FormVoteAnswer>
        </Label>
        <Button>Vote {answer}</Button>
      </Form>
    </Card>
  );
}
