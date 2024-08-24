'use client';
import { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';

const ScrollTopButton: React.FC = () => {
  const [opacity, setOpacity] = useState<number>(0);
  const ScrollStart = 200;
  const ScrollEnd = 300;

  const handleScrollTop = () => {
    const scrollDuration = 500;
    const scrollStep = -window.scrollY / (scrollDuration / 15);

    const smoothScroll = () => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
        requestAnimationFrame(smoothScroll);
      }
    };

    requestAnimationFrame(smoothScroll);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Calculate opacity based on scroll position
      if (scrollY <= ScrollStart) {
        setOpacity(0);
      } else if (scrollY >= ScrollEnd) {
        setOpacity(1);
      } else {
        const calculatedOpacity =
          (scrollY - ScrollStart) / (ScrollEnd - ScrollStart);
        setOpacity(calculatedOpacity);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [opacity]);

  return (
    <div
      className={`sticky bottom-[40px] z-[1001] flex justify-end transition-opacity duration-300 ${
        opacity === 0 ? 'pointer-events-none' : 'pointer-events-auto'
      }`}
      style={{ opacity }}
    >
      <div className="pr-5">
        <div
          className="flex justify-center items-center w-[40px] h-[40px] rounded-lg bg-gray-600 text-white hover:bg-gray-400"
          onClick={handleScrollTop}
        >
          <FiArrowUp size="30px" />
        </div>
      </div>
    </div>
  );
};

export default ScrollTopButton;
