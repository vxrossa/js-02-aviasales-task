import styled from "styled-components";
import { COLOR_BLUE } from "../../constants";

export const StyledRadioInside = styled.div`
  height: 16px;
  width: 16px;
  position: absolute;
  left: 31px;
  pointer-events: none;
  border-radius: 50%;
`;

export const StyledInputRadio = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
  &:checked ~ ${StyledRadioInside} {
    background-color: ${COLOR_BLUE};
  }
`;

export const StyledRadioLabel = styled.label`
  width: 100%;
  display: flex;
  align-items: center;
  &::before{
    content: '';
    display: flex;
    background-color: transparent;
    align-items: center;
    justify-content: center;
    height: 24px;
    width: 24px;
    border: 1px solid ${COLOR_BLUE};
    border-radius: 50%;
    margin: 0 10px;
  }
`;
