'use client';
import Image from 'next/legacy/image';
import { cn } from '@/helpers/classnames';
import content from '@/content/content';

const HomeHeader = () => {
  const { subtitle } = content.homePage;
  return (
    <div className={cn('relative h-[400px]', 'flex justify-center')}>
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
        className="z-0 opacity-60 object-top object-cover grayscale"
        alt="hero photo"
      />
      <div className="flex flex-col justify-center items-center w-full gap-12">
        <div className="relative aspect-[55/32] w-[300px] md:w-[400px]">
          <Image
            className="z-[1] relative"
            layout="fill"
            objectFit="contain"
            src="/arkitekt-logo.png"
            alt="arkitekt logo"
          />
        </div>
        <p className="z-[1] text-[20px] md:text-[26px] text-white">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default HomeHeader;
