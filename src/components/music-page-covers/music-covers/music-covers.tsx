'use client';
import { useRouter } from 'next/navigation';
import content from '@/content/content';
import Image from 'next/image';
import ImagesContainer from '../images-container/images-container';
import Platforms from '../../platforms/platforms';
import FadeInEffect from '@/components/fade-in-effect/fade-in-effect';
import { Props } from './music-covers.types';
import styles from './music-covers.module.css';

const MusicCovers = ({ images, spotify, platforms }: Props) => {
  const router = useRouter();

  const handleClick = (url: string) => {
    router.push(url);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <FadeInEffect variant="text">
          <h3 className={styles.subtitle}>{content.musicPage.subtitle}</h3>
        </FadeInEffect>
        <FadeInEffect variant="image">
          <Image
            className={styles.spotifyLogo}
            src={spotify.image}
            alt="spotify logo"
            width={200}
            height={60}
            onClick={() => handleClick(spotify.url)}
          />
        </FadeInEffect>
      </div>
      <ImagesContainer
        title={content.musicPage.albumsTitle}
        entities={content.musicPage.albums}
      />
      <ImagesContainer
        title={content.musicPage.singlesTitle}
        entities={content.musicPage.singles}
      />
      <Platforms platforms={platforms} onClick={handleClick} />
    </div>
  );
};

export default MusicCovers;
