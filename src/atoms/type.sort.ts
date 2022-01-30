import { atom, selector } from 'recoil';

export type TypeSort = {
  fastest: boolean;
  cheapest: boolean;
  optimal: boolean;
};

export const typeSort = atom<TypeSort>({
  key: 'sortingType',
  default: {
    fastest: true,
    cheapest: false,
    optimal: false,
  }
});

export const getSortType = selector({
  key: 'getSorting',
  get: ({ get }) => {
    const sort = get(typeSort);
    return Object.keys(sort)
      .filter((elem) => sort[ elem as keyof TypeSort ] === true)
      .join('');
  }
})