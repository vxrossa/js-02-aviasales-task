import { atom } from 'recoil';
import { ICompany } from '../types';

export const companiesList = atom<ICompany[]>({
  key: 'companies',
  default: [],
});

export const companiesFilter = atom<string>({
  key: 'companiesFilter',
  default: '',
});
