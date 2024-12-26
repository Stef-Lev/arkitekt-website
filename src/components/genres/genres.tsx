'use client';
import content from '@/content/content';
import Modal from './modal';
import { useState } from 'react';
import PlaylistIframe from '../playlist-iframe/playlist-iframe';
import { cn } from '@/helpers/classnames';
import Tile from './tile';
import GenreCover from './genre-cover';

const genres = content.aboutPage.genres;

interface Props {
  title: string;
  subtitle?: string;
  isInteractive?: boolean;
  type?: 'tiles' | 'images';
}

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
    <section id="genres" className="pt-[80px]">
      <h5 className={cn('p-4', 'text-center text-white text-[44px]')}>
        {title}
      </h5>
      {subtitle && (
        <h6 className="p-4 text-center text-white text-[20px]">{subtitle}</h6>
      )}
      {type === 'tiles' && (
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
      )}
      {type === 'images' && (
        <div
          className={cn(
            'grid grid-cols-1',
            'sm:grid-cols-3',
            'lg:grid-cols-4',
            'gap-4 p-4',
          )}
        >
          {genres.map((genre) => (
            <GenreCover key={genre.id} genre={genre} onClick={openPlaylist} />
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
