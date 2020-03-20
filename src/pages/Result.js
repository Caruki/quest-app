import React from 'react';
import Card from '../components/Card';
import RedirectButton from '../components/RedirectButton';
import { Form, FormQuestion, FormResultAnswer } from '../components/Form';
import { useParams, useLocation } from 'react-router-dom';
import VotesBar from '../components/VotesBar';
import { getPoll } from '../api/polls';

export default function Result() {
  const { pollId } = useParams();
  const [poll, setPoll] = React.useState();

  React.useEffect(() => {
    getPoll(pollId).then(poll => setPoll(poll));
  }, [pollId]);

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const answerOneVotes = poll?.votes.filter(vote => vote === 'optionOne')
    .length;
  const answerTwoVotes = poll?.votes.filter(vote => vote === 'optionTwo')
    .length;
  const answerThreeVotes = poll?.votes.filter(vote => vote === 'optionThree')
    .length;

  const query = useQuery();
  const chosenAnswer = query.get('myanswer');

  return (
    <Card>
      <Form>
        <FormQuestion>
          {poll?.question} ({poll?.votes.length} Votes)
        </FormQuestion>
        <FormResultAnswer chosenAnswer={chosenAnswer} answerIndex="optionOne">
          {poll?.optionOne} ({answerOneVotes} votes)
        </FormResultAnswer>
        <VotesBar votes={answerOneVotes} />
        <FormResultAnswer chosenAnswer={chosenAnswer} answerIndex="optionTwo">
          {poll?.optionTwo} ({answerTwoVotes} votes)
        </FormResultAnswer>
        <VotesBar votes={answerTwoVotes} />
        <FormResultAnswer chosenAnswer={chosenAnswer} answerIndex="optionThree">
          {poll?.optionThree} ({answerThreeVotes} votes)
        </FormResultAnswer>
        <VotesBar votes={answerThreeVotes} />
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
