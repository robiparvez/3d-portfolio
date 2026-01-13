import { useEffect, useRef, useState } from 'react';

/**
 * Hook to detect when an element is in viewport
 * Useful for lazy loading 3D scenes and heavy components
 */
const useIntersectionObserver = (options = {}) => {
    const elementRef = useRef(null);
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                // Once visible, keep it visible
                if (entry.isIntersecting) {
                    setIsIntersecting(true);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '50px',
                ...options
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [options]);

    return [elementRef, isIntersecting];
};

export default useIntersectionObserver;
