import SpotifyPreview from '@/components/spotify-preview/spotify-preview';
import HomeHeader from '@/components/home-header/home-header';

export default function Home() {
  return (
    <div className="relative top-[80px]">
      <HomeHeader />
      <SpotifyPreview />
    </div>
  );
}
