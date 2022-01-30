import styled from 'styled-components';
import { COLOR_BLACK, COLOR_HOVER, COLOR_WHITE } from '../constants';

type ShadowToggle = {
  isShadowDisabled?: boolean;
};

export const Card = styled.div<ShadowToggle>`
  background-color: ${COLOR_WHITE};
  box-shadow: ${props => (props.isShadowDisabled ? '' : '0px 2px 8px rgba(0, 0, 0, 0.1)')};
  border-radius: 8px;
  overflow: hidden;
`;

export const Grid = styled.main`
  display: grid;
  min-width: 50%;
  height: 80vh;
  margin: 0 auto;
  grid-template-columns: 300px 550px;
  gap: 20px;
  @media screen and (max-width: 930px) {
    grid-template-columns: 70vw;
  }
`;

export const Heading = styled.h3`
  margin: 18px;
  font-size: 13px;
  text-transform: uppercase;
  font-weight: 600;
  color: ${COLOR_BLACK};
`;

export const StyledListItem = styled.li`
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  cursor: pointer;
  position: relative;
  &:hover {
    background-color: ${COLOR_HOVER};
  }
  & > * {
    cursor: pointer;
  }
`;

export const StyledLogo = styled.img`
  display: block;
  margin: 20px auto;
`;
