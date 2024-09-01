import SpotifyPreview from '@/components/spotify-preview/spotify-preview';
import HomeHeader from '@/components/home-header/home-header';
import PageWrapper from '@/components/page-wrapper/page-wrapper';

//TODO: Clean up all classes
//TODO: Add text for about page

export default function Home() {
  return (
    <PageWrapper>
      <HomeHeader />
      <SpotifyPreview />
    </PageWrapper>
  );
}
