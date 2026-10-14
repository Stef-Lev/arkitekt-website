import Loader from '@/components/loader/loader';
import styles from './loading.module.css';

const Loading = () => {
  return (
    <div className={styles.wrapper}>
      <Loader size={200} animation="rotate" />
    </div>
  );
};

export default Loading;
