import React from 'react';
import { css } from '@emotion/core';

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        body {
          margin: 0;
          background-image: linear-gradient(to bottom right, #303e69, #08153b);
          /* height: 100vh; */
          overflow: hidden;
          display: flex;
          flex-flow: column nowrap;
          align-items: center;
        }
      `}
    />
  );
}
