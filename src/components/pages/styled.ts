import styled from 'styled-components';

export const LeftRow = styled.nav`
  grid-column: 1;
`;

export const RightRow = styled.section`
  grid-column: 2;
  @media screen and (max-width: 930px) {
    grid-column: 1;
  }
`;
