'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaSpotify, FaTimes } from 'react-icons/fa';
import content from '@/content/content';
import styles from './release-announcement.module.css';

const ReleaseAnnouncement = () => {
  const announcement = content.homePage.releaseAnnouncement;
  const dismissalKey = `release-announcement-dismissed:${announcement.href}`;
  const [isDismissed, setIsDismissed] = useState(false);
  const [hasCheckedDismissal, setHasCheckedDismissal] = useState(false);

  useEffect(() => {
    setIsDismissed(window.sessionStorage.getItem(dismissalKey) === 'true');
    setHasCheckedDismissal(true);
  }, [dismissalKey]);

  const dismissAnnouncement = () => {
    window.sessionStorage.setItem(dismissalKey, 'true');
    setIsDismissed(true);
  };

  if (!announcement.enabled || !hasCheckedDismissal || isDismissed) {
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
