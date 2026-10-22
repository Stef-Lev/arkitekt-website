'use client';

import type { MouseEvent } from 'react';
import { LuMouse } from 'react-icons/lu';
import { scrollTo } from '@/helpers/scroll-to';
import styles from './home-header.module.css';

const HeroScrollLink = () => {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const target = document.getElementById('home-content');

    if (!target) return;

    event.preventDefault();
    scrollTo(target.getBoundingClientRect().top + window.scrollY, 900);

    if (window.location.hash !== '#home-content') {
      window.history.pushState(window.history.state, '', '#home-content');
    }
  };

  return (
    <a
      href="#home-content"
      className={styles.scrollIndicator}
      aria-label="Scroll to more content"
      title="Scroll to more content"
      onClick={handleClick}
    >
      <LuMouse
        className={styles.scrollMouse}
        strokeWidth={1}
        aria-hidden="true"
      />
      <span className={styles.scrollLabel}>Scroll</span>
    </a>
  );
};

export default HeroScrollLink;
