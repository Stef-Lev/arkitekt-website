'use client';
import content from '@/content/content';
import Modal from './modal';
import { useState } from 'react';
import PlaylistIframe from '../playlist-iframe/playlist-iframe';

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
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {genres.map((genre, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 dark-metallic-tile rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 cursor-pointer"
            onClick={() => openPlaylist(genre.id)}
          >
            <div className="mb-2 text-5xl text-white">{genre.icon}</div>
            <p className="text-white text-center text-[clamp(16px, 4vw, 24px)]">
              {genre.name}
            </p>
          </div>
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <PlaylistIframe url={selectedGenre} />
      </Modal>
    </div>
  );
};

export default Genres;
