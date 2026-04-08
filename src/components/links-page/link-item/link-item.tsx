import type { LinkType } from '@/content/types';
import Image from 'next/image';
import Link from 'next/link';

export type Props = {
  link: LinkType;
};

const LinkItem = ({ link }: Props) => {
  return (
    <Link
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="border-2 border-solid border-white rounded-3xl flex p-2 gap-2 glass"
    >
      <div className="">
        {link.image && (
          <Image
            src={link.image}
            alt={link.title || ''}
            width={40}
            height={40}
            className="bg-stone-700 rounded-full"
          />
        )}
      </div>
      <div className="flex-1 text-center text-white flex justify-center items-center font-bold">
        {link.title}
      </div>
      <div className="w-[40px] h-[40px]"></div>
    </Link>
  );
};

export default LinkItem;
