'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { cn } from '@/helpers/classnames';
import SpotifyBadge from '../spotify-badge/spotify-badge';
import { Props } from './music-tile.types';
import styles from './music-tile.module.css';

// Add filters per genre

const MusicTile = ({ entity, className }: Props) => {
  const { image, id, url } = entity;
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const link = linkRef.current;
    if (!link) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          link.classList.add(styles.revealed);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(link);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      ref={linkRef}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(styles.link, className)}
    >
      <span className={styles.artwork}>
        <Image
          className={styles.cover}
          src={image}
          width={300}
          height={300}
          alt={id}
        />
      </span>
      <SpotifyBadge className={styles.badgeVisibility} />
    </a>
  );
};

export default MusicTile;
