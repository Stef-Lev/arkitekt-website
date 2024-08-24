import TitleHeader from '@/components/title-header/title-header';
import content from '@/content/content';
import MusicCovers from '@/components/music-covers/music-covers';
import { getImages } from '@/helpers/getImages';

const MusicPage = () => {
  const { title, spotify, platforms } = content.musicPage;

  const images = { singles: getImages('singles'), albums: getImages('albums') };

  return (
    <>
      <TitleHeader title={title} />
      <div className="relative top-[220px]">
        <MusicCovers images={images} spotify={spotify} platforms={platforms} />
      </div>
    </>
  );
};

export default MusicPage;
