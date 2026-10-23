'use client';

import { useSyncExternalStore } from 'react';
import Image from 'next/image';
import { IoClose } from 'react-icons/io5';
import content from '@/content/content';
import styles from './release-announcement.module.css';

const listeners = new Set<() => void>();

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};

const ReleaseAnnouncement = () => {
  const announcement = content.homePage.releaseAnnouncement;
  const storageKey = `release-announcement-dismissed:${announcement.href}`;

  // Server snapshot is "dismissed" so the banner never flashes before hydration
  const dismissed = useSyncExternalStore(
    subscribe,
    () => window.sessionStorage.getItem(storageKey) === 'true',
    () => true,
  );

  const dismiss = () => {
    window.sessionStorage.setItem(storageKey, 'true');
    listeners.forEach((listener) => listener());
  };

  if (!announcement.enabled || dismissed) {
    return null;
  }

  return (
    <section
      className={styles.announcement}
      aria-labelledby="release-announcement-title"
    >
      <div className={styles.inner}>
        <Image
          className={styles.cover}
          src={announcement.image}
          alt={`${announcement.title} cover`}
          width={56}
          height={56}
        />
        <div className={styles.copy}>
          <h2 className={styles.title} id="release-announcement-title">
            {announcement.title}
          </h2>
          <p className={styles.description}>{announcement.description}</p>
        </div>
        <button
          type="button"
          className={styles.close}
          aria-label="Dismiss release announcement"
          onClick={dismiss}
        >
          <IoClose aria-hidden="true" />
        </button>
      </div>
    </section>
  );
};

export default ReleaseAnnouncement;
