import { atom } from 'recoil';
import { ITicket } from '../types';

export const ticketsList = atom<ITicket[]>({
  key: 'tickets',
  default: [],
});

export const ticketsPage = atom<number>({
  key: 'ticketsPage',
  default: 1,
})