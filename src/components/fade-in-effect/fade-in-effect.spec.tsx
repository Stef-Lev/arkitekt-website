import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import FadeInEffect from './fade-in-effect';

describe('FadeInEffect', () => {
  it('should render its children', () => {
    render(<FadeInEffect variant="text">child</FadeInEffect>);

    expect(screen.getByText('child')).toBeInTheDocument();
  });
});
