import TitleHeader from '@/components/title-header/title-header';
import content from '@/content/content';
import MusicCovers from '@/components/music-covers/music-covers';

const MusicPage = () => {
  const { title, images, spotify, platforms } = content.musicPage;

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
