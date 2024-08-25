'use client';

import { useForm } from 'react-hook-form';
import { sendEmail } from '@/helpers/send-email';
import FormItem from './form-item';
import content from '@/content/content';
import { cn } from '@/helpers/classnames';

export type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const { handleSubmit, register, reset } = useForm<FormData>();

  function onSubmit(data: FormData) {
    console.log(data);
    sendEmail(data)
      .then(() => {
        console.log('sent');
        reset();
      })
      .catch((err) => console.error(err));
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
          registerFn={register}
        />
      ))}
      <div className="w-full mt-[30px]">
        <button
          className={cn(
            'text-white text-base font-semibold',
            'py-3 px-8',
            'rounded-md outline-none',
            'w-full',
            'bg-blue-700 hover:shadow-form',
          )}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Contact;
