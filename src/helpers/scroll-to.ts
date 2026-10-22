let animationFrame: number | undefined;

export const scrollTo = (target: number, duration = 500) => {
  if (animationFrame !== undefined) {
    window.cancelAnimationFrame(animationFrame);
    animationFrame = undefined;
  }

  const maxScroll = Math.max(
    0,
    document.documentElement.scrollHeight - window.innerHeight,
  );
  const destination = Math.min(Math.max(0, target), maxScroll);

  if (
    duration <= 0 ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) {
    window.scrollTo({ top: destination, behavior: 'instant' });
    return;
  }

  const start = window.scrollY;
  const startTime = performance.now();

  const animate = (timestamp: number) => {
    const progress = Math.min(
      Math.max((timestamp - startTime) / duration, 0),
      1,
    );
    const eased =
      progress < 0.5 ? 4 * progress ** 3 : 1 - (-2 * progress + 2) ** 3 / 2;

    window.scrollTo({
      top: start + (destination - start) * eased,
      behavior: 'instant',
    });

    animationFrame =
      progress < 1 ? window.requestAnimationFrame(animate) : undefined;
  };

  animationFrame = window.requestAnimationFrame(animate);
};
