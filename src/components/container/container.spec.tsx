import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Container from './container';

describe('Container', () => {
  it('should render its children', () => {
    render(<Container>child</Container>);

    expect(screen.getByText('child')).toBeInTheDocument();
  });
});
