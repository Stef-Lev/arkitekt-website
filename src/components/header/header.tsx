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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [headerStyle, setHeaderStyle] = useState('');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      const currentScrollTop =
        window.scrollY || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop && currentScrollTop > 80) {
        setHeaderStyle('-translate-y-full');
      } else {
        setHeaderStyle('translate-y-0');
      }
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <>
      <header
        className={cn(
          'bg-[#0a0a0a] text-white',
          'w-full z-40',
          'transition-transform duration-300',
          headerStyle,
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
          {isMobile ? (
            <HamburgerButton
              isDrawerOpen={isDrawerOpen}
              onClick={toggleDrawer}
            />
          ) : (
            <div className="flex">
              {content.navbar.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'py-2 px-4',
                    'block',
                    'hover:text-blue-600',
                    'hover:underline hover:underline-offset-4',
                  )}
                >
                  {item.value}
                </Link>
              ))}
            </div>
          )}
        </div>
      </header>
      {isMobile && (
        <Drawer
          isDrawerOpen={isDrawerOpen}
          toggleDrawer={toggleDrawer}
          items={content.navbar.items}
        />
      )}
    </>
  );
};

export default Header;
