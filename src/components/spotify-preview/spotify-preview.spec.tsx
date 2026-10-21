import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import SpotifyPreview from './spotify-preview';

describe('SpotifyPreview', () => {
  it('should embed the Spotify artist player', () => {
    render(<SpotifyPreview />);

    expect(screen.getByTitle('Arkitekt on Spotify')).toHaveAttribute(
      'src',
      expect.stringContaining('open.spotify.com/embed/artist/'),
    );
  });
});
