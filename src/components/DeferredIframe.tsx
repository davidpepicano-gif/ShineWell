import React, { useState, useEffect, useRef } from 'react';

interface DeferredIframeProps extends React.IframeHTMLAttributes<HTMLIFrameElement> {
  src?: string;
  minHeight?: string;
  fallbackText?: string;
  scrolling?: string;
  [key: string]: any;
}

export default function DeferredIframe({
  src,
  minHeight = '500px',
  fallbackText = 'Loading secure booking form...',
  ...props
}: DeferredIframeProps) {
  const [shouldLoad, setShouldLoad] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If we already loaded, no need to listen
    if (shouldLoad) return;

    // Trigger loading of the iframe
    const triggerLoad = () => {
      setShouldLoad(true);
    };

    // 1. Listen for user interactions (hover, scroll, click, keydown, touch)
    const interactionEvents = ['mouseover', 'mousemove', 'mousedown', 'touchstart', 'scroll', 'keydown'];
    
    const handleInteraction = () => {
      triggerLoad();
      cleanup();
    };

    const cleanup = () => {
      interactionEvents.forEach(event => {
        window.removeEventListener(event, handleInteraction, { capture: true });
      });
    };

    interactionEvents.forEach(event => {
      window.addEventListener(event, handleInteraction, { passive: true, capture: true });
    });

    // 2. Intersection Observer (if it comes into view)
    let observer: IntersectionObserver | null = null;
    if (containerRef.current && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              triggerLoad();
              cleanup();
              if (observer) observer.disconnect();
            }
          });
        },
        { rootMargin: '200px' } // Load slightly before it scrolls into view
      );
      observer.observe(containerRef.current);
    } else {
      // Fallback for browsers without IntersectionObserver
      const timer = setTimeout(triggerLoad, 3000);
      return () => {
        cleanup();
        clearTimeout(timer);
      };
    }

    return () => {
      cleanup();
      if (observer) {
        observer.disconnect();
      }
    };
  }, [shouldLoad]);

  return (
    <div 
      ref={containerRef} 
      style={{ minHeight }} 
      className="w-full flex items-center justify-center bg-[#F9F8F6] relative rounded-xl"
    >
      {shouldLoad ? (
        <>
          <iframe
            src={src}
            style={{ width: '100%', height: '100%', minHeight, border: 'none' }}
            {...props}
          />
          {/* GoHighLevel dynamic script injection */}
          <DynamicScriptLoader src="https://links.somosoverflow.com/js/form_embed.js" />
        </>
      ) : (
        <div className="flex flex-col items-center justify-center p-8 text-center text-[#5c635f] font-light">
          <div className="w-10 h-10 border-2 border-[#607564] border-t-transparent rounded-full animate-spin mb-4" />
          <p className="text-sm">{fallbackText}</p>
        </div>
      )}
    </div>
  );
}

// Internal helper component to dynamically inject GoHighLevel's form_embed.js
function DynamicScriptLoader({ src }: { src: string }) {
  useEffect(() => {
    const existingScript = document.querySelector(`script[src="${src}"]`);
    if (existingScript) return;

    const script = document.createElement('script');
    script.src = src;
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up script on unmount if needed
    };
  }, [src]);

  return null;
}
