'use client';
import { FaHeart } from 'react-icons/fa';
import SocialMedia from '@/components/social-media/social-media';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.info}>
        <div>
          <div className={styles.credits}>
            Made with{' '}
            <div className={styles.heart}>
              <FaHeart />
            </div>{' '}
            by Arkitekt
          </div>
          <div className={styles.subtitle}>
            © 2024 Arkitekt. All rights reserved.
          </div>
        </div>
        <SocialMedia />
      </div>
    </footer>
  );
};

export default Footer;
