import styled from '@emotion/styled';
import { css } from '@emotion/core';

export const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  margin: 30px;
  margin-bottom: 15px;
  width: 80%;
  outline: none;
  font-family: 'Lato', sans-serif;
`;

const baseFormQuestion = props => css`
  outline: none;
  color: ${props.theme.colors.text.formQuestion};
  margin-bottom: 30px;
  border-radius: 30px;
  border: transparent;
  font-size: 1rem;
  font-weight: 600;
  height: 65px;
  width: 100%;
  background-color: ${props.theme.colors.background.formField};
`;

const baseFormInput = props => css`
  outline: none;
  padding-left: 15px;
  font-size: 0.8rem;
  color: ${props.theme.colors.text.formInput};
  margin-bottom: 20px;
  background-color: ${props.theme.colors.background.formInput};
  ::placeholder {
    color: ${props.theme.colors.text.formPlaceholder};
    font-family: 'Lato', sans-serif;
    font-weight: 300;
  }
`;
export const FormInputQuestion = styled.input`
  ${baseFormQuestion}
  ${baseFormInput}
`;

export const FormInputAnswer = styled.input`
  ${baseFormInput}
  height: 30px;
  width: 85%;
  padding: 10px;
  text-align: center;
`;

const baseFormOutput = props => css`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  margin-bottom: 10px;
  color: ${props.theme.colors.text.formField};
  background-color: ${props.theme.colors.background.formField};
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  border-radius: 30px;
  height: 65px;
  width: 100%;
`;

export const FormQuestion = styled.div`
  ${baseFormOutput}
  ${baseFormQuestion}
  margin-bottom: 30px;
  cursor: default;
`;

export const FormVoteAnswer = styled.div`
  ${baseFormOutput}
  background-color: ${props =>
    props.status
      ? props.theme.colors.background.clicked
      : props.theme.colors.background.formField};
  font-size: 0.9rem;
  color: ${props =>
    props.status
      ? props.theme.colors.text.clicked
      : props.theme.colors.text.formField};
  box-shadow: 6px 6px 6px #dcdef85f;
  width: 85%;
  margin: 0px auto 20px auto;


`;

export const FormResultAnswer = styled.div`
  ${baseFormOutput}
  width: 85%;
  background-color: ${props =>
    props.chosenAnswer === props.answerIndex
      ? props.theme.colors.background.chosen
      : props.theme.colors.background.resultField};
  color: ${props =>
    props.chosenAnswer === props.answerIndex
      ? props.theme.colors.text.chosen
      : props.theme.colors.text.resultField};
  border: transparent;
  cursor: default;
`;
