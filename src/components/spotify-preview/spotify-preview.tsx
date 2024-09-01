'use client';
import { cn } from '@/helpers/classnames';

const SpotifyPreview = () => {
  return (
    <div
      className={cn(
        'home-spotify-iframe',
        'relative h-[520px] py-10',
        'flex justify-center',
      )}
    >
      <iframe
        className="h-[440px] w-[90%] md:w-[668px] z-[2]"
        src="https://open.spotify.com/embed/artist/4K9zGLF4CT5HYDNQ9pT3Y8?utm_source=generator&theme=0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default SpotifyPreview;
