'use client';
import content from '@/content/content';
import Modal from '../modal/modal';
import { useState } from 'react';
import PlaylistIframe from '../../playlist-iframe/playlist-iframe';
import { cn } from '@/helpers/classnames';
import Tile from '../tile/tile';
import GenreCover from '../genre-cover/genre-cover';
import GenreCircle from '../genre-circle/genre-circle';
import { Props } from './genres.types';
import styles from './genres.module.css';

const genres = content.aboutPage.genres;

const Genres = ({
  title,
  subtitle,
  isInteractive = false,
  type = 'tiles',
}: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGenreUrl, setSelectedGenreUrl] = useState('');

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const openPlaylist = (url: string) => {
    setSelectedGenreUrl(url);
    openModal();
  };

  return (
    <section id="genres" className={styles.section}>
      <h5 className={styles.title}>{title}</h5>
      {subtitle && <h6 className={styles.subtitle}>{subtitle}</h6>}
      {type === 'tiles' && (
        <div className={styles.grid}>
          {genres.map((genre, index) => (
            <Tile
              key={index}
              genre={genre}
              onClick={openPlaylist}
              isInteractive={isInteractive}
            />
          ))}
        </div>
      )}
      {type === 'images' && (
        <div className={cn(styles.grid, styles.images)}>
          {genres.map((genre) => (
            <GenreCover key={genre.id} genre={genre} onClick={openPlaylist} />
          ))}
        </div>
      )}
      {type === 'circles' && (
        <div className={styles.grid}>
          {genres.map((genre) => (
            <GenreCircle key={genre.id} genre={genre} />
          ))}
        </div>
      )}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <PlaylistIframe url={selectedGenreUrl} />
      </Modal>
    </section>
  );
};

export default Genres;
