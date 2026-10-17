import { Props } from './form-item.types';
import styles from './form-item.module.css';

import content from '@/content/content';

const FormItem = ({
  label,
  placeholder,
  field,
  type,
  registerFn,
  error,
  disabled,
}: Props) => {
  const id = `contact-${field}`;
  const errorId = `${id}-error`;
  const { requiredMessage, invalidEmailMessage, messageTooShortMessage } =
    content.contactPage;
  const options = {
    required: requiredMessage,
    ...(field === 'message' && {
      minLength: { value: 10, message: messageTooShortMessage },
    }),
    ...(type === 'email' && {
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: invalidEmailMessage,
      },
    }),
  };
  const common = {
    id,
    placeholder,
    disabled,
    required: true,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': error ? errorId : undefined,
    ...registerFn(field, options),
  };
  const invalidClass = error ? ` ${styles.invalid}` : '';

  return (
    <div className={styles.wrapper}>
      <label htmlFor={id} className={styles.label}>
        {label}
        <span className={styles.required} aria-hidden="true">
          {' '}
          *
        </span>
      </label>
      {type === 'textarea' ? (
        <textarea className={`${styles.textarea}${invalidClass}`} {...common} />
      ) : (
        <input
          type={type}
          className={`${styles.field}${invalidClass}`}
          {...common}
        />
      )}
      {error && (
        <p id={errorId} className={styles.error} role="alert">
          {error.message}
        </p>
      )}
    </div>
  );
};

export default FormItem;
