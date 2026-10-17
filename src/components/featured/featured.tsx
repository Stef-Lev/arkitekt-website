import Image from 'next/image';
import YoutubeIframe from '../youtube-iframe/youtube-iframe';
import RevealEffect from '../reveal-effect/reveal-effect';
import content from '@/content/content';
import Container from '../container/container';
import styles from './featured.module.css';

const Featured = () => {
  const { ids, title, linkText, linkHref } = content.homePage.featuredVideos;

  return (
    <div className={styles.section}>
      <Container>
        <h4 className={styles.heading}>{title}</h4>
        <div className={styles.videos}>
          {ids.map((videoId) => (
            <RevealEffect
              key={videoId}
              className={styles.reveal}
              hoverEffect={false}
            >
              <YoutubeIframe videoId={videoId} />
            </RevealEffect>
          ))}
        </div>
        <div className={styles.linkRow}>
          <a
            href={linkHref}
            className={styles.channelCard}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.channelImage}
              src="/links/arkitekt.jpg"
              alt=""
              width={64}
              height={64}
            />
            <span className={styles.channelText}>{linkText}</span>
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Featured;
