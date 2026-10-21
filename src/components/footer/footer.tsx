import { FaHeart } from 'react-icons/fa';
import SocialMedia from '@/components/social-media/social-media';
import content from '@/content/content';
import styles from './footer.module.css';

const Footer = () => {
  const { madeWith, madeBy, copyright } = content.footer;

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div>
          <div className={styles.credit}>
            {madeWith}{' '}
            <div className={styles.heart}>
              <FaHeart />
            </div>{' '}
            {madeBy}
          </div>
          <div className={styles.copyright}>{copyright}</div>
        </div>
        <SocialMedia />
      </div>
    </footer>
  );
};

export default Footer;
