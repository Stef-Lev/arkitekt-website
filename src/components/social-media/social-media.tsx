import Link from 'next/link';
import { cn } from '@/helpers/classnames';
import mediaComponents from '@/helpers/media-components';
import content from '@/content/content';
import { Props } from './social-media.types';
import styles from './social-media.module.css';

const socialMediaArray = ['spotify', 'instagram', 'youtube'];

const SocialMedia = ({ className }: Props) => {
  const socialUrls = content.drawer.socialUrls;

  return (
    <div className={cn(styles.container, className)}>
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
