import { atom } from 'recoil';

export interface IConnectingFilters {
  connectall: boolean;
  connect0: boolean;
  connect1: boolean;
  connect2: boolean;
  connect3: boolean;
}

export const connectingFilters = atom<IConnectingFilters>({
  key: 'connecting',
  default: {
    connectall: false,
    connect0: false,
    connect1: false,
    connect2: false,
    connect3: false,
  },
});
