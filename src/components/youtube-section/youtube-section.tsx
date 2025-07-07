import YoutubeIframe from '../youtube-iframe/youtube-iframe';
import { VideoGroup } from '@/content/types';
import { cn } from '@/helpers/classnames';

interface Props {
  group: VideoGroup;
}

const YoutubeSection = ({ group }: Props) => {
  const { title, ids } = group;

  return (
    <div>
      <div
        className={cn(
          'flex justify-center items-center',
          'text-white font-semibold text-2xl',
          'mt-5',
        )}
      >
        <h4>{title}</h4>
      </div>
      <div
        className={cn(
          'relative py-3',
          'gap-4',
          'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3',
        )}
      >
        {ids.map((id) => (
          <YoutubeIframe key={id} videoId={id} />
        ))}
      </div>
    </div>
  );
};

export default YoutubeSection;
