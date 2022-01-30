import styled from 'styled-components';
import { COLOR_BLUE } from '../../constants';
import check from '../../../../assets/checkbox.svg';

export const StyledInputCheckbox = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
`;

export const StyledInputLabel = styled.label`
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


