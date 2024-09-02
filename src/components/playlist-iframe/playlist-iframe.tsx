import { cn } from '@/helpers/classnames';

interface Props {
  url: string;
}

const PlaylistIframe = ({ url }: Props) => {
  if (!url) {
    return (
      <div
        className={cn(
          'flex justify-center items-center',
          'h-full',
          'text-white text-[22px] text-center',
        )}
      >
        <p>
          No beats available for this genre at the moment, but there will be in
          the future. Stay tuned!
        </p>
      </div>
    );
  }
  return (
    <div className="py-2 md:py-3">
      <iframe
        className="w-full h-[360px]"
        src={url}
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default PlaylistIframe;
