import Image from 'next/legacy/image';
import Container from '@/components/container/container';
import { cn } from '@/helpers/classnames';

interface Props {
  title: string;
}

const TitleHeader = ({ title }: Props) => {
  return (
    <div
      className={cn(
        'absolute top-[80px] left-0',
        'w-full h-[200px]',
        'bg-black',
      )}
    >
      <Image
        src={`/${title.toLowerCase()}-background.jpg`}
        alt={`${title} page`}
        layout="fill"
        className="z-0 opacity-40 object-center object-cover"
      />
      <Container
        className={cn(
          'flex items-center justify-center',
          'text-white text-[50px]',
          'h-full relative z-1',
        )}
      >
        <h2>{title}</h2>
      </Container>
    </div>
  );
};

export default TitleHeader;
