import React from 'react';
import Card from '../components/Card';
import RedirectButton from '../components/RedirectButton';
import { Form, FormQuestion, FormResultAnswer } from '../components/Form';
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

  const answerOneVotes = poll?.votes.filter(vote => vote === 'optionOne')
    .length;
  const answerTwoVotes = poll?.votes.filter(vote => vote === 'optionTwo')
    .length;
  const answerThreeVotes = poll?.votes.filter(vote => vote === 'optionThree')
    .length;

  return (
    <Card>
      <Form>
        <FormQuestion>
          {poll?.question} ({poll?.votes.length} Votes)
        </FormQuestion>
        <FormResultAnswer>
          {poll?.optionOne} ({answerOneVotes} votes)
        </FormResultAnswer>
        <FormResultAnswer>
          {poll?.optionTwo} ({answerTwoVotes} votes)
        </FormResultAnswer>
        <FormResultAnswer>
          {poll?.optionThree} ({answerThreeVotes} votes)
        </FormResultAnswer>
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
