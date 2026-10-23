import SpotifyPreview from '@/components/spotify-preview/spotify-preview';
import HomeHeader from '@/components/home-header/home-header';
import PageWrapper from '@/components/page-wrapper/page-wrapper';
import Featured from '@/components/featured/featured';
import LatestUpdates from '@/components/latest-updates/latest-updates';

export default function Home() {
  return (
    <PageWrapper>
      <HomeHeader />
      <div id="home-content">
        <LatestUpdates />
        <SpotifyPreview />
        <Featured />
      </div>
    </PageWrapper>
  );
}
