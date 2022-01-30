import CompaniesCard from '../common/cards/CompaniesCard';
import ConnectingFlightCard from '../common/cards/ConnectingFlightCard';
import FlightSortingCard from '../common/cards/FlightSortingCard';
import { Grid, StyledLogo } from '../common/typography';
import FlightCardsWrapper from '../common/wrappers/FlightCardsWrapper';
import { LeftRow, RightRow } from './styled';
import logo from '../../assets/logo.svg';

const SelectPage: React.FC = () => {
  return (
    <>
      <StyledLogo src={logo} height={80}/>
      <Grid>
        <LeftRow>
          <ConnectingFlightCard />
          <CompaniesCard />
        </LeftRow>
        <RightRow>
          <FlightSortingCard />
          <FlightCardsWrapper />
        </RightRow>
      </Grid>
    </>
  );
};

export default SelectPage;
