'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { cn } from '@/helpers/classnames';
import MusicTile from './music-tile';

interface Props {
  title: string;
  entities: {
    id: string;
    position: number;
    image: string;
    url: string;
    genre: string;
  }[];
}

const NewImagesContainer = ({ title, entities }: Props) => {
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

    const tiles = containerRef.current?.querySelectorAll('.float-up');
    tiles?.forEach((tile) => observer.observe(tile));

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
        {entities.map((entity) => (
          <MusicTile key={entity.id} entity={entity} />
        ))}
      </div>
    </div>
  );
};

export default NewImagesContainer;
