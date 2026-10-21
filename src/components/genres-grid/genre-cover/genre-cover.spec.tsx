import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import GenreCover from './genre-cover';

const genre = {
  name: 'TRAP',
  id: 'trap',
  coverImagePath: '/genres/trap.png',
  playlistUrl: 'https://example.com/trap',
};

describe('GenreCover', () => {
  it('should render nothing without a cover or playlist', () => {
    render(
      <GenreCover genre={{ ...genre, playlistUrl: '' }} onClick={vi.fn()} />,
    );

    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  it('should call onClick with the playlist url when the cover is clicked', async () => {
    const onClick = vi.fn();
    render(<GenreCover genre={genre} onClick={onClick} />);

    await userEvent.click(screen.getByRole('img', { name: 'TRAP' }));

    expect(onClick).toHaveBeenCalledExactlyOnceWith(genre.playlistUrl);
  });
});
