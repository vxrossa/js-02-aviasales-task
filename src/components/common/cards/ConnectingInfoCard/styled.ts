import styled from 'styled-components';
import { COLOR_BLACK, COLOR_GRAY_MEDIUM } from '../../constants';

export const StyledSegmentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: auto;
  width: 100%;
`;

export const StyledSegmentColumn = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const StyledUpperText = styled.p`
  color: ${COLOR_GRAY_MEDIUM};
  font-size: 14px;
  text-transform: uppercase;
  margin: 0;
`;

export const StyledLowerText = styled.p`
  color: ${COLOR_BLACK};
  font-size: 14px;
  min-height: 16px;
  margin: 0;
`
