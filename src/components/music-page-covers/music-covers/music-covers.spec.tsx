import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useRouter } from 'next/navigation';
import { describe, expect, it, vi } from 'vitest';
import MusicCovers from './music-covers';
import content from '@/content/content';

const { spotify, platforms, albumsTitle, singlesTitle } = content.musicPage;

const mockRouter = () => {
  const push = vi.fn();
  vi.mocked(useRouter).mockReturnValue({ push } as unknown as ReturnType<
    typeof useRouter
  >);
  return push;
};

describe('MusicCovers', () => {
  it('should render the albums and singles sections', () => {
    render(<MusicCovers spotify={spotify} platforms={platforms} />);

    expect(
      screen.getByRole('heading', { name: albumsTitle }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: singlesTitle }),
    ).toBeInTheDocument();
  });

  it('should navigate to Spotify when its logo is clicked', async () => {
    const push = mockRouter();
    render(<MusicCovers spotify={spotify} platforms={platforms} />);

    await userEvent.click(screen.getByRole('img', { name: 'spotify logo' }));

    expect(push).toHaveBeenCalledExactlyOnceWith(spotify.url);
  });

  it('should navigate to a platform when its logo is clicked', async () => {
    const push = mockRouter();
    render(<MusicCovers spotify={spotify} platforms={platforms} />);

    await userEvent.click(screen.getByRole('img', { name: 'apple logo' }));

    expect(push).toHaveBeenCalledExactlyOnceWith(platforms[0].url);
  });
});
