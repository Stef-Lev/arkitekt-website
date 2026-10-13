import Image from 'next/image';
import { Props } from './link-profile-image.types';

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
