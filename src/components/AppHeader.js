import React from 'react';
import Title from './Title';
import { Logo, LogoFlipped } from './Logo';
import Chimera from '../assets/chimera.svg';
import ChimeraFlipped from '../assets/chimeraflipped.svg';
import styled from '@emotion/styled';

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
`;

function AppHeader() {
  return (
    <Header>
      <LogoFlipped src={ChimeraFlipped} alt="logo"></LogoFlipped>
      <Title>The Questing Beast</Title>
      <Logo src={Chimera} alt="logo"></Logo>
    </Header>
  );
}

export default AppHeader;
