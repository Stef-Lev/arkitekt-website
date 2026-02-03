import Image from 'next/image';
import { cn } from '@/helpers/classnames';

type Props = {
  className?: string;
  entity: {
    id: string;
    position: number;
    image: string;
    url: string;
    genre: string;
  };
};

// Add filters per genre

const MusicTile = ({ entity, className }: Props) => {
  const { image, id, url } = entity;
  console.log(image, id, url);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn('inline-block', className)}
    >
      <Image
        className={cn(
          'float-up rounded-lg cursor-pointer',
          'opacity-0 transform translate-y-10 transition duration-700 ease-out',
        )}
        src={image}
        width={300}
        height={300}
        alt={id}
      />
    </a>
  );
};

export default MusicTile;
