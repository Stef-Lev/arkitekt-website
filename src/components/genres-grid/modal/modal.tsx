import { RiCloseLargeLine } from 'react-icons/ri';
import { Props } from './modal.types';
import styles from './modal.module.css';

const Modal = ({ isOpen, onClose, children }: Props) => {
  if (!isOpen) return null;
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.dialog}>
        <div className={styles.header}>
          <RiCloseLargeLine
            size={20}
            onClick={onClose}
            className={styles.close}
          />
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
