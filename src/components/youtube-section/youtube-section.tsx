import YoutubeIframe from '../youtube-iframe/youtube-iframe';
import RevealEffect from '../reveal-effect/reveal-effect';
import { Props } from './youtube-section.types';
import styles from './youtube-section.module.css';

const YoutubeSection = ({ videoIds }: Props) => {
  return (
    <div className={styles.grid}>
      {videoIds.map((id) => (
        <RevealEffect key={id} hoverEffect={false}>
          <YoutubeIframe videoId={id} />
        </RevealEffect>
      ))}
    </div>
  );
};

export default YoutubeSection;
