import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import HamburgerButton from './hamburger-button';

describe('HamburgerButton', () => {
  it('should expose an "Open menu" collapsed button when the drawer is closed', () => {
    render(<HamburgerButton isDrawerOpen={false} onClick={vi.fn()} />);

    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    );
  });

  it('should expose a "Close menu" expanded button when the drawer is open', () => {
    render(<HamburgerButton isDrawerOpen onClick={vi.fn()} />);

    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    );
  });

  it('should call onClick once when clicked', async () => {
    const onClick = vi.fn();
    render(<HamburgerButton isDrawerOpen={false} onClick={onClick} />);

    await userEvent.click(screen.getByRole('button', { name: 'Open menu' }));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
