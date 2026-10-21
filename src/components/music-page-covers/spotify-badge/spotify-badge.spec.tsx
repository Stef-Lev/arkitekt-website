import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import SpotifyBadge from './spotify-badge';
import content from '@/content/content';

describe('SpotifyBadge', () => {
  it('should render the badge text', () => {
    render(<SpotifyBadge />);

    expect(
      screen.getByText(content.musicPage.spotifyBadgeText),
    ).toBeInTheDocument();
  });
});
