import type { ReactNode } from 'react';

export type Props = {
  children: ReactNode;
  variant: 'image' | 'text';
  className?: string;
};
