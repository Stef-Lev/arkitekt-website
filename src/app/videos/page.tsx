import YoutubeIframe from '@/components/youtube-iframe/youtube-iframe';
import TitleHeader from '@/components/title-header/title-header';
import content from '@/content/content';
import Container from '@/components/container/container';
import PageWrapper from '@/components/page-wrapper/page-wrapper';
import { cn } from '@/helpers/classnames';

const VideosPage = () => {
  const { title, videoIds } = content.videosPage;

  return (
    <PageWrapper>
      <TitleHeader title={title} />
      <Container className="min-h-screen">
        <div
          className={cn(
            'relative py-6',
            'gap-4',
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
      </Container>
    </PageWrapper>
  );
};

export default VideosPage;
