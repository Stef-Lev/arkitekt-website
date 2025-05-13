'use client';
import Image from 'next/legacy/image';
import { cn } from '@/helpers/classnames';
import content from '@/content/content';
import { useIsMobile } from '@/hooks/useIsMobile';

const HomeHeader = () => {
  const { subtitle } = content.homePage;
  const isMobile = useIsMobile();
  const imageSrc = isMobile
    ? '/main-test_mobile.jpg'
    : '/main-test_desktop.jpg';

  return (
    <div
      className={cn('relative h-[calc(100dvh-5rem)]', 'flex justify-center')}
    >
      <div
        className={cn(
          'absolute top-0 left-0',
          'w-full h-full z-[1]',
          'bg-mainBlue mix-blend-multiply',
        )}
      ></div>
      <Image
        src="/main-test.jpg"
        layout="fill"
        className="z-0 opacity-60 object-center object-cover grayscale"
        alt="hero photo"
      />
      <div className="absolute bottom-[calc(100dvh - 30px)] flex flex-col justify-center items-center w-full gap-12">
        <div className="relative aspect-[55/32] w-[300px] md:w-[400px]">
          <Image
            className="z-[1] relative"
            layout="fill"
            objectFit="contain"
            src="/arkitekt-logo.png"
            alt="arkitekt logo"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
