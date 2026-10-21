import { RiCloseLargeLine } from 'react-icons/ri';
import { Props } from './modal.types';
import styles from './modal.module.css';

const Modal = ({ isOpen, onClose, children }: Props) => {
  if (!isOpen) return null;
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.dialog} role="dialog" aria-modal="true">
        <div className={styles.header}>
          <button
            type="button"
            className={styles.close}
            aria-label="Close"
            onClick={(event) => {
              event.stopPropagation();
              onClose();
            }}
          >
            <RiCloseLargeLine size={20} aria-hidden="true" />
          </button>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
