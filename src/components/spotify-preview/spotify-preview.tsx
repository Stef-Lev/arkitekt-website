'use client';
import { cn } from '@/helpers/classnames';

const SpotifyPreview = () => {
  return (
    <div
      className={cn(
        'home-spotify-iframe',
        'relative py-10 px-4 sm:px-6',
        'h-[420px] sm:h-[500px] md:h-[600px] lg:h-[700px]',
        'flex justify-center',
      )}
    >
      <iframe
        className={cn(
          'z-[2]',
          'w-full md:w-[668px] lg:w-[800px]',
          'h-[360px] md:h-full',
        )}
        src="https://open.spotify.com/embed/artist/4K9zGLF4CT5HYDNQ9pT3Y8?utm_source=generator&theme=0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default SpotifyPreview;
