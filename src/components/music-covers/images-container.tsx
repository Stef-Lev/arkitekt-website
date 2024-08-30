'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { cn } from '@/helpers/classnames';

interface Props {
  title: string;
  images: string[];
}

const ImagesContainer = ({ title, images }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      },
    );

    const images = containerRef.current?.querySelectorAll('.float-up');
    images?.forEach((image) => observer.observe(image));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h4 className="text-[32px] pb-4">{title}</h4>
      <div
        ref={containerRef}
        className={cn(
          'flex flex-wrap',
          'justify-center items-center',
          'gap-4 mb-10',
        )}
      >
        {images.map((image) => (
          <Image
            key={image}
            className={cn(
              'float-up rounded-lg',
              'opacity-0 transform translate-y-10 transition duration-700 ease-out',
            )}
            src={image}
            width={300}
            height={300}
            alt={image}
          />
        ))}
      </div>
    </div>
  );
};

export default ImagesContainer;
