import React from 'react';
import Title from './Title';
import { Logo, LogoFlipped } from './Logo';
import Chimera from '../assets/chimera.svg';
import ChimeraFlipped from '../assets/chimeraflipped.svg';
import SwitchButton from '../assets/switch.svg';
import styled from '@emotion/styled';

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
`;

const ThemeButton = styled.img`
  align-self: center;
  width: 35px;
  cursor: pointer;
  align-self: center;
`;

function AppHeader({ onThemeButtonClick }) {
  return (
    <>
      <Header>
        <LogoFlipped src={ChimeraFlipped} alt="logo"></LogoFlipped>
        <Title as="a" href="/">
          The Questing Beast
        </Title>
        <Logo src={Chimera} alt="logo"></Logo>
      </Header>
      <ThemeButton src={SwitchButton} alt="" onClick={onThemeButtonClick} />
    </>
  );
}

export default AppHeader;
