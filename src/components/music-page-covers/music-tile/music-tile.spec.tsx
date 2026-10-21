import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import MusicTile from './music-tile';

describe('MusicTile', () => {
  it('should link the cover to the release in a new tab', () => {
    render(
      <MusicTile
        entity={{ id: 'winter', image: '/winter.jpg', url: 'https://w.com' }}
      />,
    );

    const link = screen.getByRole('link', { name: /winter/i });
    expect(link).toHaveAttribute('href', 'https://w.com');
    expect(link).toHaveAttribute('target', '_blank');
    expect(screen.getByRole('img', { name: 'winter' })).toBeInTheDocument();
  });
});
