import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import PageWrapper from './page-wrapper';

describe('PageWrapper', () => {
  it('should render its children', () => {
    render(<PageWrapper>child</PageWrapper>);

    expect(screen.getByText('child')).toBeInTheDocument();
  });
});
