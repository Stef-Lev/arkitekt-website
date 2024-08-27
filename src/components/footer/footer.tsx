'use client';
import { cn } from '@/helpers/classnames';
import { FaHeart } from 'react-icons/fa';
import SocialMedia from '@/components/social-media/social-media';
import { useRouter } from 'next/navigation';

const Footer = () => {
  const router = useRouter();
  const handleClick = (url: string) => {
    router.push(url);
  };
  return (
    <footer
      className={cn(
        'p-4 h-[240px]',
        'flex justify-center items-center',
        'text-white bg-black',
        'relative',
      )}
    >
      <div className={cn('flex flex-col justify-center items-center gap-2')}>
        <div className="">
          <div className="flex items-center justify-center text-[20px]">
            Made with{' '}
            <div className="px-2 text-red-500">
              <FaHeart />
            </div>{' '}
            by Arkitekt
          </div>
          <div className="text-[14px] font-light text-gray-500 py-2">
            © 2024 Arkitekt. All rights reserved.
          </div>
        </div>
        <SocialMedia onClick={handleClick} />
      </div>
    </footer>
  );
};

export default Footer;
