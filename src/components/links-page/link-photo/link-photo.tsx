import Image from 'next/image';

const LinkPhoto = () => {
  return (
    <div className="rounded-full overflow-hidden w-[150px] h-[150px] mx-auto">
      <Image
        src="/arkitekt_square.png"
        alt="Link Photo"
        width={150}
        height={150}
      />
    </div>
  );
};

export default LinkPhoto;
