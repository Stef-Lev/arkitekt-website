import Image from 'next/image';
import FadeInEffect from '@/components/fade-in-effect/fade-in-effect';
import YoutubeIframe from '../youtube-iframe/youtube-iframe';
import RevealEffect from '../reveal-effect/reveal-effect';
import Container from '../container/container';
import content from '@/content/content';
import styles from './featured.module.css';

const Featured = () => {
  const { ids, title, linkText, linkHref } = content.homePage.featuredVideos;

  return (
    <div className={styles.section}>
      <Container>
        <FadeInEffect variant="text">
          <h4 className={styles.heading}>{title}</h4>
        </FadeInEffect>
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
          <FadeInEffect variant="text">
            <a
              href={linkHref}
              className={styles.channelCard}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FadeInEffect variant="image">
                <Image
                  className={styles.channelImage}
                  src="/links/arkitekt.jpg"
                  alt=""
                  width={64}
                  height={64}
                />
              </FadeInEffect>
              <span className={styles.channelText}>{linkText}</span>
            </a>
          </FadeInEffect>
        </div>
      </Container>
    </div>
  );
};

export default Featured;
