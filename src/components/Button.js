import styled from '@emotion/styled';

const Button = styled.button`
  background-color: ${props => props.theme.colors.background.buttonPrimary};
  border-radius: 35px;
  width: ${props => (props.variant === 'nav' ? '85%' : '60%')};
  padding: ${props => (props.variant === 'nav' ? '20px' : '10px')};
  outline: none;
  font-size: ${props => (props.variant === 'nav' ? '1.1rem' : '0.8rem')};
  border: transparent;
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  text-align: center;
  margin-top: ${props => (props.variant === 'nav' ? '20px' : '10px')};
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
  color: ${props => props.theme.colors.text.buttonPrimary};

  &:active {
    background-color: ${props => props.theme.colors.background.clicked};
    color: ${props => props.theme.colors.text.clicked};
  }
`;

export default Button;
