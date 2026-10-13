'use client';
import Image from 'next/legacy/image';
import content from '@/content/content';
import styles from './home-header.module.css';

const HomeHeader = () => {
  const { subtitle } = content.homePage;

  return (
    <div className={styles.homeHeader}>
      <video
        src="/videos/hero_video.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        className={styles.video}
      />

      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.content}>
        <div className={styles.logo}>
          <Image
            layout="fill"
            objectFit="contain"
            src="/arkitekt-logo.png"
            alt="arkitekt logo"
          />
        </div>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </div>
  );
};

export default HomeHeader;
