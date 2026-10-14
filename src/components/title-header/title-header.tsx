import Image from 'next/legacy/image';
import Container from '@/components/container/container';
import { Props } from './title-header.types';
import styles from './title-header.module.css';

const TitleHeader = ({ title }: Props) => {
  return (
    <div className={styles.header}>
      <Image
        src={`/${title.toLowerCase()}-background.jpg`}
        alt={`${title} page`}
        layout="fill"
        className={styles.image}
      />
      <div className={styles.overlay} />
      <Container className={styles.container}>
        <h2>{title}</h2>
      </Container>
    </div>
  );
};

export default TitleHeader;
