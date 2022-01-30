import styled from 'styled-components';
import { Card } from '../../typography';
import {
  COLOR_BLUE,
  COLOR_HOVER,
  COLOR_WHITE,
  COLOR_BLACK,
  COLOR_GRAY_LIGHT,
} from '../../constants/index';

type ButtonToggle = {
  toggled: boolean;
};

export const StyledSortingCard = styled(Card)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 52px;
  grid-column: 2;
  border: 1px solid ${COLOR_GRAY_LIGHT};
  margin-bottom: 1rem;
`;

export const StyledSortingButton = styled.button<ButtonToggle>`
  height: 100%;
  width: 100%;
  outline: 0;
  border: 1px solid ${COLOR_GRAY_LIGHT};
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  ${props => {
    if (props.toggled) {
      return `
        background-color: ${COLOR_BLUE};
        color: ${COLOR_WHITE};
    `;
    } else {
      return `
        background-color: ${COLOR_WHITE};
        color: ${COLOR_BLACK};
    `;
    }
  }}
  &:hover {
    color: ${COLOR_BLACK};
    background-color: ${COLOR_HOVER};
  }
  &:active {
    opacity: 0.6;
  }
  @media screen and (max-width: 930px) {
    font-size: 11px;
  }
`;
