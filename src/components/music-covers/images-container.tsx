import Image from 'next/image';
import { cn } from '@/helpers/classnames';

interface Props {
  title: string;
  images: string[];
}

const ImagesContainer = ({ title, images }: Props) => {
  return (
    <div className="flex flex-col items-center">
      <h4 className="text-[32px] pb-4">{title}</h4>
      <div
        className={cn(
          'flex flex-wrap',
          'justify-center items-center',
          'gap-4 mb-10',
        )}
      >
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
