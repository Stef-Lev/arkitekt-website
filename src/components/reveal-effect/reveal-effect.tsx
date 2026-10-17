'use client';
import { useEffect, useRef } from 'react';
import { cn } from '@/helpers/classnames';
import { Props } from './reveal-effect.types';
import styles from './reveal-effect.module.css';

const RevealEffect = ({ children, className }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(styles.revealed);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn(styles.root, className)}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default RevealEffect;
