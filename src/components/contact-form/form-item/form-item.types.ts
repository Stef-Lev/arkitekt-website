import { FieldError, UseFormRegister } from 'react-hook-form';
import { FormData } from '../contact/contact.types';

export type Props = {
  label: string;
  placeholder: string;
  field: 'name' | 'email' | 'subject' | 'message';
  type: string;
  registerFn: UseFormRegister<FormData>;
  error?: FieldError;
  disabled?: boolean;
};
