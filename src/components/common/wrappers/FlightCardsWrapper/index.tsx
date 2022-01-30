import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { connectingFilters } from '../../../../atoms/connecting.filter';
import { ticketsList, ticketsPage } from '../../../../atoms/tickets';
import { getSortType } from '../../../../atoms/type.sort';
import { ITicket } from '../../../../types';
import LoadMoreButton from '../../buttons/LoadMoreButton';
import ConnectingInfoCard from '../../cards/ConnectingInfoCard';
import FlightCard from '../../cards/FlightCard';
import { StyledFlightWrapper, StyledText } from './styled';

const FlightsCardsWrapper = () => {
  const [tickets, setTickets] = useRecoilState<ITicket[]>(ticketsList);
  const currentPage = useRecoilValue(ticketsPage);
  const sorting = useRecoilValue(getSortType);
  const selectedConnects = useRecoilValue(connectingFilters);

  useEffect(() => {
    const fetchTickets = async (): Promise<ITicket[]> => {
      const connectURLValues = Object.entries(selectedConnects)
        .filter(([_, value]) => value)
        .map((elem) => elem[ 0 ].replace('connect', ''))
        .map((value) => `&connectfilter=${value}`)
      const URL = `http://localhost:5000/tickets?page=${currentPage}&sort=${sorting}${connectURLValues}`;
      const response: Response = await fetch(URL);
      const data: ITicket[] = await response.json();
      return data;
    };

    fetchTickets().then(data => {
      currentPage <= 1 ? setTickets(data) : setTickets(state => [...state, ...data]);
    });
  }, [currentPage, sorting, selectedConnects]);

  const ticketCardsArray = tickets.map(card => {
    return (
      <FlightCard key={card.id}>
        <StyledText>{card.price} Р</StyledText>
        {card.segments.map(seg => {
          return <ConnectingInfoCard {...seg} />;
        })}
      </FlightCard>
    );
  });

  return (
    <StyledFlightWrapper>
      {ticketCardsArray}
      <LoadMoreButton />
    </StyledFlightWrapper>
  );
};

export default FlightsCardsWrapper;
