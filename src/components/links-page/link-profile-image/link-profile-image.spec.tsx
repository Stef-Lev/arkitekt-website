import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import LinkProfileImage from './link-profile-image';

describe('LinkProfileImage', () => {
  it('should render nothing without an image source', () => {
    render(<LinkProfileImage />);

    expect(screen.queryByRole('presentation')).not.toBeInTheDocument();
  });

  it('should render a decorative image when a source is given', () => {
    render(<LinkProfileImage imageSrc="/about.jpg" />);

    expect(screen.getByRole('presentation')).toHaveAttribute(
      'src',
      '/about.jpg',
    );
  });
});
