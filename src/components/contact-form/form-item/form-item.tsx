import { Props } from './form-item.types';
import styles from './form-item.module.css';

const FormItem = ({ label, placeholder, field, type, registerFn }: Props) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={field} className={styles.label}>
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          placeholder={placeholder}
          className={styles.textarea}
          {...registerFn(field, { required: true })}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className={styles.field}
          {...registerFn(field, { required: true })}
        />
      )}
    </div>
  );
};

export default FormItem;
