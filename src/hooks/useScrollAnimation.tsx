import { useEffect, useRef, useState, RefObject } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useScrollAnimation<T extends HTMLElement>(
  options?: ScrollAnimationOptions
): [RefObject<T>, boolean] {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<T>(null);

  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options || {};

  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce && currentElement) { // Check currentElement again before unobserving
            observer.unobserve(currentElement);
          }
        } else {
          if (!triggerOnce) {
            setIsVisible(false);
          }
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(currentElement);

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [elementRef, threshold, rootMargin, triggerOnce]); // Dependencies are correct

  return [elementRef, isVisible];
}