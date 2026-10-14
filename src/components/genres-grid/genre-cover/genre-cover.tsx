import Image from 'next/image';
import { Props } from './genre-cover.types';
import styles from './genre-cover.module.css';

const GenreCover = ({ genre, onClick }: Props) => {
  if (!genre.coverImagePath || !genre.playlistUrl) {
    return null;
  }

  return (
    <span className={styles.artwork} onClick={() => onClick(genre.playlistUrl)}>
      <Image
        className={styles.cover}
        alt={genre.name}
        src={genre.coverImagePath}
        width={350}
        height={350}
      />
    </span>
  );
};

export default GenreCover;
