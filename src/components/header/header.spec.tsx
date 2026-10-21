import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { usePathname } from 'next/navigation';
import { describe, expect, it, vi } from 'vitest';
import Header from './header';

describe('Header', () => {
  it('should mark the link of the current page', () => {
    vi.mocked(usePathname).mockReturnValue('/about');
    render(<Header />);

    const banner = screen.getByRole('banner');
    expect(within(banner).getByRole('link', { name: 'About' })).toHaveAttribute(
      'aria-current',
      'page',
    );
    expect(
      within(banner).getByRole('link', { name: 'Music' }),
    ).not.toHaveAttribute('aria-current');
  });

  it('should open the drawer when the menu button is clicked', async () => {
    render(<Header />);

    await userEvent.click(screen.getByRole('button', { name: 'Open menu' }));

    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    );
    expect(
      screen.getByRole('dialog', { name: 'Site navigation' }),
    ).toBeInTheDocument();
  });
});
