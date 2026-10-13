export type Props = {
  onClick: (id: string) => void;
  genre: { name: string; id: string; icon: JSX.Element };
  isInteractive?: boolean;
};
