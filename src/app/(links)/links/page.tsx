import LinkPhoto from '@/components/links-page/link-photo/link-photo';
import SocialMedia from '@/components/social-media/social-media';
import content from '@/content/content';
import LinkItem from '@/components/links-page/link-item/link-item';
import Image from 'next/image';
const items = content.linkPage.sections.basicInfo?.items;

const LinksPage = () => {
  console.log({ items });
  return (
    <div className="flex justify-center w-full py-8">
      <div className="w-[90%] md:w-[678px] relative">
        <LinkPhoto />
        <Image
          className="mx-auto relative"
          src="/website-logo.png"
          alt="arkitekt logo"
          width={150}
          height={150}
        />
        <div className="flex flex-col gap-3">
          {items?.map((link, index) => (
            <LinkItem key={index} link={link} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LinksPage;
