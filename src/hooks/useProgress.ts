import { useState, useEffect, useCallback } from 'react';

/**
 * Tracks reading progress based on scroll position.
 * Returns a value between 0 and 100.
 */
export function useProgress() {
  const [progress, setProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight > 0) {
      setProgress(Math.min(100, Math.round((scrollTop / docHeight) * 100)));
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return progress;
}
