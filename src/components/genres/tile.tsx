import { cn } from '@/helpers/classnames';

interface Props {
  onClick: (id: string) => void;
  genre: { name: string; id: string; icon: JSX.Element };
}

const Tile = ({ onClick, genre }: Props) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center',
        'dark-metallic-tile p-6 cursor-pointer',
        'rounded-lg shadow-lg',
        'transition-transform transform',
        'hover:shadow-2xl hover:scale-105',
      )}
      onClick={() => onClick(genre.id)}
    >
      <div className="mb-2 text-5xl text-white">{genre.icon}</div>
      <p className="text-white text-center text-[clamp(16px, 4vw, 24px)]">
        {genre.name}
      </p>
    </div>
  );
};

export default Tile;
