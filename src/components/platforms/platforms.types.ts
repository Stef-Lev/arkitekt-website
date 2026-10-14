import { Platform } from '../music-page-covers/music-covers/music-covers.types';

export type Props = {
  platforms: Platform[];
  onClick: (url: string) => void;
};
