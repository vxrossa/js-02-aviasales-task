import ConnectingFlightCard from '../common/cards/ConnectingFlightCard';
import FlightSortingCard from '../common/cards/FlightSortingCard';
import { Grid } from '../common/typography';

const SelectPage: React.FC = () => {
  return (
    <Grid>
      <ConnectingFlightCard />
      <FlightSortingCard />
    </Grid>
  );
};

export default SelectPage;
