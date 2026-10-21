import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import YoutubeIframe from './youtube-iframe';

describe('YoutubeIframe', () => {
  it('should render a play button instead of the player initially', () => {
    render(<YoutubeIframe videoId="abc" title="My video" />);

    expect(
      screen.getByRole('button', { name: 'Play video: My video' }),
    ).toBeInTheDocument();
    expect(screen.queryByTitle('My video')).not.toBeInTheDocument();
  });

  it('should fall back to a generic label when no title is given', () => {
    render(<YoutubeIframe videoId="abc" />);

    expect(
      screen.getByRole('button', { name: 'Play video: YouTube video' }),
    ).toBeInTheDocument();
  });

  it('should load the autoplaying player when the play button is clicked', async () => {
    render(<YoutubeIframe videoId="abc" title="My video" />);

    await userEvent.click(screen.getByRole('button', { name: /play video/i }));

    expect(screen.getByTitle('My video')).toHaveAttribute(
      'src',
      'https://www.youtube.com/embed/abc?autoplay=1',
    );
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });
});
