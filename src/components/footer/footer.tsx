import { cn } from '@/helpers/classnames';

const Footer = () => {
  return (
    <footer
      className={cn(
        'p-4 h-[240px]',
        'flex justify-center items-center',
        'text-yellow-100 bg-black',
      )}
    >
      <div className={cn('flex flex-col justify-center items-center gap-2')}>
        <div>STEF</div>
        <div>LEV</div>
      </div>
    </footer>
  );
};

export default Footer;
