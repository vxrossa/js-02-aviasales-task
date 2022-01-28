import styled from 'styled-components';
import { COLOR_BLACK, COLOR_WHITE } from '../constants';

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
  width: 50%;
  height: 80vh;
  margin: 8vh auto 0;
  grid-template-columns: 35% 65%;
  grid-auto-rows: 60px minmax(180px, auto);
  gap: 20px;
`;

export const Heading = styled.h3`
  margin: 0;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 600;
  color: ${COLOR_BLACK};
`;
