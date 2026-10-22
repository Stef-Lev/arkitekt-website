import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { scrollTo } from '@/helpers/scroll-to';
import HomeHeader from './home-header';
import content from '@/content/content';

vi.mock('@/helpers/scroll-to', () => ({ scrollTo: vi.fn() }));

describe('HomeHeader', () => {
  it('should render the logo and subtitle', () => {
    render(<HomeHeader />);

    expect(
      screen.getByRole('img', { name: 'arkitekt logo' }),
    ).toBeInTheDocument();
    expect(screen.getByText(content.homePage.subtitle)).toBeInTheDocument();
  });

  it('should link the scroll indicator to the content below the hero', () => {
    render(<HomeHeader />);

    expect(
      screen.getByRole('link', { name: 'Scroll to more content' }),
    ).toHaveAttribute('href', '#home-content');
  });

  it('should scroll to the next section over 900ms when clicked', async () => {
    render(
      <>
        <HomeHeader />
        <section id="home-content" aria-label="More content" />
      </>,
    );
    const target = screen.getByRole('region', { name: 'More content' });
    vi.spyOn(target, 'getBoundingClientRect').mockReturnValue({
      top: 800,
    } as DOMRect);
    const destination = 800 + window.scrollY;

    await userEvent.click(
      screen.getByRole('link', { name: 'Scroll to more content' }),
    );

    expect(scrollTo).toHaveBeenCalledExactlyOnceWith(destination, 900);
  });
});
