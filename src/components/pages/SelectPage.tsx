import CompaniesCard from '../common/cards/CompaniesCard';
import ConnectingFlightCard from '../common/cards/ConnectingFlightCard';
import FlightSortingCard from '../common/cards/FlightSortingCard';
import { Grid } from '../common/typography';
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
      </RightRow>
    </Grid>
  );
};

export default SelectPage;
