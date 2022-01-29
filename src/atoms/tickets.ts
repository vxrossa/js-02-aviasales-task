import { atom } from 'recoil';
import { ITicket } from '../types';

export const ticketsList = atom<ITicket[]>({
  key: 'tickets',
  default: [],
});
