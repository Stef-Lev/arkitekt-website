import TitleHeader from '@/components/title-header/title-header';
import MusicCovers from '@/components/music-page-covers/music-covers/music-covers';
import Container from '@/components/container/container';
import PageWrapper from '@/components/page-wrapper/page-wrapper';
import ReleaseAnnouncement from '@/components/release-announcement/release-announcement';
import content from '@/content/content';
import styles from './page.module.css';

const MusicPage = () => {
  const { title, spotify, platforms } = content.musicPage;

  return (
    <PageWrapper>
      <ReleaseAnnouncement />
      <TitleHeader title={title} />
      <div className={styles.wrapper}>
        <Container>
          <MusicCovers spotify={spotify} platforms={platforms} />
        </Container>
      </div>
    </PageWrapper>
  );
};

export default MusicPage;
