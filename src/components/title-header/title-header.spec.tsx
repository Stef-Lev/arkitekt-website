import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import TitleHeader from './title-header';

describe('TitleHeader', () => {
  it('should render the title heading and its background image', () => {
    render(<TitleHeader title="Music" />);

    expect(screen.getByRole('heading', { name: 'Music' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Music page' })).toHaveAttribute(
      'src',
      '/music-background.jpg',
    );
  });
});
