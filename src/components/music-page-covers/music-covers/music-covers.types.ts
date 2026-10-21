export type Platform = {
  name: string;
  height: number;
  width: number;
  image: string;
  url: string;
};

export type Props = {
  spotify: Pick<Platform, 'url' | 'image'>;
  platforms: Platform[];
};
