import SpotifyPreview from '@/components/spotify-preview/spotify-preview';
import HomeHeader from '@/components/home-header/home-header';
import PageWrapper from '@/components/page-wrapper/page-wrapper';

export default function Home() {
  return (
    <PageWrapper>
      <HomeHeader />
      <SpotifyPreview />
    </PageWrapper>
  );
}
