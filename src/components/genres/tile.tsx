import { cn } from '@/helpers/classnames';

interface Props {
  onClick: (id: string) => void;
  genre: { name: string; id: string; icon: JSX.Element };
  isInteractive?: boolean;
}

const Tile = ({ onClick, genre, isInteractive = false }: Props) => {
  const handleClick = () => {
    if (isInteractive) {
      return onClick(genre.id);
    }
    return;
  };

  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center',
        'p-6',
        [isInteractive, 'rounded-lg shadow-lg'],
        [isInteractive, 'transition-transform transform'],
        [isInteractive, 'hover:shadow-2xl hover:scale-105'],
        [isInteractive, 'dark-metallic-tile cursor-pointer'],
      )}
      onClick={handleClick}
    >
      <div className="mb-2 text-5xl text-white">{genre.icon}</div>
      <p className="text-white text-center text-[clamp(16px, 4vw, 24px)]">
        {genre.name}
      </p>
    </div>
  );
};

export default Tile;
