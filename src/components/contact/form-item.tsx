import { cn } from '@/helpers/classnames';
import { Props } from './form-item.types';

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
            'border border-inputBg outline-none',
            'bg-inputBg placeholder-inputPlaceholder',
            'focus:border-mainBlue focus:shadow-md',
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
            'border border-inputBg outline-none',
            'bg-inputBg placeholder-inputPlaceholder',
            'focus:border-mainBlue focus:shadow-md',
          )}
          {...registerFn(field, { required: true })}
        />
      )}
    </div>
  );
};

export default FormItem;
