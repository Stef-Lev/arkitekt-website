import YoutubeIframe from '../youtube-iframe/youtube-iframe';
import { cn } from '@/helpers/classnames';

type Props = {
  title?: string;
  videoIds: string[];
};

const YoutubeSection = ({ title, videoIds }: Props) => {
  return (
    <div>
      <div
        className={cn(
          'flex justify-center items-center',
          'text-white font-semibold text-2xl',
          'mt-5',
        )}
      >
        {title && <h4>{title}</h4>}
      </div>
      <div
        className={cn(
          'relative py-3',
          'gap-4',
          'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3',
        )}
      >
        {videoIds.map((id) => (
          <YoutubeIframe key={id} videoId={id} />
        ))}
      </div>
    </div>
  );
};

export default YoutubeSection;
