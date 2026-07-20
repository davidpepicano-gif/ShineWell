import React, { useState, useEffect, useRef } from 'react';

interface LazyGHLEmbedProps {
  src: string;
  id: string;
  title: string;
  minHeight: string;
  scrolling?: string;
  formId?: string;
  formName?: string;
}

export default function LazyGHLEmbed({
  src,
  id,
  title,
  minHeight,
  scrolling = "no",
  formId,
  formName
}: LazyGHLEmbedProps) {
  const [shouldLoad, setShouldLoad] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    let loaded = false;

    const triggerLoad = () => {
      if (loaded) return;
      loaded = true;
      setShouldLoad(true);

      // Clean up window listeners
      events.forEach(e => window.removeEventListener(e, triggerLoad));
      
      // Inject GHL embed script if not already present
      if (!document.getElementById('ghl-form-embed-script')) {
        const script = document.createElement('script');
        script.id = 'ghl-form-embed-script';
        script.src = 'https://links.somosoverflow.com/js/form_embed.js';
        script.type = 'text/javascript';
        script.async = true;
        document.body.appendChild(script);
      }
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
      }, { rootMargin: '200px' });
      observer.observe(containerRef.current);
    } else {
      // Fallback: load after a small delay
      const timer = setTimeout(triggerLoad, 2500);
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
      className="w-full relative bg-[#F9F8F6] rounded-xl overflow-hidden flex items-center justify-center border border-[#e8e5df]"
      style={{ minHeight }}
    >
      {shouldLoad ? (
        <iframe
          src={src}
          style={{ width: '100%', height: '100%', minHeight, border: 'none', overflow: scrolling === 'auto' ? 'auto' : 'hidden' }}
          scrolling={scrolling}
          id={id}
          title={title}
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name={formName}
          data-height={minHeight.replace('px', '')}
          data-layout-iframe-id={id}
          data-form-id={formId}
        ></iframe>
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          {/* Branded loading skeleton */}
          <div className="w-12 h-12 rounded-full border-4 border-[#CAD4CD] border-t-[#C86B53] animate-spin mb-4" />
          <p className="font-serif text-[#2C302E] text-lg font-medium">Loading Booking System...</p>
          <p className="text-sm text-[#5c635f] mt-1">Securing connection to ShineWell scheduler</p>
        </div>
      )}
    </div>
  );
}
