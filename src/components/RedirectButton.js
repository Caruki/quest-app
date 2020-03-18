import React from 'react';
import Button from '../components/Button';
import { useHistory } from 'react-router-dom';

export default function RedirectButton({ variant, destination, name }) {
  let history = useHistory();

  function handleClick(destination) {
    history.push(destination);
  }

  return (
    <Button variant={variant} onClick={() => handleClick(destination)}>
      {name}
    </Button>
  );
}
