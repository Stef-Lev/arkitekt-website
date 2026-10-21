import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import YoutubeSection from './youtube-section';

describe('YoutubeSection', () => {
  it('should render one video per id', () => {
    render(<YoutubeSection videoIds={['a', 'b', 'c']} />);

    expect(screen.getAllByRole('button', { name: /play video/i })).toHaveLength(
      3,
    );
  });
});
