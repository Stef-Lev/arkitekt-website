import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  className: string;
}

const Container = ({ children, className }: Props) => {
  return (
    <div className={`container bg-pink-700 py-3 ${className}`}>{children}</div>
  );
};

export default Container;
