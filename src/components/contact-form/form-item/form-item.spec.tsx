import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import FormItem from './form-item';
import { Props } from './form-item.types';

const registerFn = vi.fn((name: string) => ({
  name,
  onChange: vi.fn(),
  onBlur: vi.fn(),
  ref: vi.fn(),
})) as unknown as Props['registerFn'];

const baseProps: Props = {
  label: 'Name',
  placeholder: 'Full Name',
  field: 'name',
  type: 'text',
  registerFn,
};

describe('FormItem', () => {
  it('should render a required input labelled by its label', () => {
    render(<FormItem {...baseProps} />);

    const input = screen.getByRole('textbox', { name: 'Name' });
    expect(input).toBeRequired();
    expect(input).not.toHaveAttribute('aria-invalid');
  });

  it('should render a textarea for the textarea type', () => {
    render(
      <FormItem
        {...baseProps}
        label="Message"
        field="message"
        type="textarea"
      />,
    );

    expect(screen.getByRole('textbox', { name: 'Message' }).tagName).toBe(
      'TEXTAREA',
    );
  });

  it('should show the error and mark the field invalid', () => {
    render(
      <FormItem
        {...baseProps}
        error={{ type: 'required', message: 'This field is required' }}
      />,
    );

    expect(screen.getByRole('alert')).toHaveTextContent(
      'This field is required',
    );
    expect(screen.getByRole('textbox', { name: 'Name' })).toBeInvalid();
    expect(
      screen.getByRole('textbox', { name: 'Name' }),
    ).toHaveAccessibleDescription('This field is required');
  });

  it('should be disabled when disabled is set', () => {
    render(<FormItem {...baseProps} disabled />);

    expect(screen.getByRole('textbox', { name: 'Name' })).toBeDisabled();
  });
});
