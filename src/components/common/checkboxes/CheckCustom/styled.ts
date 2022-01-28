import styled from 'styled-components';
import { COLOR_BLUE, COLOR_HOVER } from '../../constants';
import check from '../../../../assets/checkbox.svg';

export const StyledInputCheckbox = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
`;

export const StyledLabel = styled.label`
  display: flex;
  &::before{
    content: '';
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
    width: 20px;
    border: 1px solid ${COLOR_BLUE};
    border-radius: 3px;
    margin: 0 10px;
  }
  ${StyledInputCheckbox}:checked+&::before{
    content: url(${check});
  }
`;

export const StyledListItem = styled.li`
  height: 3rem;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  &:hover {
    background-color: ${COLOR_HOVER};
  }
`;

