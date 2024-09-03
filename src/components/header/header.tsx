'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { cn } from '@/helpers/classnames';
import Drawer from '../drawer/drawer';
import HamburgerButton from '../hamburger-button/hamburger-button';
import content from '@/content/content';

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
          'bg-[#0a0a0a] text-white',
          'w-full z-40 fixed top-0 left-0',
          'transition-transform duration-300',
          [isVisible, 'translate-y-0', '-translate-y-full'],
        )}
      >
        <div
          className={cn(
            'container',
            'flex items-center justify-between',
            'h-20 mx-auto',
          )}
        >
          <Image
            src="/website-logo.png"
            alt="arkitekt logo"
            className="aspect-[256/110] hover:cursor-pointer"
            width={120}
            height={110}
            onClick={() => router.push('/')}
          />

          <HamburgerButton
            className="block md:hidden"
            isDrawerOpen={isDrawerOpen}
            onClick={toggleDrawer}
          />

          <div className="hidden md:flex">
            {content.navbar.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'py-2 px-4',
                  'block',
                  'hover:text-mainBlue',
                  'hover:underline hover:underline-offset-4',
                )}
              >
                {item.value}
              </Link>
            ))}
          </div>
        </div>
      </header>
      <Drawer
        className="block md:hidden"
        isDrawerOpen={isDrawerOpen}
        toggleDrawer={toggleDrawer}
        items={content.navbar.items}
      />
    </>
  );
};

export default Header;
