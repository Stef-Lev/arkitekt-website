import Image from 'next/image';
import { cn } from '@/helpers/classnames';
import { useState } from 'react';

type Props = {
  className?: string;
  entity: {
    id: string;
    position: number;
    image: string;
    trackId: string;
    genre: string;
  };
};

// Add filters per genre

const MusicTile = ({ entity }: Props) => {
  const { image, id, trackId } = entity;
  const [open, setOpen] = useState(false);
  console.log(image, id, trackId);

  return (
    <>
      <Image
        className={cn(
          'float-up rounded-lg',
          'opacity-0 transform translate-y-10 transition duration-700 ease-out',
        )}
        src={image}
        width={300}
        height={300}
        alt={id}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div>
          <iframe
            data-testid="embed-iframe"
            style={{ borderRadius: '12px' }}
            src={`https://open.spotify.com/embed/track/${trackId}?utm_source=generator`}
            width="300"
            height="300"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      )}
    </>
  );
};

export default MusicTile;
