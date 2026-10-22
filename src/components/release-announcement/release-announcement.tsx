import Image from 'next/image';
import { FaSpotify } from 'react-icons/fa';
import content from '@/content/content';
import styles from './release-announcement.module.css';

const ReleaseAnnouncement = () => {
  const announcement = content.homePage.releaseAnnouncement;

  if (!announcement.enabled) {
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
      </div>
    </section>
  );
};

export default ReleaseAnnouncement;
