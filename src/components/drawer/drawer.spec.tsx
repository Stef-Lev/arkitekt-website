import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import Drawer from './drawer';

const items = [
  { value: 'Home', href: '/' },
  { value: 'About', href: '/about' },
];

describe('Drawer', () => {
  it('should hide the dialog from assistive tech when closed', () => {
    render(
      <Drawer isDrawerOpen={false} toggleDrawer={vi.fn()} items={items} />,
    );

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('should render the navigation and focus the first link when open', () => {
    render(<Drawer isDrawerOpen toggleDrawer={vi.fn()} items={items} />);

    const dialog = screen.getByRole('dialog', { name: 'Site navigation' });
    expect(dialog).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute(
      'href',
      '/about',
    );
    expect(screen.getAllByRole('link', { name: 'Home' })[0]).toHaveFocus();
  });

  it('should mark the current page link', () => {
    render(<Drawer isDrawerOpen toggleDrawer={vi.fn()} items={items} />);

    expect(
      screen.getAllByRole('link', { name: 'Home' }).at(-1),
    ).toHaveAttribute('aria-current', 'page');
  });

  it('should call toggleDrawer once when a navigation link is clicked', async () => {
    const toggleDrawer = vi.fn();
    render(<Drawer isDrawerOpen toggleDrawer={toggleDrawer} items={items} />);

    await userEvent.click(screen.getByRole('link', { name: 'About' }));

    expect(toggleDrawer).toHaveBeenCalledTimes(1);
  });

  it('should call toggleDrawer once when Escape is pressed', async () => {
    const toggleDrawer = vi.fn();
    render(<Drawer isDrawerOpen toggleDrawer={toggleDrawer} items={items} />);

    await userEvent.keyboard('{Escape}');

    expect(toggleDrawer).toHaveBeenCalledTimes(1);
  });
});
