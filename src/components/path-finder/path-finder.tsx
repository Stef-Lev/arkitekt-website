'use client';

import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface PathnameProviderProps {
  children: (pathname: string) => ReactNode;
}

export default function PathnameProvider({ children }: PathnameProviderProps) {
  const pathname = usePathname();
  return <>{children(pathname)}</>;
}
