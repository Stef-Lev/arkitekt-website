'use client';
import { cn } from '@/helpers/classnames';
import Image from 'next/image';

interface Props {
  aboutText: string;
}

const AboutSection = ({ aboutText }: Props) => {
  return (
    <div className={cn('flex flex-col lg:flex-row', 'h-full p-4 gap-6')}>
      <div
        className={cn(
          'flex justify-center items-center',
          'flex-[35%] md:flex-[45%] lg:flex-[35%]',
          'h-full',
        )}
      >
        <Image
          className="rounded-md"
          width={384}
          height={576}
          src="/arkitekt.png"
          alt="arkitekt photo"
          quality={100}
        />
      </div>
      <div
        className={cn(
          'flex-[65%] md:flex-[55%] lg:flex-[65%]',
          'h-full text-white',
          'text-[22px] lg:text-[30px]',
        )}
      >
        <p>{aboutText}</p>
      </div>
    </div>
  );
};

export default AboutSection;
