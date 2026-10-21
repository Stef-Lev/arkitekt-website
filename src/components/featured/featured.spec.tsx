import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Featured from './featured';
import content from '@/content/content';

const { title, ids, linkText, linkHref } = content.homePage.featuredVideos;

describe('Featured', () => {
  it('should render the heading, one video per id and the channel link', () => {
    render(<Featured />);

    expect(screen.getByRole('heading', { name: title })).toBeInTheDocument();
    expect(screen.getAllByRole('button', { name: /play video/i })).toHaveLength(
      ids.length,
    );
    expect(screen.getByRole('link', { name: linkText })).toHaveAttribute(
      'href',
      linkHref,
    );
  });
});
