import { Props } from './playlist-iframe.types';
import styles from './playlist-iframe.module.css';

const PlaylistIframe = ({ url }: Props) => {
  if (!url) {
    return (
      <div className={styles.empty}>
        <p>
          No beats available for this genre at the moment, but there will be in
          the future. Stay tuned!
        </p>
      </div>
    );
  }
  return (
    <div className={styles.wrapper}>
      <iframe
        className={styles.iframe}
        src={url}
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default PlaylistIframe;
