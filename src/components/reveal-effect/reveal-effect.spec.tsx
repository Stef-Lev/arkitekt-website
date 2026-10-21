import { act, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import RevealEffect from './reveal-effect';

describe('RevealEffect', () => {
  it('should render its children', () => {
    render(<RevealEffect>child</RevealEffect>);

    expect(screen.getByText('child')).toBeInTheDocument();
  });

  it('should reveal once it enters the viewport', () => {
    let notify: IntersectionObserverCallback = () => {};
    const disconnect = vi.fn();
    vi.stubGlobal(
      'IntersectionObserver',
      class {
        constructor(callback: IntersectionObserverCallback) {
          notify = callback;
        }
        observe = vi.fn();
        disconnect = disconnect;
      },
    );
    render(<RevealEffect>child</RevealEffect>);

    act(() =>
      notify(
        [{ isIntersecting: true } as IntersectionObserverEntry],
        {} as IntersectionObserver,
      ),
    );

    expect(screen.getByText('child').parentElement).toHaveClass('revealed');
    expect(disconnect).toHaveBeenCalled();
  });
});
