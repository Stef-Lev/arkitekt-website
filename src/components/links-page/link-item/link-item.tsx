import Image from 'next/image';
import { FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';
import { Props } from './link-item.types';
import styles from './link-item.module.css';

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
        alt=""
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
