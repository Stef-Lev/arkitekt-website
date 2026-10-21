import styles from './spotify-preview.module.css';

const SpotifyPreview = () => {
  return (
    <div className={styles.wrapper}>
      <iframe
        className={styles.embed}
        src="https://open.spotify.com/embed/artist/4K9zGLF4CT5HYDNQ9pT3Y8?utm_source=generator&theme=0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default SpotifyPreview;
