import CompaniesCard from '../common/cards/CompaniesCard';
import ConnectingFlightCard from '../common/cards/ConnectingFlightCard';
import FlightSortingCard from '../common/cards/FlightSortingCard';
import { Grid } from '../common/typography';
import FlightCardsWrapper from '../common/wrappers/FlightCardsWrapper';
import { LeftRow, RightRow } from './styled';

const SelectPage: React.FC = () => {
  return (
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
  );
};

export default SelectPage;
