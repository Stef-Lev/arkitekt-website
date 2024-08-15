import YoutubeIframe from '@/components/youtube-iframe/youtube-iframe';
import TitleHeader from '@/components/title-header/title-header';

const VideosPage = () => {
  return (
    <div>
      <TitleHeader title="Videos" />
      <div className="relative top-[200px] flex flex-wrap gap-4 justify-center">
        <div className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3">
          <YoutubeIframe url="https://www.youtube.com/embed/qpsJCFcK0CA?si=DXqbVs2baZ3Ydsml" />
        </div>
        <div className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3">
          <YoutubeIframe url="https://www.youtube.com/embed/qpsJCFcK0CA?si=DXqbVs2baZ3Ydsml" />
        </div>
        <div className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3">
          <YoutubeIframe url="https://www.youtube.com/embed/qpsJCFcK0CA?si=DXqbVs2baZ3Ydsml" />
        </div>
        {/* Add more <YoutubeIframe /> components as needed */}
      </div>
    </div>
  );
};

export default VideosPage;
