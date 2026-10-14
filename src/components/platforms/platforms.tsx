import Image from 'next/image';
import { Props } from './platforms.types';
import styles from './platforms.module.css';

const Platforms = ({ platforms, onClick }: Props) => {
  return (
    <div className={styles.wrapper}>
      <h5 className={styles.title}>Also available on</h5>
      <div className={styles.list}>
        {platforms.length > 0 &&
          platforms.map((item) => (
            <Image
              className={styles.logo}
              key={item.image}
              src={item.image}
              alt={`${item.name} logo`}
              width={item.width}
              height={item.height}
              onClick={() => onClick(item.url)}
            />
          ))}
      </div>
    </div>
  );
};

export default Platforms;
