'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/helpers/classnames';
import Drawer from '../drawer/drawer';
import HamburgerButton from '../hamburger-button/hamburger-button';
import content from '@/content/content';
import styles from './header.module.css';

const Header = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.scrollY || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop && currentScrollTop > 80) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollTop(currentScrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  useEffect(() => {
    const desktopMedia = window.matchMedia('(min-width: 768px)');
    const handleBreakpointChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsDrawerOpen(false);
      }
    };

    desktopMedia.addEventListener('change', handleBreakpointChange);
    return () => {
      desktopMedia.removeEventListener('change', handleBreakpointChange);
    };
  }, []);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <>
      <header className={cn(styles.header, [!isVisible, styles.hidden])}>
        <div className={styles.inner}>
          <Link href="/" aria-label="Home">
            <Image
              src="/website-logo.png"
              alt="arkitekt logo"
              className={styles.logo}
              width={120}
              height={110}
            />
          </Link>

          <HamburgerButton isDrawerOpen={isDrawerOpen} onClick={toggleDrawer} />

          <div className={styles.navigation}>
            {content.navbar.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(styles.navigationLink, [
                  pathname === item.href,
                  styles.active,
                ])}
                aria-current={pathname === item.href ? 'page' : undefined}
              >
                {item.value}
              </Link>
            ))}
          </div>
        </div>
      </header>
      <Drawer
        className={styles.mobileOnly}
        isDrawerOpen={isDrawerOpen}
        toggleDrawer={toggleDrawer}
        items={content.navbar.items}
      />
    </>
  );
};

export default Header;
