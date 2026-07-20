import { jsxDEV } from "react/jsx-dev-runtime";
import { useState, useRef, useEffect } from "react";
function LazyGHLEmbed({
  src,
  id,
  title,
  minHeight,
  scrolling = "no",
  formId,
  formName
}) {
  const [shouldLoad, setShouldLoad] = useState(false);
  const containerRef = useRef(null);
  useEffect(() => {
    let observer = null;
    let loaded = false;
    const triggerLoad = () => {
      if (loaded) return;
      loaded = true;
      setShouldLoad(true);
      events.forEach((e) => window.removeEventListener(e, triggerLoad));
      if (!document.getElementById("ghl-form-embed-script")) {
        const script = document.createElement("script");
        script.id = "ghl-form-embed-script";
        script.src = "https://links.somosoverflow.com/js/form_embed.js";
        script.type = "text/javascript";
        script.async = true;
        document.body.appendChild(script);
      }
    };
    const events = ["scroll", "mousemove", "touchstart", "pointerdown", "keydown"];
    events.forEach((e) => window.addEventListener(e, triggerLoad, { passive: true }));
    if (containerRef.current && "IntersectionObserver" in window) {
      observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          triggerLoad();
          if (observer) {
            observer.disconnect();
          }
        }
      }, { rootMargin: "200px" });
      observer.observe(containerRef.current);
    } else {
      const timer = setTimeout(triggerLoad, 2500);
      return () => clearTimeout(timer);
    }
    return () => {
      events.forEach((e) => window.removeEventListener(e, triggerLoad));
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      ref: containerRef,
      className: "w-full relative bg-[#F9F8F6] rounded-xl overflow-hidden flex items-center justify-center border border-[#e8e5df]",
      style: { minHeight },
      children: shouldLoad ? /* @__PURE__ */ jsxDEV(
        "iframe",
        {
          src,
          style: { width: "100%", height: "100%", minHeight, border: "none", overflow: scrolling === "auto" ? "auto" : "hidden" },
          scrolling,
          id,
          title,
          "data-layout": "{'id':'INLINE'}",
          "data-trigger-type": "alwaysShow",
          "data-trigger-value": "",
          "data-activation-type": "alwaysActivated",
          "data-activation-value": "",
          "data-deactivation-type": "neverDeactivate",
          "data-deactivation-value": "",
          "data-form-name": formName,
          "data-height": minHeight.replace("px", ""),
          "data-layout-iframe-id": id,
          "data-form-id": formId
        },
        void 0,
        false,
        {
          fileName: "/app/applet/src/components/LazyGHLEmbed.tsx",
          lineNumber: 85,
          columnNumber: 9
        },
        this
      ) : /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 flex flex-col items-center justify-center p-6 text-center", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-12 rounded-full border-4 border-[#CAD4CD] border-t-[#C86B53] animate-spin mb-4" }, void 0, false, {
          fileName: "/app/applet/src/components/LazyGHLEmbed.tsx",
          lineNumber: 106,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "font-serif text-[#2C302E] text-lg font-medium", children: "Loading Booking System..." }, void 0, false, {
          fileName: "/app/applet/src/components/LazyGHLEmbed.tsx",
          lineNumber: 107,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-[#5c635f] mt-1", children: "Securing connection to ShineWell scheduler" }, void 0, false, {
          fileName: "/app/applet/src/components/LazyGHLEmbed.tsx",
          lineNumber: 108,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/LazyGHLEmbed.tsx",
        lineNumber: 104,
        columnNumber: 9
      }, this)
    },
    void 0,
    false,
    {
      fileName: "/app/applet/src/components/LazyGHLEmbed.tsx",
      lineNumber: 79,
      columnNumber: 5
    },
    this
  );
}
export {
  LazyGHLEmbed as L
};
