import { Props } from './container.types';

const Container = ({ children, className }: Props) => {
  return <div className={`container py-3 ${className ?? ''}`}>{children}</div>;
};

export default Container;
