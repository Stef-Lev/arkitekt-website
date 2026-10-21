import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import Platforms from './platforms';
import content from '@/content/content';

const platforms = [
  {
    name: 'apple',
    image: '/apple.svg',
    url: 'https://apple.com',
    width: 100,
    height: 20,
  },
  {
    name: 'tidal',
    image: '/tidal.svg',
    url: 'https://tidal.com',
    width: 100,
    height: 20,
  },
];

describe('Platforms', () => {
  it('should render the title and a logo per platform', () => {
    render(<Platforms platforms={platforms} onClick={vi.fn()} />);

    expect(
      screen.getByRole('heading', { name: content.musicPage.platformsTitle }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole('img')).toHaveLength(2);
  });

  it('should call onClick with the platform url when a logo is clicked', async () => {
    const onClick = vi.fn();
    render(<Platforms platforms={platforms} onClick={onClick} />);

    await userEvent.click(screen.getByRole('img', { name: 'tidal logo' }));

    expect(onClick).toHaveBeenCalledExactlyOnceWith('https://tidal.com');
  });
});
