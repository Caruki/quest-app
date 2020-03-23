import React from 'react';
import styled from '@emotion/styled';

const CardStyle = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 100%;
  background: transparent;
  font-family: 'Lato', sans-serif;
`;

export default Card;
function Card(props) {
  return <CardStyle>{props.children}</CardStyle>;
}
