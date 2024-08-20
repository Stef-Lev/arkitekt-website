import Image from 'next/image';

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
        objectFit="cover"
        objectPosition="center"
        className="z-0 opacity-40"
      />
      <h2 className="z-1 text-white text-[50px] absolute top-[60px] left-[20px]">
        {title}
      </h2>
    </div>
  );
};

export default TitleHeader;
