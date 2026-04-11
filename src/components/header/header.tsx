'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { cn } from '@/helpers/classnames';
import Drawer from '../drawer/drawer';
import HamburgerButton from '../hamburger-button/hamburger-button';
import content from '@/content/content';
import styles from './header.module.css';

const Header = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const router = useRouter();

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

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <>
      <header
        className={cn(
          styles.header,
          isVisible ? styles.visible : styles.notVisible,
        )}
      >
        <div className={styles.wrapper}>
          <Image
            src="/website-logo.png"
            alt="arkitekt logo"
            className={styles.image}
            width={120}
            height={110}
            onClick={() => router.push('/')}
          />

          <HamburgerButton
            className={styles.hamburger}
            isDrawerOpen={isDrawerOpen}
            onClick={toggleDrawer}
          />

          <div className={styles.linksContainer}>
            {content.navbar.items.map((item) => (
              <Link key={item.href} href={item.href} className={styles.link}>
                {item.value}
              </Link>
            ))}
          </div>
        </div>
      </header>
      <Drawer
        className={styles.drawer}
        isDrawerOpen={isDrawerOpen}
        toggleDrawer={toggleDrawer}
        items={content.navbar.items}
      />
    </>
  );
};

export default Header;
