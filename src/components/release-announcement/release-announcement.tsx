'use client';
import Image from 'next/image';
import { useSyncExternalStore } from 'react';
import { FaSpotify, FaTimes } from 'react-icons/fa';
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
  const dismissalKey = `release-announcement-dismissed:${announcement.href}`;

  const isDismissed = useSyncExternalStore(
    subscribe,
    () => window.sessionStorage.getItem(dismissalKey) === 'true',
    () => true,
  );

  const dismissAnnouncement = () => {
    window.sessionStorage.setItem(dismissalKey, 'true');
    listeners.forEach((listener) => listener());
  };

  if (!announcement.enabled || isDismissed) {
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
          width={96}
          height={96}
        />
        <div className={styles.copy}>
          <p className={styles.label}>{announcement.label}</p>
          <h2 className={styles.title} id="release-announcement-title">
            {announcement.title}
          </h2>
          <p className={styles.description}>{announcement.description}</p>
        </div>
        <a
          className={styles.listenLink}
          href={announcement.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSpotify aria-hidden="true" />
          <span>Listen on Spotify</span>
        </a>
        <button
          className={styles.dismissButton}
          type="button"
          onClick={dismissAnnouncement}
          aria-label="Dismiss release announcement"
        >
          <FaTimes aria-hidden="true" />
        </button>
      </div>
    </section>
  );
};

export default ReleaseAnnouncement;
