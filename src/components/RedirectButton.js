import React from 'react';
import Button from '../components/Button';
import { useHistory } from 'react-router-dom';

export default function RedirectButton({ btnType, destination, name }) {
  let history = useHistory();

  function handleClick(destination) {
    history.push(destination);
  }

  return (
    <Button btnType={btnType} onClick={() => handleClick(destination)}>
      {name}
    </Button>
  );
}
