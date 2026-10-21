import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

  it('should not render when already dismissed in this session', () => {
    window.sessionStorage.setItem(
      `release-announcement-dismissed:${href}`,
      'true',
    );
    render(<ReleaseAnnouncement />);

    expect(screen.queryByRole('region')).not.toBeInTheDocument();
  });

  it('should hide the announcement when dismissed', async () => {
    render(<ReleaseAnnouncement />);

    await userEvent.click(
      screen.getByRole('button', { name: 'Dismiss release announcement' }),
    );

    expect(screen.queryByRole('region')).not.toBeInTheDocument();
  });
});
