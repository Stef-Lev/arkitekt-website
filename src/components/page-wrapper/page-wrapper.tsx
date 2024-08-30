import { PropsWithChildren } from 'react';

const PageWrapper = ({ children }: PropsWithChildren) => {
  return <div className="relative top-[80px]">{children}</div>;
};

export default PageWrapper;
