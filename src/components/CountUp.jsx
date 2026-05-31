import React, { useEffect, useRef, useState } from 'react';

function CountUp({ end, duration = 2000, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animate();
          observer.unobserve(element);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const animate = () => {
    const startTime = performance.now();
    const endValue = typeof end === 'number' ? end : parseInt(end, 10);

    if (isNaN(endValue)) {
      setCount(end);
      return;
    }

    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * endValue);
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(step);
  };

  const displayValue = typeof end === 'number' || !isNaN(parseInt(end, 10))
    ? `${prefix}${count}${suffix}`
    : end;

  return <span ref={ref}>{displayValue}</span>;
}

export default CountUp;
