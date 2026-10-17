'use client';
import Image from 'next/image';
import FadeInEffect from '@/components/fade-in-effect/fade-in-effect';
import { Props } from './about-section.types';
import styles from './about-section.module.css';

const AboutSection = ({ aboutText }: Props) => {
  return (
    <div className={styles.container}>
      <FadeInEffect variant="image" className={styles.imageFrame}>
        {/* TODO: change about page photo (redesign) */}
        <Image
          className={styles.image}
          width={3000}
          height={3000}
          src="/about-test.jpg"
          alt="arkitekt photo"
          quality={100}
        />
      </FadeInEffect>
      <FadeInEffect variant="text" className={styles.copy}>
        <p>{aboutText}</p>
      </FadeInEffect>
    </div>
  );
};

export default AboutSection;
