import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { sendEmail } from '@/helpers/send-email';
import showMessage from '@/helpers/showMessage';
import Contact from './contact';
import content from '@/content/content';

vi.mock('@/helpers/send-email', () => ({ sendEmail: vi.fn() }));
vi.mock('@/helpers/showMessage', () => ({ default: vi.fn() }));

const { successMessage, errorMessage, requiredMessage } = content.contactPage;

const fillForm = async () => {
  const user = userEvent.setup();
  await user.type(screen.getByRole('textbox', { name: /^name/i }), 'John');
  await user.type(
    screen.getByRole('textbox', { name: /^email/i }),
    'john@example.com',
  );
  await user.type(screen.getByRole('textbox', { name: /^subject/i }), 'Hi');
  await user.type(
    screen.getByRole('textbox', { name: /^message/i }),
    'A long enough message',
  );
  await user.click(screen.getByRole('button', { name: 'Submit' }));
};

describe('Contact', () => {
  it('should show a required error for every empty field on submit', async () => {
    render(<Contact />);

    await userEvent.click(screen.getByRole('button', { name: 'Submit' }));

    const alerts = await screen.findAllByRole('alert');
    expect(alerts).toHaveLength(content.contactPage.formFields.length);
    alerts.forEach((alert) => expect(alert).toHaveTextContent(requiredMessage));
    expect(sendEmail).not.toHaveBeenCalled();
  });

  it('should send the form, show a success message and reset the fields', async () => {
    vi.mocked(sendEmail).mockResolvedValue({});
    render(<Contact />);

    await fillForm();

    expect(sendEmail).toHaveBeenCalledExactlyOnceWith({
      name: 'John',
      email: 'john@example.com',
      subject: 'Hi',
      message: 'A long enough message',
    });
    await waitFor(() =>
      expect(showMessage).toHaveBeenCalledWith(
        successMessage,
        expect.objectContaining({ type: 'info' }),
      ),
    );
    expect(screen.getByRole('textbox', { name: /^name/i })).toHaveValue('');
  });

  it('should show an error message when sending fails', async () => {
    vi.mocked(sendEmail).mockRejectedValue(new Error('fail'));
    render(<Contact />);

    await fillForm();

    await waitFor(() =>
      expect(showMessage).toHaveBeenCalledWith(errorMessage, { type: 'error' }),
    );
  });
});
