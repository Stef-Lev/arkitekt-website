import { cn } from '@/helpers/classnames';
import { Props } from './hamburger-button.types';
import styles from './hamburger-button.module.css';

const HamburgerButton = ({ isDrawerOpen, onClick, className }: Props) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(styles.container, className)}
      aria-label={isDrawerOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isDrawerOpen}
      aria-controls="mobile-navigation"
    >
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
    </button>
  );
};

export default HamburgerButton;
