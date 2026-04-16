import { useCallback, useEffect, useRef } from 'react';

export function useRevealOnScroll(threshold = 0.12) {
  const observerRef = useRef(null);
  const pendingNodesRef = useRef(new Set());

  const revealRef = useCallback((node) => {
    if (!node) return;

    pendingNodesRef.current.add(node);

    if (observerRef.current) {
      observerRef.current.observe(node);
    }
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    pendingNodesRef.current.forEach((node) => {
      if (node.isConnected) {
        observerRef.current.observe(node);
      }
    });

    return () => {
      observerRef.current?.disconnect();
      observerRef.current = null;
    };
  }, [threshold]);

  return revealRef;
}
