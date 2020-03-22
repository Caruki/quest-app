import React from 'react';
import Card from '../components/Card';
import RedirectButton from '../components/RedirectButton';
import { Form, FormQuestion, FormResultAnswer } from '../components/Form';
import { useParams } from 'react-router-dom';
import { getPoll } from '../api/polls';
import LoadingAnimation from '../components/LoadingAnimation';
import Swal from 'sweetalert2';

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

  React.useEffect(() => {
    if (errorMessage) {
      Swal.fire({
        titleText: 'Error!',
        text: errorMessage,
        icon: 'error',
        showCloseButton: false,
        showCancelButton: false,
        showConfirmButton: false,
        allowOutsideClick: false,
        allowEnterKey: false,
        allowEscapeKey: false
      });
    }
  }, [errorMessage]);

  return (
    <Card>
      {isLoading && <LoadingAnimation />}
      {!isLoading && !errorMessage && (
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
