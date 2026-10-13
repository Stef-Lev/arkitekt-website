'use client';
import { useEffect, useMemo, useRef } from 'react';
import { cn } from '@/helpers/classnames';
import MusicTile from './music-tile';
import { Props } from './images-container.types';
import styles from './music-tile.module.css';

const ImagesContainer = ({ title, entities }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.revealed);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      },
    );

    const tiles = containerRef.current?.querySelectorAll('[data-reveal]');
    tiles?.forEach((tile) => observer.observe(tile));

    return () => observer.disconnect();
  }, []);

  const sortedEntities = useMemo(
    () => [...entities].sort((a, b) => a.position - b.position),
    [entities],
  );

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
        {sortedEntities.map((entity) => (
          <MusicTile key={entity.id} entity={entity} />
        ))}
      </div>
    </div>
  );
};

export default ImagesContainer;
