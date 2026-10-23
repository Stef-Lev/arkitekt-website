'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import content from '@/content/content';
import styles from './latest-updates.module.css';

const DWELL_MS = 6000;

const LatestUpdates = () => {
  const { slides } = content.homePage.latestUpdates;
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center' },
    [
      Autoplay({
        delay: DWELL_MS,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  if (slides.length === 0) return null;

  return (
    <section className={styles.section} aria-label="Latest updates">
      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.track}>
          {slides.map((slide, index) => {
            const active = index === selected;
            return (
              <div
                key={slide.id}
                className={`${styles.slide} ${active ? styles.active : ''}`}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${slides.length}`}
                onClick={
                  !active
                    ? () => scrollTo(index)
                    : slide.cta
                      ? () =>
                          window.open(
                            slide.cta!.href,
                            '_blank',
                            'noopener,noreferrer',
                          )
                      : undefined
                }
              >
                <div
                  className={`${styles.card} ${active && slide.cta ? styles.clickable : ''}`}
                >
                  <div className={styles.glass} aria-hidden="true">
                    <Image
                      className={styles.glassImage}
                      src={slide.image}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 700px, 90vw"
                    />
                  </div>
                  <Image
                    className={styles.image}
                    src={slide.image}
                    alt={slide.imageAlt}
                    width={320}
                    height={320}
                  />
                  <div className={styles.text}>
                    <h5 className={styles.title}>{slide.title}</h5>
                    <p className={styles.subtitle}>{slide.subtitle}</p>
                    {slide.cta ? (
                      <a
                        className={styles.cta}
                        href={slide.cta.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        tabIndex={active ? 0 : -1}
                        onClick={(event) => event.stopPropagation()}
                      >
                        {slide.cta.label}
                      </a>
                    ) : (
                      <span
                        className={`${styles.cta} ${styles.ctaPlaceholder}`}
                        aria-hidden="true"
                      >
                        &nbsp;
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.dots}>
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            className={`${styles.dot} ${index === selected ? styles.dotActive : ''}`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === selected}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default LatestUpdates;
