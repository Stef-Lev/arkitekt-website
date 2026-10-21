import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import AboutSection from './about-section';

describe('AboutSection', () => {
  it('should render the about text and photo', () => {
    render(<AboutSection aboutText="Some bio" />);

    expect(screen.getByText('Some bio')).toBeInTheDocument();
    expect(
      screen.getByRole('img', { name: 'arkitekt photo' }),
    ).toBeInTheDocument();
  });
});
