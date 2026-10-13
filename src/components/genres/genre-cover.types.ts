import { Genre } from '@/content/types';

export type Props = {
  genre: Genre;
  onClick: (id: string) => void;
};
