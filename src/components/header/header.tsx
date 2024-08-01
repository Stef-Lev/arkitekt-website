'use client';
import React, { useState, useEffect } from 'react';
import { cn } from '@/helpers/classnames';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import Drawer from '../drawer/drawer';

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [headerStyle, setHeaderStyle] = useState('');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      if (!isMobile) {
        const currentScrollTop =
          window.scrollY || document.documentElement.scrollTop;
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
  console.log(isDrawerOpen);
  return (
    <>
      <header
        className={cn(
          'bg-teal-700 text-white',
          [
            isMobile,
            'fixed top-0 z-40 w-full transition-transform duration-300',
            'lg:relative lg:translate-y-0', // Ensures header is static on large screens
          ],
          [!isMobile, headerStyle],
        )}
      >
        <div
          className={cn(
            'flex items-center justify-between',
            'h-[80px]',
            'container mx-auto',
          )}
        >
          <h1>Arkitekt</h1>

          {isDrawerOpen ? (
            <IoMdClose size={30} onClick={toggleDrawer} />
          ) : (
            <IoMdMenu size={30} onClick={toggleDrawer} />
          )}
        </div>
      </header>
      <Drawer isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default Header;
