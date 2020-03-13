import React from 'react';
import Card from '../components/Card';
import RedirectButton from '../components/RedirectButton';

export default function Vote() {
  return (
    <>
      <Card>
        {/*<SubmitButton></SubmitButton>*/}
        <RedirectButton
          name="See the results"
          destination="/polls/:pollId"
        ></RedirectButton>
      </Card>
    </>
  );
}
