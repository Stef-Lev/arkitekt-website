'use client';
import React, { useState, useEffect } from 'react';
import { cn } from '@/helpers/classnames';
import { IoMdMenu } from 'react-icons/io';

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [headerStyle, setHeaderStyle] = useState('');

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

  return (
    <header
      className={cn(
        'bg-teal-700',
        [
          isMobile,
          'fixed top-0 z-50 w-full',
          'fixed top-0 z-50 w-full transition-transform duration-300',
        ],
        [!isMobile, headerStyle],
      )}
    >
      <div
        className={cn(
          'flex items-center justify-between',
          'h-[80px]',
          'container',
        )}
      >
        <h1>Arkitekt</h1>
        <IoMdMenu size={40} />
      </div>
    </header>
  );
};

export default Header;
