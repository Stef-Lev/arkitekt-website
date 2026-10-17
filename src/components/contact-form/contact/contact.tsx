'use client';

import { useForm } from 'react-hook-form';
import Image from 'next/image';
import { sendEmail } from '@/helpers/send-email';
import showMessage from '@/helpers/showMessage';
import FormItem from '../form-item/form-item';
import content from '@/content/content';
import { FormData } from './contact.types';
import styles from './contact.module.css';

const Contact = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  function onSubmit(data: FormData) {
    return sendEmail(data)
      .then(() => {
        showMessage(content.contactPage.successMessage, {
          type: 'info',
          icon: (
            <Image
              src="/links/arkitekt.jpg"
              alt=""
              width={28}
              height={28}
              style={{ borderRadius: '50%' }}
            />
          ),
        });
        reset();
      })
      .catch(() =>
        showMessage(content.contactPage.errorMessage, {
          type: 'error',
        }),
      );
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(onSubmit)}
      aria-busy={isSubmitting}
      noValidate
    >
      {content.contactPage.formFields.map((form) => (
        <FormItem
          key={form.field}
          label={form.label}
          placeholder={form.placeholder}
          field={form.field}
          type={form.type}
          registerFn={register}
          error={errors[form.field]}
          disabled={isSubmitting}
        />
      ))}
      <div className={styles.submitContainer}>
        <button
          type="submit"
          className={styles.submitButton}
          disabled={isSubmitting}
        >
          {isSubmitting
            ? content.contactPage.sendingLabel
            : content.contactPage.submitLabel}
        </button>
      </div>
    </form>
  );
};

export default Contact;
