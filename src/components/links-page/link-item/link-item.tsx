import type { LinkType } from '@/content/types';
import Image from 'next/image';

export type Props = {
  link: LinkType;
};

const LinkItem = ({ link }: Props) => {
  return (
    <div className="rounded-3xl border-solid border-2 border-white">
      <h3>{link.title}</h3>
      <p>{link.subtitle}</p>
      <Image src={link.image || ''} alt="" width={200} height={200} />
      <a href={link.url} target="_blank" rel="noopener noreferrer">
        Visit
      </a>
    </div>
  );
};

export default LinkItem;
