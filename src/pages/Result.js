import React from 'react';
import Card from '../components/Card';
import RedirectButton from '../components/RedirectButton';
import { Form, FormResultQuestion, FormResultAnswer } from '../components/Form';
import { useParams } from 'react-router-dom';

const pollApiURL =
  process.env.REACT_APP_POLLS_API ||
  'https://my-json-server.typicode.com/Caruki/quest-app/polls';

export default function Result() {
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
    <Card>
      <Form>
        <FormResultQuestion>{poll?.question}</FormResultQuestion>
        <FormResultAnswer>{poll?.optionOne}</FormResultAnswer>
        <FormResultAnswer>{poll?.optionTwo}</FormResultAnswer>
        <FormResultAnswer>{poll?.optionThree}</FormResultAnswer>
      </Form>
      <RedirectButton
        name="Create your own poll"
        destination="/add"
      ></RedirectButton>
      <RedirectButton
        name="Go back to overview"
        destination="/"
      ></RedirectButton>
    </Card>
  );
}
