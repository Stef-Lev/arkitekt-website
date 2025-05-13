import Image from 'next/image';
import { Genre } from '@/content/types';

interface Props {
  genre: Genre;
}

const GenreCircle = ({ genre }: Props) => {
  if (!genre.coverImagePath || !genre.playlistUrl) {
    return null;
  }

  return (
    <div className="flex items-center justify-center">
      <Image
        className="rounded-full"
        alt={genre.name}
        src={genre.coverImagePath}
        width={150}
        height={150}
      />
    </div>
  );
};

export default GenreCircle;
