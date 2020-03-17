import React from 'react';
import Card from '../components/Card';
import { useParams } from 'react-router-dom';

const pollApiURL =
  process.env.REACT_APP_POLLS_API ||
  'https://my-json-server.typicode.com/Caruki/quest-app/polls';

export default function Vote() {
  const { pollId } = useParams();
  const [poll, setPoll] = React.useState();

  React.useEffect(() => {
    async function getPoll() {
      const response = await fetch(`${pollApiURL}/${pollId}`);
      const poll = await response.json();
      setPoll(poll);
    }
    getPoll();
  }, [pollId]);

  return (
    <>
      <Card>
        <h2>{poll?.question}</h2>
        <label>
          <input type="radio" name="answer" value={1} />
          {poll?.optionOne}
        </label>
        <label>
          <input type="radio" name="answer" value={1} />
          {poll?.optionTwo}
        </label>
        <label>
          <input type="radio" name="answer" value={1} />
          {poll?.optionThree}
        </label>
      </Card>
    </>
  );
}
