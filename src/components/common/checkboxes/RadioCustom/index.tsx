import { useState } from "react";
import { StyledListItem } from "../../typography";
import { StyledInputRadio, StyledRadioInside, StyledRadioLabel } from "./styled";

type Radio = {
  label: string;
  id: string;
  checked?: boolean;
}

const RadioCustom: React.FC<Radio> = ({ label, id, checked }) => {
  const [ active, setActive ] = useState(checked);

  return (
    <StyledListItem onClick={() => setActive(true)}>
      <StyledInputRadio type="radio" id={id} name='companies' checked={active}/>
      <StyledRadioLabel htmlFor={id}>
        {label}
      </StyledRadioLabel>
      <StyledRadioInside />
    </StyledListItem>
  )
}

export default RadioCustom;