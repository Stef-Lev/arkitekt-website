import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { scrollTo } from '@/helpers/scroll-to';
import ScrollTopButton from './scroll-top-button';

vi.mock('@/helpers/scroll-to', () => ({ scrollTo: vi.fn() }));

describe('ScrollTopButton', () => {
  it('should scroll the window up when clicked', async () => {
    render(<ScrollTopButton />);

    await userEvent.click(
      screen.getByRole('button', { name: 'Scroll to top' }),
    );

    expect(scrollTo).toHaveBeenCalledExactlyOnceWith(0);
  });
});
