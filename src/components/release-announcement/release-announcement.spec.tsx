import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import ReleaseAnnouncement from './release-announcement';
import content from '@/content/content';

const { title, href } = content.homePage.releaseAnnouncement;
const storageKey = `release-announcement-dismissed:${href}`;

describe('ReleaseAnnouncement', () => {
  beforeEach(() => {
    window.sessionStorage.clear();
  });

  it('should render the announcement without a Spotify button', () => {
    render(<ReleaseAnnouncement />);

    expect(screen.getByRole('region', { name: title })).toBeInTheDocument();
    expect(
      screen.queryByRole('link', { name: 'Listen on Spotify' }),
    ).not.toBeInTheDocument();
  });

  it('should hide and remember the dismissal for the session', () => {
    render(<ReleaseAnnouncement />);

    fireEvent.click(
      screen.getByRole('button', { name: 'Dismiss release announcement' }),
    );

    expect(
      screen.queryByRole('region', { name: title }),
    ).not.toBeInTheDocument();
    expect(window.sessionStorage.getItem(storageKey)).toBe('true');
  });

  it('should stay hidden when already dismissed this session', () => {
    window.sessionStorage.setItem(storageKey, 'true');
    render(<ReleaseAnnouncement />);

    expect(
      screen.queryByRole('region', { name: title }),
    ).not.toBeInTheDocument();
  });
});
