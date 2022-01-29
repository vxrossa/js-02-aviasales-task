import { atom } from "recoil";
import { ISegment } from '../types/index';

const segmentsList = atom<ISegment[]>({
  key: 'segments',
  default: [],
})