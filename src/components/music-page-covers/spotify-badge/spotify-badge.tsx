import { FaSpotify } from 'react-icons/fa';
import { cn } from '@/helpers/classnames';
import content from '@/content/content';
import styles from './spotify-badge.module.css';
import { Props } from './spotify-badge.types';

const SpotifyBadge = ({ className }: Props) => (
  <span className={cn(styles.badge, className)}>
    <FaSpotify className={styles.icon} aria-hidden="true" />
    <span>{content.musicPage.spotifyBadgeText}</span>
  </span>
);

export default SpotifyBadge;
