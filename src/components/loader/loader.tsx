import { cn } from '@/helpers/classnames';

interface Props {
  size: number;
  animation?: 'fade' | 'rotate';
}

const Loader = ({ size, animation = 'fade' }: Props) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div
        className={cn('loader', [animation === 'fade', 'fade', 'rotate'])}
        style={{ width: size, height: size }}
      ></div>
    </div>
  );
};

export default Loader;
