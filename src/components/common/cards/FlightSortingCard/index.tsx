import { StyledSortingButton, StyledSortingCard } from './styled';

const FlightSortingCard = () => {
  return (
    <StyledSortingCard isShadowDisabled={true}>
      <StyledSortingButton toggled={true}>Самый дешевый</StyledSortingButton>
      <StyledSortingButton toggled={false}>Самый быстрый</StyledSortingButton>
      <StyledSortingButton toggled={false}>Оптимальный</StyledSortingButton>
    </StyledSortingCard>
  );
};

export default FlightSortingCard;
