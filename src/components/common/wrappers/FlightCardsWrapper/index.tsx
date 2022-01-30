import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { companiesFilter } from '../../../../atoms/companies';
import { connectingFilters } from '../../../../atoms/connecting.filter';
import { ticketsList, ticketsPage } from '../../../../atoms/tickets';
import { getSortType } from '../../../../atoms/type.sort';
import { ITicket } from '../../../../types';
import LoadMoreButton from '../../buttons/LoadMoreButton';
import ConnectingInfoCard from '../../cards/ConnectingInfoCard';
import FlightCard from '../../cards/FlightCard';
import { StyledCardRow, StyledFlightWrapper, StyledImg, StyledText } from './styled';

const FlightsCardsWrapper = () => {
  const [tickets, setTickets] = useRecoilState<ITicket[]>(ticketsList);
  const currentPage = useRecoilValue(ticketsPage);
  const sorting = useRecoilValue(getSortType);
  const selectedConnects = useRecoilValue(connectingFilters);
  const selectedCompany = useRecoilValue(companiesFilter);

  useEffect(() => {
    const fetchTickets = async (): Promise<ITicket[]> => {
      const connectURLValues = Object.entries(selectedConnects)
        .filter(([_, value]) => value)
        .map(elem => elem[0].replace('connect', ''))
        .map(value => `&connectfilter=${value}`)
        .join('');
      const company = selectedCompany ? `&company=${selectedCompany}` : '';
      const URL = `http://localhost:5000/tickets?page=${currentPage}&sort=${sorting}${connectURLValues}${company}`;
      const response: Response = await fetch(URL);
      const data: ITicket[] = await response.json();
      return data;
    };

    fetchTickets().then(data => {
      currentPage <= 1 ? setTickets(data) : setTickets(state => [...state, ...data]);
    });
  }, [currentPage, sorting, selectedConnects, selectedCompany, setTickets]);

  const ticketCardsArray = tickets.map(card => {
    return (
      <FlightCard key={card.id}>
        <StyledCardRow>
          <StyledText>{card.price} Р</StyledText>
          <StyledImg
            src={`http://localhost:5000/companies/logos?name=${card.companyId.logo}`}
            alt="Company Logo"
          />
        </StyledCardRow>
        {card.segments.map((seg, i) => {
          return <ConnectingInfoCard {...seg} key={i} />;
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
