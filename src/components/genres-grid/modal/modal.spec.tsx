import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import Modal from './modal';

describe('Modal', () => {
  it('should render nothing when closed', () => {
    render(
      <Modal isOpen={false} onClose={vi.fn()}>
        content
      </Modal>,
    );

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('should render children when open', () => {
    render(
      <Modal isOpen onClose={vi.fn()}>
        content
      </Modal>,
    );

    expect(screen.getByRole('dialog')).toHaveTextContent('content');
  });

  it('should call onClose once when the close button is clicked', async () => {
    const onClose = vi.fn();
    render(
      <Modal isOpen onClose={onClose}>
        content
      </Modal>,
    );

    await userEvent.click(screen.getByRole('button', { name: 'Close' }));

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
