import { useEffect } from 'react';

export function useScrollReveal(selector = '.reveal, .reveal-card') {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(selector);
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [selector]);
}
