import React from 'react';
import Card from '../components/Card';
import { useParams, useHistory } from 'react-router-dom';
import { Form, FormQuestion } from '../components/Form';
import Button from '../components/Button';
import RadioInput from '../components/RadioInput';
import { getPoll, patchPoll } from '../api/polls';
import LoadingAnimation from '../components/LoadingAnimation';

export default function Vote() {
  const { pollId } = useParams();
  const history = useHistory();
  const [poll, setPoll] = React.useState(null);
  const [answer, setAnswer] = React.useState(null);
  const [isLoadingPatchPoll, setIsLoadingPatchPoll] = React.useState(false);
  const [isLoadingGetPoll, setIsLoadingGetPoll] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState(false);

  React.useEffect(() => {
    setIsLoadingGetPoll(true);
    getPoll(pollId)
      .then(poll => setPoll(poll))
      .catch(error => setErrorMessage(error.message))
      .finally(() => setIsLoadingGetPoll(false));
  }, [pollId]);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      setIsLoadingPatchPoll(true);

      const updatedPoll = { ...poll };
      updatedPoll.votes.push(answer);


      await patchPoll(pollId, updatedPoll);
      history.push(`/polls/${poll.id}/result/?myanswer=${answer}`);
    } catch (error) {
      setErrorMessage(error.message);
    }

  }

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  const answerOptions = ['optionOne', 'optionTwo', 'optionThree'];

  return (
    <Card>
      {isLoadingGetPoll ? (
        <LoadingAnimation />
      ) : (
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
              disabled={isLoadingPatchPoll}
            />
          ))}
          <Button disabled={isLoadingPatchPoll}>Vote</Button>
        </Form>
      )}
    </Card>
  );
}
