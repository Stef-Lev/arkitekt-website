import YoutubeIframe from '@/components/youtube-iframe/youtube-iframe';
import TitleHeader from '@/components/title-header/title-header';
import content from '@/content/content';
import { cn } from '@/helpers/classnames';

const VideosPage = () => {
  const { title, videoIds } = content.videosPage;

  return (
    <div>
      <TitleHeader title={title} />
      <div
        className={cn(
          'relative top-[220px]',
          'h-max gap-4',
          'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3',
        )}
      >
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
