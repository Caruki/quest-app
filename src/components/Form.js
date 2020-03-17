import styled from '@emotion/styled';

export const Form = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  min-height: 300px;
  margin: 30px;
  margin-bottom: 15px;
  width: 80%;
  outline: none;

  ::placeholder {
    color: rgba(239, 78, 110, 0.432);
    font-family: 'Lato', sans-serif;
  }
`;

export const FormInput = styled.input`
  margin-bottom: 30px;
  padding-left: 15px;
  outline: none;
  border: transparent;
  color: rgba(124, 37, 54, 1);
  font-size: 0.8rem;
  ::placeholder {
    color: rgba(239, 78, 110, 0.432);
    font-family: 'Lato', sans-serif;
  }
`;

export const FormInputQuestion = styled(FormInput)`
  border-radius: 30px;
  height: 65px;
  width: 100%;
  background-color: rgba(228, 230, 250, 1);
`;

export const FormInputAnswer = styled(FormInput)`
  background-color: rgba(228, 230, 250, 1);
  height: 30px;
  width: 85%;
  padding: 10px;
  text-align: center;
`;

export default Form;
