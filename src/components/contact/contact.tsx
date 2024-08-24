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

      {/* <div className="mb-5">
        <label htmlFor="email" className="mb-3 block text-base font-medium ">
          Email Address
        </label>
        <input
          type="email"
          placeholder="example@domain.com"
          className="w-full rounded-md border border-gray-800 bg-gray-800 py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
          {...register('email', { required: true })}
        />
      </div> */}
      {/* <div className="mb-5">
        <label htmlFor="subject" className="mb-3 block text-base font-medium ">
          Subject
        </label>
        <input
          type="text"
          placeholder="Subject"
          className="w-full rounded-md border border-gray-800 bg-gray-800 py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
          {...register('subject', { required: true })}
        />
      </div> */}
      {/* <div className="mb-5">
        <label
          htmlFor="message"
          className="mb-3 block text-base font-medium text-black"
        >
          Message
        </label>
        <textarea
          rows={4}
          placeholder="Type your message"
          className="w-full resize-none rounded-md border border-gray-800 bg-gray-800 py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
          {...register('message', { required: true })}
        ></textarea>
      </div> */}
      <div>
        <button className="hover:shadow-form rounded-md bg-purple-500 py-3 px-8 text-base font-semibold text-white outline-none">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Contact;
