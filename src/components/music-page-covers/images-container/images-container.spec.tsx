import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ImagesContainer from './images-container';

const entities = [
  { id: 'second', position: 2, image: '/2.jpg', url: 'https://2.com' },
  { id: 'first', position: 1, image: '/1.jpg', url: 'https://1.com' },
];

describe('ImagesContainer', () => {
  it('should render the title and the entities sorted by position', () => {
    render(<ImagesContainer title="Singles" entities={entities} />);

    expect(
      screen.getByRole('heading', { name: 'Singles' }),
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole('img').map((img) => img.getAttribute('alt')),
    ).toEqual(['first', 'second']);
  });
});
