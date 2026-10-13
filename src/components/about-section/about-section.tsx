'use client';
import Image from 'next/image';
import { Props } from './about-section.types';
import styles from './about-section.module.css';

const AboutSection = ({ aboutText }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageFrame}>
        <Image
          className={styles.image}
          width={3000}
          height={3000}
          src="/about-test.jpg"
          alt="arkitekt photo"
          quality={100}
        />
      </div>
      <div className={styles.copy}>
        <p>{aboutText}</p>
      </div>
    </div>
  );
};

export default AboutSection;
