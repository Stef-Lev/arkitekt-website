import Link from 'next/link';
import mediaComponents from '@/helpers/media-components';
import content from '@/content/content';
import styles from './social-media.module.css';

const socialMediaArray = ['spotify', 'instagram', 'youtube'];

const SocialMedia = () => {
  const socialUrls = content.drawer.socialUrls;

  return (
    <div className={styles.container}>
      {socialMediaArray.map((item) => (
        <Link
          key={item}
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
          href={socialUrls[item as keyof typeof socialUrls]}
        >
          {mediaComponents[item]}
        </Link>
      ))}
    </div>
  );
};

export default SocialMedia;
