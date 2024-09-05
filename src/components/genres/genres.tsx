'use client';
import content from '@/content/content';
import Modal from './modal';
import { useState } from 'react';
import PlaylistIframe from '../playlist-iframe/playlist-iframe';
import { cn } from '@/helpers/classnames';
import Tile from './tile';

const genres = content.aboutPage.genres;
const playlists = content.aboutPage.playlists;

interface Props {
  title: string;
  subtitle?: string;
  isInteractive?: boolean;
}

const Genres = ({ isInteractive = false, title, subtitle }: Props) => {
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
      <h5 className={cn('p-4', 'text-center text-white text-[44px]')}>
        {title}
      </h5>
      {subtitle && (
        <h6 className="p-4 text-center text-white text-[20px]">{subtitle}</h6>
      )}
      <div
        className={cn(
          'grid grid-cols-2',
          'sm:grid-cols-3',
          'lg:grid-cols-4',
          'gap-4 p-4',
        )}
      >
        {genres.map((genre, index) => (
          <Tile
            key={index}
            genre={genre}
            onClick={openPlaylist}
            isInteractive={isInteractive}
          />
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <PlaylistIframe url={selectedGenre} />
      </Modal>
    </div>
  );
};

export default Genres;
