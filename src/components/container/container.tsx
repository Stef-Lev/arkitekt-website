import { cn } from '@/helpers/classnames';
import { Props } from './container.types';
import styles from './container.module.css';

const Container = ({ children, className }: Props) => {
  return (
    <div className={cn(styles.container, styles.verticalPadding, className)}>
      {children}
    </div>
  );
};

export default Container;
