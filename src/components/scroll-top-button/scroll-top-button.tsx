'use client';
import { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';
import { cn } from '@/helpers/classnames';
import { scrollTo } from '@/helpers/scroll-to';
import styles from './scroll-top-button.module.css';

const ScrollTopButton = () => {
  const [opacity, setOpacity] = useState<number>(0);
  const ScrollStart = 700;
  const ScrollEnd = 900;

  const handleScrollTop = () => {
    scrollTo(0);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Ensure window is defined
      const handleScroll = () => {
        const scrollY = window.scrollY;

        if (scrollY <= ScrollStart) {
          setOpacity(0);
        } else if (scrollY >= ScrollEnd) {
          setOpacity(1);
        } else {
          const calculatedOpacity =
            (scrollY - ScrollStart) / (ScrollEnd - ScrollStart);
          setOpacity(calculatedOpacity);
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <div
      className={cn(styles.container, [
        opacity === 0,
        styles.hidden,
        styles.visible,
      ])}
      style={{ opacity }}
    >
      <div>
        <button
          type="button"
          className={styles.button}
          onClick={handleScrollTop}
          aria-label="Scroll to top"
        >
          <FiArrowUp size="30px" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

export default ScrollTopButton;
