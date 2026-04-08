import Image from 'next/image';

const LinkPhoto = () => {
  return (
    <div className="rounded-full overflow-hidden w-[120px] h-[120px] mx-auto">
      <Image
        src="/arkitekt_square.png"
        alt="Link Photo"
        width={120}
        height={120}
      />
    </div>
  );
};

export default LinkPhoto;
