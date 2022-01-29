import { useMemo } from 'react';
import { useRecoilState } from 'recoil';
import { typeSort } from '../../../../atoms/type.sort';
import { StyledSortingButton, StyledSortingCard } from './styled';

type SortingButtons = {
  text: string;
  key: string;
  stateToggle: boolean;
  function: () => void;
};

const FlightSortingCard = () => {
  const [sorting, setSorting] = useRecoilState(typeSort);

  const resetSorting = () => {
    setSorting({
      cheapest: false,
      fastest: false,
      optimal: false,
    });
  };

  const sortingButtonsArray: SortingButtons[] = [
    {
      text: 'Самый дешевый',
      key: 'cheapest',
      stateToggle: sorting.cheapest,
      function: () => {
        setSorting(state => ({
          ...state,
          cheapest: true,
        }))
      },
    },
    {
      text: 'Самый быстрый',
      key: 'fastest',
      stateToggle: sorting.fastest,
      function: () => {
        setSorting(state => ({
          ...state,
          fastest: true,
        }))
      },
    },
    {
      text: 'Оптимальный',
      key: 'optimal',
      stateToggle: sorting.optimal,
      function: () => {
        setSorting(state => ({
          ...state,
          optimal: true,
        }))
      },
    },
  ];

  const sortingButtons = useMemo(
    () =>
      sortingButtonsArray.map(elem => {
        return (
          <StyledSortingButton
            toggled={elem.stateToggle}
            key={elem.key}
            onClick={() => {
              resetSorting();
              elem.function();
            }}
          >
            {elem.text}
          </StyledSortingButton>
        );
      }),
    [sorting]
  );

  return <StyledSortingCard isShadowDisabled={true}>{sortingButtons}</StyledSortingCard>;
};

export default FlightSortingCard;
