import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Footer from './footer';
import content from '@/content/content';

describe('Footer', () => {
  it('should render the credits, copyright and social links', () => {
    render(<Footer />);

    const { madeWith, madeBy, copyright } = content.footer;
    expect(screen.getByRole('contentinfo')).toHaveTextContent(
      `${madeWith} ${madeBy}`,
    );
    expect(screen.getByText(copyright)).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(3);
  });
});
