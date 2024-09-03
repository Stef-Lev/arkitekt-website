import { cn } from '@/helpers/classnames';

interface Props {
  className?: string;
  isDrawerOpen: boolean;
  onClick: () => void;
}

const HamburgerButton = ({ isDrawerOpen, onClick, className }: Props) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        'flex flex-col',
        'justify-center items-center',
        'h-full hover:cursor-pointer',
        className,
      )}
    >
      <span
        className={cn(
          'block bg-white',
          'transition-all duration-300 ease-out',
          'h-0.5 w-6 rounded-sm',
          [isDrawerOpen, 'rotate-45 translate-y-1', '-translate-y-0.5'],
        )}
      ></span>
      <span
        className={cn(
          'block bg-white',
          'transition-all duration-300 ease-out',
          'h-0.5 w-6 rounded-sm my-0.5',
          [isDrawerOpen, 'opacity-0', 'opacity-100'],
        )}
      ></span>
      <span
        className={cn(
          'block bg-white',
          'transition-all duration-300 ease-out',
          'h-0.5 w-6 rounded-sm',
          [isDrawerOpen, '-rotate-45 -translate-y-1', 'translate-y-0.5'],
        )}
      ></span>
    </div>
  );
};

export default HamburgerButton;
