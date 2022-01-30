import { FC, useMemo } from 'react';
import { ISegment } from '../../../../types';
import { StyledLowerText, StyledSegmentColumn, StyledSegmentGrid, StyledUpperText } from './styled';

const ConnectingInfoCard: FC<ISegment> = segment => {
  const { start, end, origin, destination, stops, duration } = segment;
  const stopsList = stops.length > 0 ? stops.join(', ') : '';

  const stopsText = () => {
    if (stops.length === 1) return 'пересадка';
    if (stops.length >= 2 && stops.length <= 4) return 'пересадки';
    if (stops.length === 0 || stops.length > 4) return 'пересадок';
  };

  const convertTime = (timeInSeconds: number) => {
    const time = +timeInSeconds.toFixed(3);
    const hours = Math.floor(time / 60 / 60);
    const minutes = Math.floor(time / 60) % 60;
    return `${hours} ч ${minutes} мин`;
  };

  const durationTime = useMemo(() => {
    return convertTime(duration / 1000);
  }, []);

  const startDate = new Date(start);
  const endDate = new Date(end);

  const startHour = `0${startDate.getHours()}`.slice(-2);
  const startMinute = `0${startDate.getMinutes()}`.slice(-2);

  const endHour = `0${endDate.getHours()}`.slice(-2);
  const endMinute = `0${endDate.getMinutes()}`.slice(-2);

  return (
    <StyledSegmentGrid>
      <StyledSegmentColumn>
        <StyledUpperText>
          {origin} - {destination}
        </StyledUpperText>
        <StyledLowerText>
          {startHour}:{startMinute} - {endHour}:{endMinute}
        </StyledLowerText>
      </StyledSegmentColumn>

      <StyledSegmentColumn>
        <StyledUpperText>В пути</StyledUpperText>
        <StyledLowerText>{durationTime}</StyledLowerText>
      </StyledSegmentColumn>

      <StyledSegmentColumn>
        <StyledUpperText>
          {stops.length} {stopsText()}
        </StyledUpperText>
        <StyledLowerText>{stopsList}</StyledLowerText>
      </StyledSegmentColumn>
    </StyledSegmentGrid>
  );
};

export default ConnectingInfoCard;
