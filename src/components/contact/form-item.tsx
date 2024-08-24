import { FormData } from './contact';
import { useForm } from 'react-hook-form';

interface Props {
  label: string;
  placeholder: string;
  field: 'name' | 'email' | 'subject' | 'message';
  type: string;
}

const FormItem = ({ label, placeholder, field, type }: Props) => {
  const { register } = useForm<FormData>();
  return (
    <div className="mb-5">
      <label htmlFor={field} className="mb-3 block text-base font-medium">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-md border border-[] bg-gray-800 py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
        {...register(field, { required: true })}
      />
    </div>
  );
};

export default FormItem;
