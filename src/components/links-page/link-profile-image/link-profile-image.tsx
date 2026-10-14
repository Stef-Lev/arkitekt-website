import Image from 'next/image';
import { Props } from './link-profile-image.types';
import styles from './link-profile-image.module.css';

const LinkProfileImage = ({ imageSrc, width = 120, height = 120 }: Props) => {
  if (!imageSrc) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <Image src={imageSrc} alt="" width={width} height={height} />
    </div>
  );
};

export default LinkProfileImage;
