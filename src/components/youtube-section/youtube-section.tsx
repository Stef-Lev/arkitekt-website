import YoutubeIframe from '../youtube-iframe/youtube-iframe';
import { Props } from './youtube-section.types';
import styles from './youtube-section.module.css';

const YoutubeSection = ({ title, videoIds }: Props) => {
  return (
    <div>
      <div className={styles.title}>{title && <h4>{title}</h4>}</div>
      <div className={styles.grid}>
        {videoIds.map((id) => (
          <YoutubeIframe key={id} videoId={id} />
        ))}
      </div>
    </div>
  );
};

export default YoutubeSection;
