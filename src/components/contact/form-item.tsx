import { FormData } from './contact';
import { cn } from '@/helpers/classnames';
import { UseFormRegister } from 'react-hook-form';

interface Props {
  label: string;
  placeholder: string;
  field: 'name' | 'email' | 'subject' | 'message';
  type: string;
  registerFn: UseFormRegister<FormData>;
}

const FormItem = ({ label, placeholder, field, type, registerFn }: Props) => {
  return (
    <div className="mb-5">
      <label htmlFor={field} className="mb-3 block text-base font-medium">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          placeholder={placeholder}
          className={cn(
            'w-full rounded-md',
            'py-3 px-6',
            'text-base text-gray-300 font-medium',
            'border border-gray-800 outline-none',
            'bg-gray-800 placeholder-gray-700',
            'focus:border-blue-700 focus:shadow-md',
            'h-[150px] resize-none',
            'align-top',
          )}
          {...registerFn(field, { required: true })}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className={cn(
            'w-full rounded-md',
            'py-3 px-6',
            'text-base text-gray-300 font-medium',
            'border border-gray-800 outline-none',
            'bg-gray-800 placeholder-gray-700',
            'focus:border-blue-700 focus:shadow-md',
          )}
          {...registerFn(field, { required: true })}
        />
      )}
    </div>
  );
};

export default FormItem;
