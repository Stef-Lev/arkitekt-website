import LinkPhoto from '@/components/links-page/link-photo/link-photo';
import Image from 'next/image';

const LinksPage = () => {
  return (
    <div className="flex justify-center w-full py-8">
      <div className="w-[90%] md:w-[678px]">
        <LinkPhoto />
        <Image
          className="mx-auto"
          src="/website-logo.png"
          alt="arkitekt logo"
          width={150}
          height={150}
        />
      </div>
    </div>
  );
};

export default LinksPage;
