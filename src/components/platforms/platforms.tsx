import Image from 'next/image';
import FadeInEffect from '@/components/fade-in-effect/fade-in-effect';
import content from '@/content/content';
import { Props } from './platforms.types';
import styles from './platforms.module.css';

const Platforms = ({ platforms, onClick }: Props) => {
  return (
    <div className={styles.wrapper}>
      <FadeInEffect variant="text">
        <h5 className={styles.title}>{content.musicPage.platformsTitle}</h5>
      </FadeInEffect>
      <div className={styles.list}>
        {platforms.length > 0 &&
          platforms.map((item) => (
            <FadeInEffect variant="image" key={item.image}>
              <div className={styles.slot}>
                <Image
                  className={styles.logo}
                  src={item.image}
                  alt={`${item.name} logo`}
                  width={item.width}
                  height={item.height}
                  onClick={() => onClick(item.url)}
                />
              </div>
            </FadeInEffect>
          ))}
      </div>
    </div>
  );
};

export default Platforms;
