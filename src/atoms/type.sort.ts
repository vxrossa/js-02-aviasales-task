import { atom } from 'recoil';

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
