import { useMemo } from 'react';
import CheckCustom from '../../checkboxes/CheckCustom';
import { Heading } from '../../typography';
import { StyledConnectingCard, StyledUL } from './styled';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { connectingFilters, IConnectingFilters } from '../../../../atoms/connecting.filter';
import { resetTicketsPage, ticketsPage } from '../../../../atoms/tickets';

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

  const [ checkedValues, setCheckedValues ] = useRecoilState(connectingFilters);
  const resetPage = useSetRecoilState(resetTicketsPage);

  const toggleConnect = (event: React.MouseEvent) => {
    resetPage(1);
    if (checkedValues[(event.target as HTMLElement).id as keyof IConnectingFilters]) {
      setCheckedValues(state => ({
        ...state,
        connectall: false,
        [(event.target as HTMLElement).id]: false,
      }));
    } else {
      setCheckedValues(state => ({
        ...state,
        connectall: false,
        [(event.target as HTMLElement).id]: true,
      }));
    }
    if ((event.target as HTMLElement).id === 'connectall') {
      setCheckedValues(state => {
        const newState = {...state};
        Object.keys(newState).forEach((value) => newState[ value as keyof IConnectingFilters ] = false)
        newState.connectall = true;
        return newState;
      })
    }
  };

  const connectCheckboxes = useMemo(() => {
    return connectFlightsArray.map(elem => {
      return (
        <CheckCustom
          label={elem.text}
          key={elem.id}
          id={elem.id}
          checked={checkedValues[elem.id as keyof IConnectingFilters]}
          onClick={(e: React.MouseEvent<HTMLElement>) => ((e.target as HTMLElement).id !== '' ? toggleConnect(e) : '')}
        />
      );
    });
  }, [checkedValues]);

  return (
    <StyledConnectingCard>
      <Heading>Количество пересадок</Heading>
      <StyledUL>{connectCheckboxes}</StyledUL>
    </StyledConnectingCard>
  );
};

export default ConnectingFlightCard;
