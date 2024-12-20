import Image from 'next/image';
import { Genre } from '@/content/types';

interface Props {
  genre: Genre;
  onClick: (id: string) => void;
}

const GenreCover = ({ genre, onClick }: Props) => {
  if (!genre.coverImagePath || !genre.playlistUrl) {
    return null;
  }

  return (
    <Image
      className="hover:cursor-pointer transform transition duration-300 ease-in-out hover:scale-110 hover:contrast-150"
      alt={genre.name}
      src={genre.coverImagePath}
      width={350}
      height={350}
      onClick={() => onClick(genre.playlistUrl)}
    />
  );
};

export default GenreCover;
