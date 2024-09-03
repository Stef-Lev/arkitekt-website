'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import ImagesContainer from './images-container';
import Platforms from '../platforms/platforms';

export interface Platform {
  name: string;
  height: number;
  width: number;
  image: string;
  url: string;
}

interface Images {
  singles: string[];
  albums: string[];
}
interface Props {
  spotify: Pick<Platform, 'url' | 'image'>;
  images: Images;
  platforms: Platform[];
}

const MusicCovers = ({ images, spotify, platforms }: Props) => {
  const router = useRouter();
  const handleClick = (url: string) => {
    router.push(url);
  };
  return (
    <div className="text-white text-center">
      <div className="flex flex-col items-center mb-8">
        <h3 className="text-[24px] mb-2">Stream my full collection on</h3>
        <Image
          className="hover:cursor-pointer"
          src={spotify.image}
          alt="spotify logo"
          width={200}
          height={60}
          onClick={() => handleClick(spotify.url)}
        />
      </div>
      <ImagesContainer title="Singles" images={images.singles} />
      <ImagesContainer title="Albums" images={images.albums} />
      <Platforms platforms={platforms} onClick={handleClick} />
    </div>
  );
};

export default MusicCovers;
