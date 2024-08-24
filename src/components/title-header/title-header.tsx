import Image from 'next/legacy/image';
import Container from '@/components/container/container';

interface Props {
  title: string;
}

const TitleHeader = ({ title }: Props) => {
  return (
    <div className="w-full bg-black absolute top-[80px] left-0 h-[200px]">
      <Image
        src={`/${title.toLowerCase()}-background.jpg`}
        alt={`${title} page`}
        layout="fill"
        className="z-0 opacity-40 object-center object-cover"
      />
      <Container className="z-1 text-white text-[50px] relative flex items-center justify-center h-full">
        <h2>{title}</h2>
      </Container>
    </div>
  );
};

export default TitleHeader;
