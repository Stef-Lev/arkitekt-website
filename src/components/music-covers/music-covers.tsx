'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import ImagesContainer from './images-container';
import { cn } from '@/helpers/classnames';

interface Platform {
  image: string;
  url: string;
}

interface Images {
  singles: string[];
  albums: string[];
}
interface Props {
  spotify: Platform;
  images: Images;
  platforms: Platform[];
}

const MusicCovers = ({ images, spotify, platforms }: Props) => {
  const router = useRouter();
  return (
    <div className="text-white text-center">
      <div className="flex flex-col items-center mb-8">
        <h3 className="text-[24px] mb-2">Stream my full collection on</h3>
        <Image
          className="hover:cursor-pointer"
          src={spotify.image}
          alt="spotify logo"
          width={200}
          height={200}
          onClick={() => router.push(spotify.url)}
        />
      </div>
      <ImagesContainer title="Singles" images={images.singles} />
      <ImagesContainer title="Albums" images={images.albums} />
      <div className="flex flex-col items-center my-20">
        <h5 className="text-[18px] mb-8 md:mb-2">Also available on</h5>
        <div
          className={cn(
            'flex items-center',
            'flex-col md:flex-row',
            'gap-8 md:gap-5',
          )}
        >
          {platforms.length > 0 &&
            platforms.map((item) => (
              <Image
                className="hover:cursor-pointer"
                key={item.image}
                src={item.image}
                alt="spotify logo"
                width={100}
                height={50}
                onClick={() => router.push(item.url)}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MusicCovers;
