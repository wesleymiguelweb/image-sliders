import { useCallback, useEffect, useState } from 'react';
import { slides } from '../data/slides.js';

export function useSlider() {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const goTo = useCallback(
    (index) => setCurrent((index + total) % total),
    [total],
  );

  const goPrevious = useCallback(() => goTo(current - 1), [current, goTo]);
  const goNext = useCallback(() => goTo(current + 1), [current, goTo]);

  useEffect(() => {
    [(current + 1) % total, (current - 1 + total) % total].forEach((index) => {
      const image = new window.Image();
      image.src = slides[index].image;
    });
  }, [current, total]);

  return {
    current,
    total,
    slide: slides[current],
    goTo,
    goPrevious,
    goNext,
  };
}
