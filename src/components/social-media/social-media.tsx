import { cn } from '@/helpers/classnames';
import content from '@/content/content';
import mediaComponents from '@/helpers/media-components';

interface Props {
  className?: string;
  onClick: (arg: string) => void;
}

const SocialMedia = ({ className, onClick }: Props) => {
  const socialUrls = content.drawer.socialUrls;

  return (
    <div
      className={cn(
        'absolute bottom-0',
        'flex justify-center items-center gap-4',
        'h-[100px] w-full',
        'p-6',
        className,
      )}
    >
      {['spotify', 'instagram', 'youtube', 'facebook'].map((item) => (
        <div
          key={item}
          className="hover:text-mainBlue hover:cursor-pointer"
          onClick={() => onClick(socialUrls[item as keyof typeof socialUrls])}
        >
          {mediaComponents[item]}
        </div>
      ))}
    </div>
  );
};

export default SocialMedia;
