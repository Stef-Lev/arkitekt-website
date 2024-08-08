import { cn } from '@/helpers/classnames';

interface Props {
  isDrawerOpen: boolean;
  onClick: () => void;
}

const HamburgerButton = ({ isDrawerOpen, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-col justify-center items-center h-full"
    >
      <span
        className={cn(
          'block bg-black',
          'transition-all duration-300 ease-out',
          'h-0.5 w-6 rounded-sm',
          [isDrawerOpen, 'rotate-45 translate-y-1', '-translate-y-0.5'],
        )}
      ></span>
      <span
        className={cn(
          'block bg-black',
          'transition-all duration-300 ease-out',
          'h-0.5 w-6 rounded-sm my-0.5',
          [isDrawerOpen, 'opacity-0', 'opacity-100'],
        )}
      ></span>
      <span
        className={cn(
          'block bg-black',
          'transition-all duration-300 ease-out',
          'h-0.5 w-6 rounded-sm',
          [isDrawerOpen, '-rotate-45 -translate-y-1', 'translate-y-0.5'],
        )}
      ></span>
    </div>
  );
};

export default HamburgerButton;
