import React from 'react';
import Button from '../components/Button';
import { useHistory } from 'react-router-dom';

export default function RedirectButton(props) {
  let history = useHistory();

  function handleClick(destination) {
    history.push(destination);
  }

  return (
    <Button
      className={props.className || 'button'}
      onClick={() => handleClick(props.destination)}
    >
      {props.name}
    </Button>
  );
}
