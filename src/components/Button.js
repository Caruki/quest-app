import styled from '@emotion/styled';

const Button = styled.button`
  background-color: rgba(164, 173, 235, 1);
  border-radius: 35px;
  width: ${props => (props.btnType === 'nav' ? '85%' : '60%')};
  padding: ${props => (props.btnType === 'nav' ? '20px' : '10px')};
  outline: none;
  font-size: ${props => (props.btnType === 'nav' ? '1.1rem' : '0.8rem')};
  border: transparent;
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  text-align: center;
  margin-top: ${props => (props.btnType === 'nav' ? '20px' : '10px')};
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;

  &:active {
    background-color: #004c99;
  }
`;

export default Button;
