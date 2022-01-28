import { useMemo } from 'react';
import CheckCustom from '../../checkboxes/CheckCustom';
import { Heading } from '../../typography';
import { StyledConnectingCard } from './styled';

const ConnectingFlightCard = () => {
  const connectFlightsArray = [
    {
      id: 'all',
      text: 'Все',
    },
    {
      id: 'no-connect',
      text: 'Без пересадок',
    },
    {
      id: '1-connect',
      text: '1 пересадка',
    },
    {
      id: '2-connect',
      text: '2 пересадки',
    },
    {
      id: '3-connect',
      text: '3 пересадки',
    },
  ];

  const connectCheckboxes = useMemo(() => {
    return connectFlightsArray.map(elem => {
      return <CheckCustom label={elem.text} id={elem.id} />;
    });
  }, []);

  return (
    <StyledConnectingCard>
      <Heading>Количество пересадок</Heading>
      {connectCheckboxes}
    </StyledConnectingCard>
  );
};

export default ConnectingFlightCard;
