import { StyledListItem } from '../../typography';
import { StyledInputCheckbox, StyledInputLabel } from './styled';

type Checkbox = {
  label: string;
  id: string;
  checked: boolean;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
};

const CheckCustom: React.FC<Checkbox> = ({ label, id, checked, onClick }) => {
  return (
    <StyledListItem onClick={onClick}>
      <StyledInputCheckbox type="checkbox" id={id} checked={checked} readOnly/>
      <StyledInputLabel htmlFor={id}>{label}</StyledInputLabel>
    </StyledListItem>
  );
};

export default CheckCustom;
