import { cn } from '@/helpers/classnames';
import { Props } from './tile.types';
import styles from './tile.module.css';

const Tile = ({ onClick, genre, isInteractive = false }: Props) => {
  const handleClick = () => {
    if (isInteractive) {
      return onClick(genre.id);
    }
    return;
  };

  return (
    <div
      className={cn(styles.tile, [isInteractive, styles.interactive])}
      onClick={handleClick}
    >
      <div className={styles.icon}>{genre.icon}</div>
      <p className={styles.name}>{genre.name}</p>
    </div>
  );
};

export default Tile;
