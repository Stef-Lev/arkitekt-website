import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import ScrollTopButton from './scroll-top-button';

describe('ScrollTopButton', () => {
  it('should scroll the window up when clicked', async () => {
    vi.spyOn(window, 'scrollY', 'get').mockReturnValue(1000);
    const scrollBy = vi.spyOn(window, 'scrollBy').mockImplementation(() => {});
    vi.spyOn(window, 'requestAnimationFrame')
      .mockImplementationOnce((callback) => {
        callback(0);
        return 0;
      })
      .mockImplementation(() => 0);
    render(<ScrollTopButton />);

    await userEvent.click(
      screen.getByRole('button', { name: 'Scroll to top' }),
    );

    expect(scrollBy).toHaveBeenCalledWith(0, expect.any(Number));
    expect(scrollBy.mock.calls[0][1]).toBeLessThan(0);
  });
});
