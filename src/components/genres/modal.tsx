import { PropsWithChildren } from 'react';
import { RiCloseLargeLine } from 'react-icons/ri';
import { cn } from '@/helpers/classnames';

interface Props extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ isOpen, onClose, children }: Props) => {
  if (!isOpen) return null;
  return (
    <div
      className={cn(
        'fixed z-50',
        'flex items-center justify-center',
        'inset-0',
        'bg-black bg-opacity-50',
      )}
      onClick={onClose}
    >
      <div
        className={cn(
          'w-[92vw] md:w-[550px] lg:w-[640px]',
          'h-[430px]',
          'rounded-lg shadow-lg',
          'bg-[#323232]',
          'p-2 md:p-4',
        )}
      >
        <div className="flex justify-end items-center text-white">
          <RiCloseLargeLine
            size={20}
            onClick={onClose}
            className="cursor-pointer"
          />
        </div>
        <div className="h-full">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
