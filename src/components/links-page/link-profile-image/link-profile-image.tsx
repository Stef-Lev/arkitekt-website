import Image from 'next/image';

export type Props = {
  imageSrc?: string;
  width?: number;
  height?: number;
};

const LinkProfileImage = ({ imageSrc, width = 120, height = 120 }: Props) => {
  if (!imageSrc) {
    return null;
  }

  return (
    <div className="rounded-full overflow-hidden w-[120px] h-[120px] mx-auto">
      <Image src={imageSrc} alt="" width={width} height={height} />
    </div>
  );
};

export default LinkProfileImage;
