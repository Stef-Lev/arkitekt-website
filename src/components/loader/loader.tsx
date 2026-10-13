import { cn } from '@/helpers/classnames';
import { Props } from './loader.types';
import styles from './loader.module.css';

const Loader = ({ size, animation = 'fade' }: Props) => {
  return (
    <div className={styles.overlay}>
      <div
        className={cn(styles.loader, [animation === 'fade', 'fade', 'rotate'])}
        style={{ width: size, height: size }}
      ></div>
    </div>
  );
};

export default Loader;
