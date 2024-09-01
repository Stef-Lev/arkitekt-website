import { PropsWithChildren } from 'react';
import { RiCloseLargeLine } from 'react-icons/ri';

interface Props extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ isOpen, onClose, children }: Props) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
      <div className="bg-[#323232] p-2 md:p-4 rounded-lg shadow-lg w-[92vw] md:w-[550px] lg:w-[640px] h-[430px]">
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
