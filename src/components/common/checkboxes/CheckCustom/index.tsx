import { StyledLabel, StyledListItem } from './styled';

type Checkbox = {
  label: string;
  id: string;
};

const CheckCustom: React.FC<Checkbox> = ({ label, id }) => {
  return (
    <StyledListItem>
      <input type="checkbox" id={id} />
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
    </StyledListItem>
  );
};

export default CheckCustom;
