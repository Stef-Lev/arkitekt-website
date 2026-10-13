import { cn } from '@/helpers/classnames';
import styles from './hamburger-button.module.css';

type Props = {
  className?: string;
  isDrawerOpen: boolean;
  onClick: () => void;
};

const HamburgerButton = ({ isDrawerOpen, onClick, className }: Props) => {
  return (
    <div onClick={onClick} className={cn(styles.container, className)}>
      <span
        className={cn(styles.line, styles.topLine, [
          isDrawerOpen,
          styles.open,
          styles.closed,
        ])}
      ></span>
      <span
        className={cn(styles.line, styles.middleLine, [
          isDrawerOpen,
          styles.hidden,
          styles.visible,
        ])}
      ></span>
      <span
        className={cn(styles.line, styles.bottomLine, [
          isDrawerOpen,
          styles.open,
          styles.closed,
        ])}
      ></span>
    </div>
  );
};

export default HamburgerButton;
