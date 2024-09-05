import SpotifyPreview from '@/components/spotify-preview/spotify-preview';
import HomeHeader from '@/components/home-header/home-header';
import PageWrapper from '@/components/page-wrapper/page-wrapper';
import Genres from '@/components/genres/genres';
import Container from '@/components/container/container';
import Featured from '@/components/featured/featured';

export default function Home() {
  return (
    <PageWrapper>
      <HomeHeader />
      <SpotifyPreview />
      <Container>
        <Genres title="Beats for all tastes and moods" />
      </Container>

      <Featured />
    </PageWrapper>
  );
}
