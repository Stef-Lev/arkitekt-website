import YoutubeSection from '@/components/youtube-section/youtube-section';
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
        <YoutubeSection videoIds={videoIds} />
      </Container>
    </PageWrapper>
  );
};

export default VideosPage;
