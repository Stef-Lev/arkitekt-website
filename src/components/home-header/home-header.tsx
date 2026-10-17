'use client';
import Image from 'next/image';
import FadeInEffect from '@/components/fade-in-effect/fade-in-effect';
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
          <FadeInEffect variant="image">
            <Image
              fill
              sizes="(min-width: 1024px) 400px, (min-width: 768px) 300px, 200px"
              priority
              style={{ objectFit: 'contain' }}
              src="/arkitekt-logo.png"
              alt="arkitekt logo"
            />
          </FadeInEffect>
        </div>
        <FadeInEffect variant="text">
          <p className={styles.subtitle}>{subtitle}</p>
        </FadeInEffect>
      </div>
    </div>
  );
};

export default HomeHeader;
