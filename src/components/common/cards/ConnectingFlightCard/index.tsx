import { useMemo } from 'react';
import CheckCustom from '../../checkboxes/CheckCustom';
import { Heading } from '../../typography';
import { StyledConnectingCard, StyledUL } from './styled';
import { useRecoilState } from 'recoil';
import { connectingFilters, IConnectingFilters } from '../../../../atoms/connecting.filter';

const ConnectingFlightCard = () => {
  const connectFlightsArray = [
    {
      id: 'connectall',
      text: 'Все',
    },
    {
      id: 'connect0',
      text: 'Без пересадок',
    },
    {
      id: 'connect1',
      text: '1 пересадка',
    },
    {
      id: 'connect2',
      text: '2 пересадки',
    },
    {
      id: 'connect3',
      text: '3 пересадки',
    },
  ];

  const [checkedValues, setCheckedValues] = useRecoilState(connectingFilters);

  const toggleConnect = (event: any) => {
    setCheckedValues(state => state);
  };

  const connectCheckboxes = useMemo(() => {
    return connectFlightsArray.map(elem => {
      return (
        <CheckCustom
          label={elem.text}
          key={elem.id}
          id={elem.id}
          checked={checkedValues[elem.id as keyof IConnectingFilters]}
          onClick={(e: any) => toggleConnect(e)}
        />
      );
    });
  }, [connectFlightsArray]);

  return (
    <StyledConnectingCard>
      <Heading>Количество пересадок</Heading>
      <StyledUL>{connectCheckboxes}</StyledUL>
    </StyledConnectingCard>
  );
};

export default ConnectingFlightCard;
