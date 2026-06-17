import { useEffect, useRef, useState } from "react";

function LazyVideo({ src, title, className }) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "250px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef}>
      {isVisible ? (
        <video
          controls
          preload="none"
          className={className}
          title={title}
          playsInline
        >
          <source src={src} type="video/mp4" />
          Your browser does not support video playback.
        </video>
      ) : (
        <div
          className={`${className} bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center`}
          aria-label={`Video: ${title} – scroll to load`}
        >
          <div className="text-center text-white select-none">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-3">
              <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white ml-1" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="text-sm text-gray-300 px-4 truncate max-w-[180px]">{title}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default LazyVideo;
