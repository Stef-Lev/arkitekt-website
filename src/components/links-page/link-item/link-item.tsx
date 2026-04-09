import type { LinkType } from '@/content/types';
import Image from 'next/image';
import { FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';
import styles from './link-item.module.css';

export type Props = {
  link: LinkType;
};

const LinkItem = ({ link }: Props) => {
  return (
    <Link
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.link}
    >
      <Image
        src={link.image}
        alt={link.title}
        width={40}
        height={40}
        className={styles.linkImage}
      />
      <div className={styles.info}>
        <div className={styles.title}>{link.title}</div>
        {link.subtitle && (
          <div className={styles.subtitle}>{link.subtitle}</div>
        )}
      </div>

      <div className={styles.ghostBox}>
        <FaChevronRight />
      </div>
    </Link>
  );
};

export default LinkItem;
