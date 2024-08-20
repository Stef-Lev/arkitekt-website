import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  className: string;
}

const Container = ({ children, className }: Props) => {
  return <div className={`container py-3 ${className}`}>{children}</div>;
};

export default Container;
