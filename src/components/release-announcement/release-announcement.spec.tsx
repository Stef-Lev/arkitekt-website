import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import ReleaseAnnouncement from './release-announcement';
import content from '@/content/content';

const { title, href } = content.homePage.releaseAnnouncement;

describe('ReleaseAnnouncement', () => {
  beforeEach(() => {
    window.sessionStorage.clear();
  });

  it('should render the announcement with a Spotify link', () => {
    render(<ReleaseAnnouncement />);

    expect(screen.getByRole('region', { name: title })).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'Listen on Spotify' }),
    ).toHaveAttribute('href', href);
  });

  it('should remain visible despite a previous session dismissal', () => {
    window.sessionStorage.setItem(
      `release-announcement-dismissed:${href}`,
      'true',
    );
    render(<ReleaseAnnouncement />);

    expect(screen.getByRole('region', { name: title })).toBeInTheDocument();
  });

  it('should not offer a dismiss button', () => {
    render(<ReleaseAnnouncement />);

    expect(
      screen.queryByRole('button', { name: 'Dismiss release announcement' }),
    ).not.toBeInTheDocument();
  });
});
