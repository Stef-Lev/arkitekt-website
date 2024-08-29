'use client';
import Image from 'next/legacy/image';
import { cn } from '@/helpers/classnames';

const HomeHeader = () => {
  return (
    <div
      className={cn(
        'home-spotify-iframe',
        'relative h-[520px] py-10',
        'flex justify-center',
      )}
    >
      <div
        className={cn(
          'absolute top-0 left-0',
          'w-full h-full z-[1]',
          'bg-mainBlue mix-blend-multiply',
        )}
      ></div>
      <Image
        src="/main-photo.jpg"
        layout="fill"
        className="z-0 opacity-60 object-center object-cover grayscale"
        alt="hero photo"
      />
      <div className="flex flex-col justify-center items-center w-full">
        <div className="relative aspect-[32/55] w-full max-w-[256px] w-full">
          <Image
            className="z-[1] aspect-[32/55]"
            layout="fill"
            objectFit="contain"
            src="/arkitekt-logo.png"
            alt="arkitekt logo"
          />
        </div>
        <div className="z-[1] text-[60px] text-white">BUILDING URBAN BEATS</div>
      </div>
    </div>
  );
};

export default HomeHeader;
