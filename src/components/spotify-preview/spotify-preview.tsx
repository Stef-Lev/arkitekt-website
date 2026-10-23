import FadeInEffect from '@/components/fade-in-effect/fade-in-effect';
import Container from '../container/container';
import content from '@/content/content';
import styles from './spotify-preview.module.css';

const SpotifyPreview = () => {
  const { title } = content.homePage.spotifyPreview;

  return (
    <section className={styles.section} aria-label={title}>
      <Container>
        <FadeInEffect variant="text">
          <h4 className={styles.heading}>{title}</h4>
        </FadeInEffect>
      </Container>
      <div className={styles.wrapper}>
        <iframe
          className={styles.embed}
          title="Arkitekt on Spotify"
          src="https://open.spotify.com/embed/artist/4K9zGLF4CT5HYDNQ9pT3Y8?utm_source=generator&theme=0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default SpotifyPreview;
