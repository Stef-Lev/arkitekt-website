import YoutubeIframe from '@/components/youtube-iframe/youtube-iframe';
import TitleHeader from '@/components/title-header/title-header';
import content from '@/content/content';

const VideosPage = () => {
  const { title, videoIds } = content.videosPage;

  return (
    <div>
      <TitleHeader title={title} />
      <div className="h-max relative top-[220px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {videoIds.map((id) => (
          <YoutubeIframe
            key={id}
            url={`https://www.youtube.com/embed/${id}?si=DXqbVs2baZ3Ydsml`}
          />
        ))}
      </div>
    </div>
  );
};

export default VideosPage;
