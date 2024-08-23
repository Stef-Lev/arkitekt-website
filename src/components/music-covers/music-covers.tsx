'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface Platform {
  image: string;
  url: string;
}
interface Props {
  spotify: Platform;
  images: string[];
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
      <div className="flex gap-4 flex-wrap justify-center items-center">
        {images.map((single) => (
          <Image
            key={single}
            className="hover:cursor-pointer rounded-lg"
            src={`/musicPage/singles/${single}.jpg`}
            width={300}
            height={300}
            alt={`${single} cover`}
          />
        ))}
      </div>
      <div className="flex flex-col items-center mt-8">
        <h4 className="text-[18px] mb-8 md:mb-2">Also available on</h4>
        <div className="flex flex-col md:flex-row gap-8 md:gap-5 items-center">
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
