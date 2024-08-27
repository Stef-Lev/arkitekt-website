import { FaSpotify } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';

const mediaComponents: Record<string, JSX.Element> = {
  spotify: <FaSpotify size={32} />,
  youtube: <FaYoutube size={32} />,
  instagram: <FaInstagram size={32} />,
  facebook: <FaFacebook size={32} />,
};

export default mediaComponents;
