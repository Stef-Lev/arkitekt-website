import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { cn } from '@/helpers/classnames';
import SocialMedia from '@/components/social-media/social-media';
import { Props } from './drawer.types';
import styles from './drawer.module.css';

const Drawer = (props: Props) => {
  const { isDrawerOpen, toggleDrawer, items, className } = props;
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef(toggleDrawer);

  useEffect(() => {
    toggleRef.current = toggleDrawer;
  }, [toggleDrawer]);

  useEffect(() => {
    if (!isDrawerOpen) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    document.body.style.overflow = 'hidden';
    panelRef.current?.querySelector<HTMLElement>('a')?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        toggleRef.current();
        return;
      }
      if (event.key !== 'Tab' || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [isDrawerOpen]);

  return (
    <div
      id="mobile-navigation"
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
      aria-hidden={!isDrawerOpen}
      inert={!isDrawerOpen}
      className={cn(
        styles.drawer,
        [isDrawerOpen, styles.open, styles.closed],
        className,
      )}
    >
      <div className={styles.panel} ref={panelRef}>
        <div className={styles.header}>
          <Link href="/" aria-label="Home" onClick={toggleDrawer}>
            <Image
              src="/website-logo.png"
              alt="arkitekt logo"
              className={styles.logo}
              width={120}
              height={110}
            />
          </Link>
        </div>

        <div className={styles.navigation}>
          <nav aria-label="Main">
            <ul>
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(styles.navigationLink, [
                      pathname === item.href,
                      styles.active,
                    ])}
                    aria-current={pathname === item.href ? 'page' : undefined}
                    onClick={toggleDrawer}
                  >
                    {item.value}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <SocialMedia />
      </div>
    </div>
  );
};

export default Drawer;
