import { cn } from '@/helpers/classnames';
import content from '@/content/content';
import mediaComponents from '@/helpers/media-components';
import Link from 'next/link';

interface Props {
  className?: string;
}

const socialMediaArray = [
  'spotify',
  'instagram',
  'youtube',
  // 'facebook'
];

const SocialMedia = ({ className }: Props) => {
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
      {socialMediaArray.map((item) => (
        <Link
          key={item}
          className="hover:text-mainBlue hover:cursor-pointer"
          target="_blank"
          rel="noopener noreferrer"
          href={socialUrls[item as keyof typeof socialUrls]}
        >
          {mediaComponents[item]}
        </Link>
      ))}
    </div>
  );
};

export default SocialMedia;
