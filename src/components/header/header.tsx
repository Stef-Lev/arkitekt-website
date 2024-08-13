'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/helpers/classnames';
import Drawer from '../drawer/drawer';
import HamburgerButton from '../hamburger-button/hamburger-button';
import content from '@/content/content';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [headerStyle, setHeaderStyle] = useState('');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      const currentScrollTop =
        window.scrollY || document.documentElement.scrollTop;
      if (!isMobile) {
        if (currentScrollTop > lastScrollTop && currentScrollTop > 80) {
          // Scrolling down on desktop
          setHeaderStyle('-translate-y-full');
        } else {
          // Scrolling up on desktop
          setHeaderStyle('translate-y-0');
        }
        setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop); // For Mobile or negative scrolling
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop, isMobile]);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <>
      <header
        className={cn(
          'bg-teal-700 text-white fixed top-0 z-40 w-full transition-transform duration-300',
          [isMobile, 'translate-y-0', headerStyle],
        )}
      >
        <div className="flex items-center justify-between h-20 container mx-auto">
          <h1>Arkitekt</h1>
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
                  className="block py-2 px-4"
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
