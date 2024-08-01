import { IoMdClose } from 'react-icons/io';

interface Props {
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
}

const Drawer = (props: Props) => {
  const { isDrawerOpen, toggleDrawer } = props;
  return (
    <div
      className={`fixed inset-0 bg-gray-800 text-white transition-transform duration-300 z-50 ${
        isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:hidden`}
      style={{ width: '250px' }}
    >
      <div className="p-4">
        <button onClick={toggleDrawer} className="text-white text-xl">
          <IoMdClose size={30} />
        </button>
        <nav className="mt-4">
          <ul>
            <li>
              <a href="#" className="block py-2 px-4">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4">
                About
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Drawer;
