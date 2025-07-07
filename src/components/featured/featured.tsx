import YoutubeIframe from '../youtube-iframe/youtube-iframe';
import content from '@/content/content';
import Container from '../container/container';

const Featured = () => {
  const featuredVideos = content.homePage.featuredVideosIds;
  return (
    <div className="w-full pb-20">
      <Container>
        <h4 className="text-[44px] mb-[32px] text-white text-center">
          Music Videos
        </h4>
        <div className="flex justify-center flex-col md:flex-row gap-6">
          {featuredVideos.map((videoId) => (
            <YoutubeIframe key={videoId} videoId={videoId} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Featured;
