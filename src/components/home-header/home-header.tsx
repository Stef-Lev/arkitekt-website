'use client';
import Image from 'next/legacy/image';
import { cn } from '@/helpers/classnames';
import content from '@/content/content';

const HomeHeader = () => {
  const { subtitle } = content.homePage;

  return (
    <div
      className={cn(
        'relative',
        'h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]',
        'flex justify-center',
      )}
    >
      <video
        src="/videos/hero_video.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        className="absolute inset-0 z-0 h-full w-full object-center object-cover"
      />

      <div className="absolute inset-0 z-[1] bg-black/50" aria-hidden="true" />

      <div className="relative z-[2] flex flex-col justify-center items-center w-full gap-12">
        <div className="relative aspect-[55/32] w-[200px] md:w-[300px] lg:w-[400px]">
          <Image
            className={cn('z-[1] relative')}
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
