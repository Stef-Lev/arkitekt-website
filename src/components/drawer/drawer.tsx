import { useEffect } from 'react';
import { cn } from '@/helpers/classnames';
import { useRouter } from 'next/navigation';

interface Props {
  isDrawerOpen: boolean;
  items: Array<Record<string, string>>;
  toggleDrawer: () => void;
}

const Drawer = (props: Props) => {
  const { isDrawerOpen, toggleDrawer, items } = props;
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
      )}
    >
      <div className="bg-gray-800 text-white w-full h-full">
        <div className="flex items-center justify-start h-20 px-[16px]">
          <h1>Arkitekt</h1>
        </div>
        <div className="p-4">
          <nav>
            <ul>
              {items.map((item) => (
                <li key={item.href}>
                  <div
                    className="block py-2 px-4 hover:cursor-pointer"
                    onClick={() => handleClick(item.href)}
                  >
                    {item.value}
                  </div>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="absolute bottom-0 p-4 flex justify-center w-full">
          SOCIAL MEDIA
        </div>
      </div>
    </div>
  );
};

export default Drawer;
