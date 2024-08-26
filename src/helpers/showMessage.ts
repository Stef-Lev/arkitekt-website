import { toast, ToastOptions } from 'react-toastify';

const showMessage = (message: string, options: ToastOptions = {}) => {
  const toastOptions: ToastOptions = {
    position: 'bottom-center',
    autoClose: 2000,
    hideProgressBar: true,
    closeButton: false,
    theme: 'light',
  };
  toast(message, { ...options, ...toastOptions });
};

export default showMessage;
