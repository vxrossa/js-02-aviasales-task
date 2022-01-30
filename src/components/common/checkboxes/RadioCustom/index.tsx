import { useState } from "react";
import { StyledListItem } from "../../typography";
import { StyledInputRadio, StyledRadioInside, StyledRadioLabel } from "./styled";

type Radio = {
  label: string;
  id: string;
  checked?: boolean;
  onClick?: () => void;
}

const RadioCustom: React.FC<Radio> = ({ label, id, checked, onClick }) => {
  const [ active, setActive ] = useState(checked);

  return (
    <StyledListItem onClick={() => {
      setActive(true);
      if (onClick) onClick();
    }}>
      <StyledInputRadio type="radio" id={id} name='companies' checked={active} readOnly/>
      <StyledRadioLabel htmlFor={id}>
        {label}
      </StyledRadioLabel>
      <StyledRadioInside />
    </StyledListItem>
  )
}

export default RadioCustom;