import { useEffect } from 'react';
import { cn } from '@/helpers/classnames';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FaSpotify } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import content from '@/content/content';

interface Props {
  isDrawerOpen: boolean;
  items: Array<Record<string, string>>;
  toggleDrawer: () => void;
}

const Drawer = (props: Props) => {
  const { isDrawerOpen, toggleDrawer, items } = props;
  const router = useRouter();
  const socialUrls = content.drawer.socialUrls;

  const mediaComponents: Record<string, JSX.Element> = {
    spotify: <FaSpotify size={32} />,
    youtube: <FaYoutube size={32} />,
    instagram: <FaInstagram size={32} />,
    facebook: <FaFacebook size={32} />,
  };

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isDrawerOpen]);

  const handleClick = (href: string) => {
    router.push(href);
    toggleDrawer();
  };
  return (
    <div
      className={cn(
        'fixed inset-0',
        'transition-transform duration-300',
        'z-50 w-[85%]',
        [isDrawerOpen, 'translate-x-0', '-translate-x-full'],
      )}
    >
      <div className={cn('w-full h-full', 'bg-[#171717] text-white')}>
        <div className="flex items-center h-20 px-[1rem]">
          <Image
            src="/website-logo.png"
            alt="arkitekt logo"
            className="aspect-[256/110] hover:cursor-pointer"
            width={120}
            height={110}
            onClick={() => handleClick('/')}
          />
        </div>

        <div className="p-4 text-[30px]">
          <nav>
            <ul>
              {items.map((item) => (
                <li key={item.href}>
                  <div
                    className="block py-2 hover:cursor-pointer hover:text-mainBlue"
                    onClick={() => handleClick(item.href)}
                  >
                    {item.value}
                  </div>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div
          className={cn(
            'absolute bottom-0',
            'flex justify-center items-center gap-4',
            'h-[100px] w-full',
            'p-6',
          )}
        >
          {['spotify', 'instagram', 'youtube', 'facebook'].map((item) => (
            <div
              key={item}
              className="hover:text-mainBlue hover:cursor-pointer"
              onClick={() =>
                handleClick(socialUrls[item as keyof typeof socialUrls])
              }
            >
              {mediaComponents[item]}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Drawer;
