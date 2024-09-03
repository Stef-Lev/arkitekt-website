import { useEffect } from 'react';
import { cn } from '@/helpers/classnames';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import SocialMedia from '@/components/social-media/social-media';

interface Props {
  className?: string;
  isDrawerOpen: boolean;
  items: Array<Record<string, string>>;
  toggleDrawer: () => void;
}

const Drawer = (props: Props) => {
  const { isDrawerOpen, toggleDrawer, items, className } = props;
  const router = useRouter();

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
        className,
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

        <div className="p-4 text-[28px]">
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
        <SocialMedia onClick={handleClick} />
      </div>
    </div>
  );
};

export default Drawer;
