'use client';

import { useForm } from 'react-hook-form';
import { sendEmail } from '@/helpers/send-email';
import FormItem from '../form-item/form-item';
import content from '@/content/content';
import showMessage from '@/helpers/showMessage';
import { FormData } from './contact.types';
import styles from './contact.module.css';

const Contact = () => {
  const { handleSubmit, register, reset } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data)
      .then(() => {
        showMessage(content.contactPage.successMessage, { type: 'info' });
        reset();
      })
      .catch(() =>
        showMessage(content.contactPage.errorMessage, {
          type: 'error',
        }),
      );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      {content.contactPage.formFields.map((form) => (
        <FormItem
          key={form.field}
          label={form.label}
          placeholder={form.placeholder}
          field={form.field}
          type={form.type}
          registerFn={register}
        />
      ))}
      <div className={styles.submitContainer}>
        <button className={styles.submitButton}>
          {content.contactPage.submitLabel}
        </button>
      </div>
    </form>
  );
};

export default Contact;
