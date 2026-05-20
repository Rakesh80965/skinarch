import { useEffect, useState } from 'react';

export function useHeaderBlur(threshold = 80) {
  const [blurred, setBlurred] = useState(false);
  useEffect(() => {
    const onScroll = () => setBlurred(window.scrollY > threshold);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);
  return blurred;
}
