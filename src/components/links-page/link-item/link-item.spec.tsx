import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import LinkItem from './link-item';

const link = {
  title: 'Spotify',
  image: '/spotify.png',
  url: 'https://open.spotify.com',
};

describe('LinkItem', () => {
  it('should render an external link with its title', () => {
    render(<LinkItem link={link} />);

    const anchor = screen.getByRole('link', { name: 'Spotify' });
    expect(anchor).toHaveAttribute('href', link.url);
    expect(anchor).toHaveAttribute('target', '_blank');
  });

  it('should render the subtitle when provided', () => {
    render(<LinkItem link={{ ...link, subtitle: 'Listen now' }} />);

    expect(screen.getByText('Listen now')).toBeInTheDocument();
  });
});
