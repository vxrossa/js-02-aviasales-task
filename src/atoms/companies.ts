import { atom } from 'recoil';
import { ICompany } from '../types';

export const companiesList = atom<ICompany[]>({
  key: 'companies',
  default: [],
});
