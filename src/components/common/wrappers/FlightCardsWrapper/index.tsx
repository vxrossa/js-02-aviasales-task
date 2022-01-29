import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { ticketsList, ticketsPage } from '../../../../atoms/tickets';
import { getSortType } from '../../../../atoms/type.sort';
import { ITicket } from '../../../../types';
import ConnectingInfoCard from '../../cards/ConnectingInfoCard';
import FlightCard from '../../cards/FlightCard';
import { StyledFlightWrapper, StyledText } from './styled';

const FlightsCardsWrapper = () => {
  const [tickets, setTickets] = useRecoilState<ITicket[]>(ticketsList);
  const currentPage = useRecoilValue(ticketsPage);
  const sorting = useRecoilValue(getSortType);

  useEffect(() => {
    const fetchTickets = async (): Promise<ITicket[]> => {
      const response: Response = await fetch(`http://localhost:5000/tickets?page=${currentPage}&sort=${sorting}`);
      const data: ITicket[] = await response.json();
      return data;
    };

    fetchTickets().then(data => {
      setTickets(data);
    });
  }, [currentPage, sorting]);

  const ticketCardsArray = tickets.map((card) => {
    return <FlightCard key={card.id}>
      <StyledText>{card.price} Р
</StyledText>
      {card.segments.map((seg) => {
        return <ConnectingInfoCard {...seg} />
      })}
    </FlightCard>
  })

  return <StyledFlightWrapper>
    {ticketCardsArray}
  </StyledFlightWrapper>;
};

export default FlightsCardsWrapper;
