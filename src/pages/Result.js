import React from 'react';
import Card from '../components/Card';
import RedirectButton from '../components/RedirectButton';
import { Form, FormQuestion, FormResultAnswer } from '../components/Form';
import { useParams } from 'react-router-dom';
import { getPoll } from '../api/polls';
import LoadingAnimation from '../components/LoadingAnimation';

export default function Result() {
  const { pollId } = useParams();
  const [poll, setPoll] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState(null);

  React.useEffect(() => {
    setIsLoading(true);
    getPoll(pollId)
      .then(poll => setPoll(poll))
      .catch(error => setErrorMessage(error.message))
      .finally(() => setIsLoading(false));
  }, [pollId]);

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  return (
    <Card>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <>
          <Form>
            <FormQuestion>{poll?.question}</FormQuestion>
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
        </>
      )}
    </Card>
  );
}
