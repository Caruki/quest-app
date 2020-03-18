import styled from '@emotion/styled';
import { css } from '@emotion/core';

export const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  min-height: 300px;
  margin: 30px;
  margin-bottom: 15px;
  width: 80%;
  outline: none;
  font-family: 'Lato', sans-serif;
`;

const baseFormQuestion = css`
  outline: none;
  color: rgba(124, 37, 54, 1);
  margin-bottom: 30px;
  border-radius: 30px;
  border: transparent;
  font-size: 1rem;
  height: 65px;
  width: 100%;
  background-color: rgba(228, 230, 250, 1);
`;

const baseFormInput = css`
  outline: none;
  padding-left: 15px;
  font-size: 0.8rem;
  color: rgba(124, 37, 54, 1);
  margin-bottom: 20px;
  ::placeholder {
    color: rgba(239, 78, 110, 0.432);
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
  background-color: rgba(228, 230, 250, 1);
  height: 30px;
  width: 85%;
  padding: 10px;
  text-align: center;
`;

const baseFormOutput = css`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  margin-bottom: 20px;
  color: rgba(124, 37, 54, 1);
  background-color: rgba(228, 230, 250, 1);
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  border-radius: 30px;
  /* height: 65px;
  width: 100%; */
`;

export const FormVoteQuestion = styled.div`
  ${baseFormQuestion}
  margin-bottom: 30px;
  cursor: default;
`;

export const FormVoteAnswer = styled.div`
  ${baseFormOutput}
  font-size: 0.9rem;
  box-shadow: 6px 6px 6px #dcdef85f;
  border: 1px solid #707070;
`;