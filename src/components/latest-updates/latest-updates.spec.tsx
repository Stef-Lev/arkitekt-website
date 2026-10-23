import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import LatestUpdates from './latest-updates';
import content from '@/content/content';

const { slides } = content.homePage.latestUpdates;

describe('LatestUpdates', () => {
  it('should render every slide and a dot per slide', () => {
    render(<LatestUpdates />);

    expect(
      screen.getByRole('region', { name: 'Latest updates' }),
    ).toBeInTheDocument();
    slides.forEach((slide) => {
      expect(
        screen.getByRole('heading', { name: slide.title }),
      ).toBeInTheDocument();
    });
    expect(
      screen.getAllByRole('button', { name: /go to slide/i }),
    ).toHaveLength(slides.length);
  });

  it('should render a CTA link only for slides that define one', () => {
    render(<LatestUpdates />);

    const withCta = slides.filter((slide) => slide.cta);
    withCta.forEach((slide) => {
      expect(
        screen
          .getAllByRole('link', { name: slide.cta!.label, hidden: true })
          .map((link) => link.getAttribute('href')),
      ).toContain(slide.cta!.href);
    });
    expect(screen.queryAllByRole('link', { hidden: true })).toHaveLength(
      withCta.length,
    );
  });
});
