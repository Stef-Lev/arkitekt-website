import YoutubeSection from '@/components/youtube-section/youtube-section';
import TitleHeader from '@/components/title-header/title-header';
import Container from '@/components/container/container';
import PageWrapper from '@/components/page-wrapper/page-wrapper';
import content from '@/content/content';
import styles from './page.module.css';

const VideosPage = () => {
  const { title, videoIds } = content.videosPage;

  return (
    <PageWrapper>
      <TitleHeader title={title} />
      <Container className={styles.container}>
        <YoutubeSection videoIds={videoIds} />
      </Container>
    </PageWrapper>
  );
};

export default VideosPage;
