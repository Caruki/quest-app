import React from 'react';
import Card from '../components/Card';
import { useParams, useHistory } from 'react-router-dom';
import { Form, FormQuestion } from '../components/Form';
import Button from '../components/Button';
import RadioInput from '../components/RadioInput';

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
  const answerOptions = ['optionOne', 'optionTwo', 'optionThree'];

  return (
    <Card>
      <Form onSubmit={handleSubmit}>
        <FormQuestion>{poll?.question}</FormQuestion>
        {answerOptions.map(option => (
          <RadioInput
            key={option}
            checked={answer === option}
            onChange={event => setAnswer(event.target.value)}
            value={option}
            label={poll?.[option]}
            name="answer"
          />
        ))}
        <Button>Vote</Button>
      </Form>
    </Card>
  );
}
