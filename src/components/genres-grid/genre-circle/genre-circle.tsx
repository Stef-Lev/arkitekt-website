import Image from 'next/image';
import { Props } from './genre-circle.types';
import styles from './genre-circle.module.css';

const GenreCircle = ({ genre }: Props) => {
  if (!genre.coverImagePath || !genre.playlistUrl) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <Image
        className={styles.image}
        alt={genre.name}
        src={genre.coverImagePath}
        width={150}
        height={150}
      />
    </div>
  );
};

export default GenreCircle;
