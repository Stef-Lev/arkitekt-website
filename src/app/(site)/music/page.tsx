import TitleHeader from '@/components/title-header/title-header';
import content from '@/content/content';
import MusicCovers from '@/components/music-covers/music-covers';
import { getImages } from '@/helpers/get-images';
import Container from '@/components/container/container';
import PageWrapper from '@/components/page-wrapper/page-wrapper';

const MusicPage = () => {
  const { title, spotify, platforms } = content.musicPage;

  const images = {
    singles: getImages('musicPage', 'singles'),
    albums: getImages('musicPage', 'albums'),
  };

  return (
    <PageWrapper>
      <TitleHeader title={title} />
      <div>
        <Container>
          <MusicCovers
            images={images}
            spotify={spotify}
            platforms={platforms}
          />
        </Container>
      </div>
    </PageWrapper>
  );
};

export default MusicPage;
