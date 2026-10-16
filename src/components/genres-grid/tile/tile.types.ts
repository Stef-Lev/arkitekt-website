import type React from 'react';

export type Props = {
  onClick: (id: string) => void;
  genre: { name: string; id: string; icon: React.JSX.Element };
  isInteractive?: boolean;
};
