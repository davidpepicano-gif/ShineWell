import React, { useState, useEffect, useRef } from 'react';

interface LazyMapProps {
  src: string;
  title: string;
  className?: string;
  height?: string;
  width?: string;
}

export default function LazyMap({
  src,
  title,
  className = "",
  height = "100%",
  width = "100%"
}: LazyMapProps) {
  const [shouldLoad, setShouldLoad] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    let loaded = false;

    const triggerLoad = () => {
      if (loaded) return;
      loaded = true;
      setShouldLoad(true);

      // Clean up window interaction listeners
      events.forEach(e => window.removeEventListener(e, triggerLoad));
    };

    const events = ['scroll', 'mousemove', 'touchstart', 'pointerdown', 'keydown'];

    // 1. Listen for user interactions as a proactive load
    events.forEach(e => window.addEventListener(e, triggerLoad, { passive: true }));

    // 2. Listen for intersection
    if (containerRef.current && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          triggerLoad();
          if (observer) {
            observer.disconnect();
          }
        }
      }, { rootMargin: '150px' });
      observer.observe(containerRef.current);
    } else {
      // Fallback
      const timer = setTimeout(triggerLoad, 3000);
      return () => clearTimeout(timer);
    }

    return () => {
      events.forEach(e => window.removeEventListener(e, triggerLoad));
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-full bg-[#3a3f3c] overflow-hidden flex items-center justify-center"
      style={{ height, width }}
    >
      {shouldLoad ? (
        <iframe
          src={src}
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
          title={title}
          className={className}
        ></iframe>
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-[#e8e5df]">
          <div className="w-8 h-8 rounded-full border-2 border-[#5c635f] border-t-[#C86B53] animate-spin mb-2" />
          <p className="text-xs font-mono text-gray-400">Loading Map Area...</p>
        </div>
      )}
    </div>
  );
}
