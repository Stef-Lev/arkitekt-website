import Image from 'next/image';
import { cn } from '@/helpers/classnames';
import SpotifyBadge from './spotify-badge';
import { Props } from './music-tile.types';
import styles from './music-tile.module.css';

// Add filters per genre

const MusicTile = ({ entity, className }: Props) => {
  const { image, id, url } = entity;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(styles.link, className)}
      data-reveal=""
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
