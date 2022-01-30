import styled from 'styled-components';
import { COLOR_BLUE, COLOR_GRAY_MEDIUM, COLOR_BLUE_HOVER, COLOR_WHITE } from '../../constants';

export const StyledLoadButton = styled.button`
  background-color: ${COLOR_BLUE};
  color: ${COLOR_WHITE};
  width: 100%;
  height: 60px;
  margin-bottom: 40px;
  border-radius: 5px;
  border: 0;
  &:hover {
    background-color: ${COLOR_BLUE_HOVER};
  }
  &:active {
    opacity: 0.7;
  }
  &:focus {
    outline: 1px solid ${COLOR_GRAY_MEDIUM};
  }
`;
