import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Loader from './loader';

describe('Loader', () => {
  it('should render a loading status', () => {
    render(<Loader size={40} />);

    expect(screen.getByRole('status', { name: 'Loading' })).toBeInTheDocument();
  });
});
