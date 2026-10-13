import { cn } from '@/helpers/classnames';
import content from '@/content/content';
import mediaComponents from '@/helpers/media-components';
import Link from 'next/link';
import styles from './social-media.module.css';

type Props = {
  className?: string;
};

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
