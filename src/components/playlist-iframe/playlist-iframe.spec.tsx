import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import PlaylistIframe from './playlist-iframe';
import content from '@/content/content';

describe('PlaylistIframe', () => {
  it('should show a fallback message when there is no url', () => {
    render(<PlaylistIframe url="" />);

    expect(
      screen.getByText(content.aboutPage.noPlaylistMessage),
    ).toBeInTheDocument();
  });

  it('should embed the playlist when a url is given', () => {
    render(<PlaylistIframe url="https://example.com/playlist" />);

    expect(screen.getByTitle('Genre playlist')).toHaveAttribute(
      'src',
      'https://example.com/playlist',
    );
  });
});
