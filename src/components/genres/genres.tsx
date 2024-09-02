'use client';
import content from '@/content/content';
import Modal from './modal';
import { useState } from 'react';
import PlaylistIframe from '../playlist-iframe/playlist-iframe';
import { cn } from '@/helpers/classnames';
import Tile from './tile';

const genres = content.aboutPage.genres;
const playlists = content.aboutPage.playlists;

const Genres = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState('');

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const openPlaylist = (id: string) => {
    setSelectedGenre(playlists[id]);
    openModal();
  };

  return (
    <div>
      <h5 className="p-4 text-center text-white text-[44px]">GENRES</h5>
      <div
        className={cn(
          'grid grid-cols-2',
          'sm:grid-cols-3',
          'lg:grid-cols-4',
          'gap-4 p-4',
        )}
      >
        {genres.map((genre, index) => (
          <Tile key={index} genre={genre} onClick={openPlaylist} />
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <PlaylistIframe url={selectedGenre} />
      </Modal>
    </div>
  );
};

export default Genres;
