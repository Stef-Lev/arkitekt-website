import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import Genres from './genres';
import content from '@/content/content';

const [firstGenre] = content.aboutPage.genres;

describe('Genres', () => {
  it('should render the title, optional subtitle and every genre cover', () => {
    render(<Genres title="GENRES" subtitle="Pick one" />);

    expect(screen.getByRole('heading', { name: 'GENRES' })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Pick one' }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole('img')).toHaveLength(
      content.aboutPage.genres.length,
    );
  });

  it('should open the playlist modal when a genre is clicked and close it again', async () => {
    render(<Genres title="GENRES" />);

    await userEvent.click(screen.getByRole('img', { name: firstGenre.name }));

    expect(screen.getByTitle('Genre playlist')).toHaveAttribute(
      'src',
      firstGenre.playlistUrl,
    );

    await userEvent.click(screen.getByRole('button', { name: 'Close' }));

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
