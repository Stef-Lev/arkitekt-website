import Image from 'next/image';
import RevealEffect from '@/components/reveal-effect/reveal-effect';
import SpotifyBadge from '../spotify-badge/spotify-badge';
import { Props } from './music-tile.types';
import styles from './music-tile.module.css';

const MusicTile = ({ entity }: Props) => {
  const { image, id, url } = entity;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.link}
    >
      <RevealEffect className={styles.reveal}>
        <Image
          className={styles.cover}
          src={image}
          width={300}
          height={300}
          alt={id}
        />
        <SpotifyBadge className={styles.badgeVisibility} />
      </RevealEffect>
    </a>
  );
};

export default MusicTile;
