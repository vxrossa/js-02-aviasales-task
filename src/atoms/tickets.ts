import { atom, selector } from 'recoil';
import { ITicket } from '../types';

export const ticketsList = atom<ITicket[]>({
  key: 'tickets',
  default: [],
});

export const ticketsPage = atom<number>({
  key: 'ticketsPage',
  default: 1,
});

export const resetTicketsPage = selector({
  key: 'resetTickets',
  get: ({ get }) => get(ticketsPage),
  set: ({ set }, value) => set(ticketsPage, value as number),
});
