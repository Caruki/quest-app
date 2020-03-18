import React from 'react';
import Card from '../components/Card';
import RedirectButton from '../components/RedirectButton';
import styled from '@emotion/styled';

const NavButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-flow: column wrap;
`;

const WelcomeHeading = styled.h1`
  font-size: 1.6rem;
  color: ${props => props.theme.colors.text.heading};
  font-family: 'Fondamento', cursive;
  letter-spacing: 0.5rem;
  text-align: center;
`;

const WelcomeText = styled.div`
  font-size: 1.3rem;
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  color: rgba(228, 230, 250, 1);
  text-align: center;
`;

const WelcomeTextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
`;

export default function Home() {
  return (
    <Card>
      <WelcomeHeading>Welcome to the Questing Beast</WelcomeHeading>
      <WelcomeTextContainer>
        <WelcomeText>
          <p>
            Here you can become your very own questing beast by making polls or
            answering other's questions.
          </p>

          <p>Please choose one:</p>
        </WelcomeText>
      </WelcomeTextContainer>
      <NavButtonContainer>
        <RedirectButton
          variant="nav"
          name="Create your own poll"
          destination="/add"
        ></RedirectButton>
        <RedirectButton
          variant="nav"
          name="Vote in one of our polls"
          destination="/vote"
        ></RedirectButton>
        <RedirectButton
          variant="nav"
          name="See the results of your poll"
          destination="/polls/:pollId"
        ></RedirectButton>
      </NavButtonContainer>
    </Card>
  );
}
