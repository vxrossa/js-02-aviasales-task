import { StyledListItem } from '../../typography';
import { StyledInputCheckbox, StyledLabel } from './styled';

type Checkbox = {
  label: string;
  id: string;
  checked: boolean;
  onClick: any;
};

const CheckCustom: React.FC<Checkbox> = ({ label, id, checked, onClick }) => {
  return (
    <StyledListItem onClick={onClick}>
      <StyledInputCheckbox type="checkbox" id={id} checked={checked} readOnly/>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
    </StyledListItem>
  );
};

export default CheckCustom;
