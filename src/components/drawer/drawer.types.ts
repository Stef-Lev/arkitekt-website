export type Props = {
  className?: string;
  isDrawerOpen: boolean;
  items: Array<Record<string, string>>;
  toggleDrawer: () => void;
};
