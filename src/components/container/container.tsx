import { PropsWithChildren } from 'react';

const Container = (props: PropsWithChildren) => {
  const { children } = props;
  return <div className="container bg-pink-700">{children}</div>;
};

export default Container;
