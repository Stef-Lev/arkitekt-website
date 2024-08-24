import Image from 'next/image';

interface Props {
  title: string;
  images: string[];
}

const ImagesContainer = ({ title, images }: Props) => {
  return (
    <div className="flex flex-col items-center">
      <h4 className="text-[32px] pb-4">{title}</h4>
      <div className="flex gap-4 flex-wrap justify-center items-center mb-10">
        {images.map((image) => (
          <Image
            key={image}
            className="rounded-lg"
            src={image}
            width={300}
            height={300}
            alt={image}
          />
        ))}
      </div>
    </div>
  );
};

export default ImagesContainer;
