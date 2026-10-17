import { useMemo } from 'react';
import FadeInEffect from '@/components/fade-in-effect/fade-in-effect';
import MusicTile from '../music-tile/music-tile';
import { Props } from './images-container.types';
import styles from './images-container.module.css';

const ImagesContainer = ({ title, entities }: Props) => {
  const sortedEntities = useMemo(
    () => [...entities].sort((a, b) => a.position - b.position),
    [entities],
  );

  return (
    <div className={styles.wrapper}>
      <FadeInEffect variant="text">
        <h4 className={styles.title}>{title}</h4>
      </FadeInEffect>
      <div className={styles.list}>
        {sortedEntities.map((entity) => (
          <MusicTile key={entity.id} entity={entity} />
        ))}
      </div>
    </div>
  );
};

export default ImagesContainer;
