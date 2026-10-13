'use client';
import { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';
import { cn } from '@/helpers/classnames';
import styles from './scroll-top-button.module.css';

const ScrollTopButton = () => {
  const [opacity, setOpacity] = useState<number>(0);
  const ScrollStart = 700;
  const ScrollEnd = 900;

  const handleScrollTop = () => {
    if (typeof window !== 'undefined') {
      const scrollDuration = 500;
      const scrollStep = -window.scrollY / (scrollDuration / 15);

      const smoothScroll = () => {
        if (window.scrollY !== 0) {
          window.scrollBy(0, scrollStep);
          requestAnimationFrame(smoothScroll);
        }
      };

      requestAnimationFrame(smoothScroll);
    }
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
        <div className={styles.button} onClick={handleScrollTop}>
          <FiArrowUp size="30px" />
        </div>
      </div>
    </div>
  );
};

export default ScrollTopButton;
