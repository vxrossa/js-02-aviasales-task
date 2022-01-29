import { StyledFlightCard } from './styled';

const FlightCard: React.FC<React.ReactNode> = ({children}) => {
  return <StyledFlightCard>{children}</StyledFlightCard>;
};

export default FlightCard;
