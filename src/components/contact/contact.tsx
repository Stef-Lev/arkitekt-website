'use client';

import { useForm } from 'react-hook-form';
import { sendEmail } from '@/helpers/send-email';
import FormItem from './form-item';
import content from '@/content/content';

export type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const { handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <form className="text-white" onSubmit={handleSubmit(onSubmit)}>
      {content.contactPage.formFields.map((form) => (
        <FormItem
          key={form.field}
          label={form.label}
          placeholder={form.placeholder}
          field={form.field}
          type={form.type}
        />
      ))}
      <div>
        <button className="hover:shadow-form rounded-md bg-purple-500 py-3 px-8 text-base font-semibold text-white outline-none">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Contact;
