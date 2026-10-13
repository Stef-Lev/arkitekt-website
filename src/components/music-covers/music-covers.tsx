'use client';
import { useRouter } from 'next/navigation';
import content from '@/content/content';
import Image from 'next/image';
import ImagesContainer from './images-container';
import Platforms from '../platforms/platforms';
import { Props } from './music-covers.types';
// import MusicTile from './music-tile';

const MusicCovers = ({ images, spotify, platforms }: Props) => {
  const router = useRouter();

  const handleClick = (url: string) => {
    router.push(url);
  };

  return (
    <div className="text-white text-center">
      <div className="flex flex-col items-center mb-8">
        <h3 className="text-[24px] mb-2">{content.musicPage.subtitle}</h3>
        <Image
          className="hover:cursor-pointer"
          src={spotify.image}
          alt="spotify logo"
          width={200}
          height={60}
          onClick={() => handleClick(spotify.url)}
        />
      </div>
      <ImagesContainer
        title="Albums and EPs"
        entities={content.musicPage.albums}
      />
      <ImagesContainer title="Singles" entities={content.musicPage.singles} />
      <Platforms platforms={platforms} onClick={handleClick} />
    </div>
  );
};

export default MusicCovers;
