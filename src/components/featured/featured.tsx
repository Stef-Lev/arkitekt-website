import YoutubeIframe from '../youtube-iframe/youtube-iframe';
import content from '@/content/content';
import Container from '../container/container';

const Featured = () => {
  const { ids, title, linkText, linkHref } = content.homePage.featuredVideos;

  return (
    <div className="w-full pb-20">
      <Container>
        <h4 className="text-[44px] mb-[32px] text-white text-center">
          {title}
        </h4>
        <div className="flex justify-center flex-col md:flex-row gap-6">
          {ids.map((videoId) => (
            <YoutubeIframe key={videoId} videoId={videoId} />
          ))}
        </div>
        <div className="flex justify-center text-white text-center mt-5 underline">
          <a href={linkHref}>{linkText}</a>
        </div>
      </Container>
    </div>
  );
};

export default Featured;
