import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import HomeHeader from './home-header';
import content from '@/content/content';

describe('HomeHeader', () => {
  it('should render the logo and subtitle', () => {
    render(<HomeHeader />);

    expect(
      screen.getByRole('img', { name: 'arkitekt logo' }),
    ).toBeInTheDocument();
    expect(screen.getByText(content.homePage.subtitle)).toBeInTheDocument();
  });
});
