'use client';
import content from '@/content/content';
import { useState } from 'react';
import Modal from '../modal/modal';
import PlaylistIframe from '../../playlist-iframe/playlist-iframe';
import GenreCover from '../genre-cover/genre-cover';
import RevealEffect from '@/components/reveal-effect/reveal-effect';
import { Props } from './genres.types';
import styles from './genres.module.css';

const genres = content.aboutPage.genres;

const Genres = ({ title, subtitle }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGenreUrl, setSelectedGenreUrl] = useState('');

  const closeModal = () => setIsModalOpen(false);
  const openPlaylist = (url: string) => {
    setSelectedGenreUrl(url);
    setIsModalOpen(true);
  };

  return (
    <section id="genres" className={styles.section}>
      <h5 className={styles.title}>{title}</h5>
      {subtitle && <h6 className={styles.subtitle}>{subtitle}</h6>}
      <div className={styles.grid}>
        {genres.map((genre) => (
          <RevealEffect
            key={genre.id}
            className={styles.reveal}
            hoverEffect={false}
          >
            <GenreCover genre={genre} onClick={openPlaylist} />
          </RevealEffect>
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <PlaylistIframe url={selectedGenreUrl} />
      </Modal>
    </section>
  );
};

export default Genres;
