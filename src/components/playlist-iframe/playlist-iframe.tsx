import content from '@/content/content';
import { Props } from './playlist-iframe.types';
import styles from './playlist-iframe.module.css';

const PlaylistIframe = ({ url }: Props) => {
  if (!url) {
    return (
      <div className={styles.empty}>
        <p>{content.aboutPage.noPlaylistMessage}</p>
      </div>
    );
  }
  return (
    <div className={styles.wrapper}>
      <iframe
        className={styles.iframe}
        title="Genre playlist"
        src={url}
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default PlaylistIframe;
