import { FaSpotify } from 'react-icons/fa';
import { cn } from '@/helpers/classnames';
import styles from './spotify-badge.module.css';
import { Props } from './spotify-badge.types';

const SpotifyBadge = ({ className }: Props) => (
  <span className={cn(styles.badge, className)}>
    <FaSpotify className={styles.icon} aria-hidden="true" />
    <span>Listen on Spotify</span>
  </span>
);

export default SpotifyBadge;
