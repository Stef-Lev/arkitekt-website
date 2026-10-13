import YoutubeIframe from '../youtube-iframe/youtube-iframe';
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
            <YoutubeIframe key={videoId} videoId={videoId} />
          ))}
        </div>
        <div className={styles.linkRow}>
          <a href={linkHref}>{linkText}</a>
        </div>
      </Container>
    </div>
  );
};

export default Featured;
