import styled from '@emotion/styled';

export const Logo = styled.img`
  height: 50px;
  margin: 10px;

  &:hover {
    transform: rotate(30deg) translate(10%);
  }
`;

export const LogoFlipped = styled(Logo)`
  &:hover {
    transform: rotate(-30deg) translate(10%);
  }
`;
