import React from 'react';
import { keyframes } from '@emotion/core';
import styled from '@emotion/styled';

const Spinning = keyframes`
 0% { 
     transform: rotate(0); 
    }
  50% { 
      transform: rotate(180deg) 
    }
   100% { 
       transform: rotate(360deg) 
    }
`;

const LoadingSpinDiv = styled.div`
  position: absolute;
  animation: ${Spinning} 0.77s linear infinite;
  width: 60px;
  height: 60px;
  top: 20px;
  left: 20px;
  border-radius: 50%;
  box-shadow: 0 2px 0 0 #93dbe9;
  transform-origin: 30px 31px;
  box-sizing: content-box;
`;

const LoadingSpinH = styled.div`
  width: 84px;
  height: 84px;
  display: inline-block;
  overflow: hidden;
  background: none;
`;

const LoadingSpin = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(0.84);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
`;

export default function Loading() {
  return (
    <LoadingSpinH>
      <LoadingSpin>
        <LoadingSpinDiv></LoadingSpinDiv>
      </LoadingSpin>
    </LoadingSpinH>
  );
}
