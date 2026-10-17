export type Platform = {
  name: string;
  height: number;
  width: number;
  image: string;
  url: string;
};

type Images = {
  singles: string[];
  albums: string[];
};

export type Props = {
  spotify: Pick<Platform, 'url' | 'image'>;
  images: Images;
  platforms: Platform[];
};
