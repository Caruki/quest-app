import React from 'react';
import { Global, css } from '@emotion/core';

export default function GlobalStyles() {
  return (
    <Global
      styles={theme => css`
        body {
          margin: 0;
          background-image: ${theme.colors.background.body};
          display: flex;
          flex-flow: column nowrap;
          align-items: center;
        }
      `}
    />
  );
}
