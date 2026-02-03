import { cn } from '@/helpers/classnames';
import Image from 'next/image';
import { Platform } from '../music-covers/music-covers';
type Props = {
  platforms: Platform[];
  onClick: (url: string) => void;
};

const Platforms = ({ platforms, onClick }: Props) => {
  return (
    <div className="flex flex-col items-center my-10">
      <h5 className="text-[18px] mb-8 md:mb-2">Also available on</h5>
      <div
        className={cn(
          'flex items-center',
          'flex-col md:flex-row',
          'gap-8 md:gap-5',
        )}
      >
        {platforms.length > 0 &&
          platforms.map((item) => (
            <Image
              className="hover:cursor-pointer"
              key={item.image}
              src={item.image}
              alt={`${item.name} logo`}
              width={item.width}
              height={item.height}
              onClick={() => onClick(item.url)}
            />
          ))}
      </div>
    </div>
  );
};

export default Platforms;
