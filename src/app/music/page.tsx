import TitleHeader from '@/components/title-header/title-header';
import content from '@/content/content';
import MusicCovers from '@/components/music-covers/music-covers';
import { getImages } from '@/helpers/get-images';
import Container from '@/components/container/container';

const MusicPage = () => {
  const { title, spotify, platforms } = content.musicPage;

  const images = { singles: getImages('singles'), albums: getImages('albums') };

  return (
    <div className="relative top-[80px]">
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
    </div>
  );
};

export default MusicPage;
