'use client';
import Image from 'next/image';

interface Props {
  images: string[];
}

const MusicCovers = ({ images }: Props) => {
  return (
    <div className="flex gap-4 flex-wrap justify-center items-center">
      {images.map((single) => (
        <Image
          key={single}
          src={`/musicPage/singles/${single}.jpg`}
          width={300}
          height={300}
          alt={`${single} cover`}
          style={{ borderRadius: '10px' }}
        />
      ))}
    </div>
  );
};

export default MusicCovers;
