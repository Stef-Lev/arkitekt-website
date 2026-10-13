import { cn } from '@/helpers/classnames';
import styles from './loader.module.css';

type Props = {
  size: number;
  animation?: 'fade' | 'rotate';
};

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
