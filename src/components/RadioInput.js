import React from 'react';
import styled from '@emotion/styled';
import { FormVoteAnswer } from '../components/Form';

const Label = styled.label`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  display: block;
  width: 100%;
  cursor: pointer;
`;

const Input = styled.input`
  opacity: 0;
  position: absolute;
`;
const RadioInput = ({ checked, label, ...inputProps }) => {
  const [clickStatus, setStatus] = React.useState(false);
  return (
    <Label>
      <Input type="radio" checked={checked} {...inputProps} />
      <FormVoteAnswer
        onClick={() => {
          setStatus(checked ? true : false);
        }}
        status={clickStatus}
      >
        {label}
      </FormVoteAnswer>
    </Label>
  );
};

export default RadioInput;
