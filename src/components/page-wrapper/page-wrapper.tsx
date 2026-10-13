import { PropsWithChildren } from 'react';
import styles from './page-wrapper.module.css';

const PageWrapper = ({ children }: PropsWithChildren) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default PageWrapper;
