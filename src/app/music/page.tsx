import TitleHeader from '@/components/title-header/title-header';
import content from '@/content/content';
import MusicCovers from '@/components/music-covers/music-covers';

const MusicPage = () => {
  const title = content.musicPage.title;
  const images = content.musicPage.images;
  return (
    <>
      <TitleHeader title={title} />
      <div className="relative top-[220px]">
        <MusicCovers images={images} />
      </div>
    </>
  );
};

export default MusicPage;
