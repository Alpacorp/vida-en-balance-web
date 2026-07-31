import { useState, useEffect, useRef, FC } from "react";
import { Link } from "react-router-dom";

import { ArrowLeftIcon, ArrowRightIcon } from "@assets/icons";

import { usePrefersReducedMotion } from "@hooks/usePrefersReducedMotion";

import { slides } from "@content/home/hero/slides";

const AUTOPLAY_MS = 10_000;

const next = (index: number) => (index + 1) % slides.length;
const previous = (index: number) => (index - 1 + slides.length) % slides.length;

export const Hero: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef<number | null>(null);

  // Split on purpose. `autoplayWanted` is the visitor's explicit choice through
  // the pause button and has to survive them moving the pointer away;
  // `interacting` is the transient hover/focus pause and must not flip the
  // button's label.
  const [autoplayWanted, setAutoplayWanted] = useState(true);
  const [interacting, setInteracting] = useState(false);

  const prefersReducedMotion = usePrefersReducedMotion();
  const autoplayRunning =
    autoplayWanted && !interacting && !prefersReducedMotion;

  useEffect(() => {
    if (!autoplayRunning) return;

    const timer = setInterval(() => setCurrentSlide(next), AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [autoplayRunning]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const endX = e.changedTouches[0]?.clientX;
    if (touchStartX.current === null || endX === undefined) return;
    const diff = touchStartX.current - endX;
    if (Math.abs(diff) > 40) {
      setCurrentSlide(diff > 0 ? next : previous);
    }
    touchStartX.current = null;
  };

  return (
    /*
      aria-roledescription makes this announce as a carousel rather than a bare
      region, so the arrows and dots have a context to belong to.
    */
    <section
      aria-roledescription="carrusel"
      aria-label="Destacados"
      className="relative w-full overflow-hidden bg-gray-100 mt-20"
      style={{ height: "clamp(420px, 50vw, 680px)" }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/*
        Hovering or focusing a slide pauses the rotation: a slide changing while
        someone is reaching for its button moves the target out from under them.
        That alone would not satisfy WCAG 2.2.2 — it never triggers for a
        keyboard user reading without focusing anything — hence the pause button
        further down.

        This wrapper holds only the slides, not the arrows, dots or pause
        button. Around the whole carousel, pressing "resume" would appear to do
        nothing: the click leaves focus on that very button, so the rotation
        would stay paused until the visitor tabbed or moved away.
      */}
      <div
        className="absolute inset-0"
        onMouseEnter={() => setInteracting(true)}
        onMouseLeave={() => setInteracting(false)}
        onFocusCapture={() => setInteracting(true)}
        onBlurCapture={() => setInteracting(false)}
      >
        {slides.map((slide, index) => {
          const isCurrent = currentSlide === index;

          return (
            <div
              key={slide.id}
              role="group"
              aria-roledescription="diapositiva"
              aria-label={`${index + 1} de ${slides.length}`}
              /*
              The slides that are not showing stay in the layout at opacity 0,
              which hides them from sight and from nobody else: their links and
              buttons still took keyboard focus, so tabbing through the page
              landed on invisible controls. inert removes them from the tab
              order and from the accessibility tree in one attribute.
            */
              inert={!isCurrent}
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out motion-reduce:transition-none ${
                isCurrent ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <picture>
                  {slide.mobileImage && (
                    <source
                      srcSet={slide.mobileImage}
                      media="(max-width: 639px)"
                    />
                  )}
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className={`h-full w-full object-cover ${slide.mobileImage ? "object-top sm:object-center" : "object-center"}`}
                    fetchPriority={index === 0 ? "high" : "low"}
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding={index === 0 ? "sync" : "async"}
                  />
                </picture>
                <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 flex h-full items-center justify-center px-4">
                <div className="max-w-4xl text-center">
                  {slide.title && (
                    <h2 className="mb-4 text-4xl font-montserrat-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] sm:text-5xl md:text-6xl">
                      {slide.title}
                    </h2>
                  )}
                  {slide.subtitle && (
                    <p className="mb-8 text-lg text-white drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)] sm:text-xl md:text-2xl">
                      {slide.subtitle}
                    </p>
                  )}
                  <div className="flex flex-wrap justify-center gap-4">
                    {slide.ctaPrimary.isExternal ? (
                      <a
                        href={slide.ctaPrimary.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md bg-secondary px-8 py-3 font-montserrat-medium text-white transition-colors hover:bg-tertiary"
                      >
                        {slide.ctaPrimary.text}
                      </a>
                    ) : (
                      <Link
                        to={slide.ctaPrimary.url}
                        className="rounded-md bg-secondary px-8 py-3 font-montserrat-medium text-white transition-colors hover:bg-tertiary"
                      >
                        {slide.ctaPrimary.text}
                      </Link>
                    )}
                    {slide.ctaSecondary &&
                      (slide.ctaSecondary.isExternal ? (
                        <a
                          href={slide.ctaSecondary.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-md bg-white/10 px-8 py-3 font-montserrat-medium text-white transition-colors hover:bg-white/20"
                        >
                          {slide.ctaSecondary.text}
                        </a>
                      ) : (
                        <Link
                          to={slide.ctaSecondary.url}
                          className="rounded-md bg-white/10 px-8 py-3 font-montserrat-medium text-white transition-colors hover:bg-white/20"
                        >
                          {slide.ctaSecondary.text}
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <button
        type="button"
        onClick={() => setCurrentSlide(previous)}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-md bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
        aria-label="Diapositiva anterior"
      >
        <img src={ArrowLeftIcon} alt="" className="h-6 w-6" />
      </button>
      <button
        type="button"
        onClick={() => setCurrentSlide(next)}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-md bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
        aria-label="Diapositiva siguiente"
      >
        <img src={ArrowRightIcon} alt="" className="h-6 w-6" />
      </button>

      {/* Dots and pause control */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setCurrentSlide(index)}
            // aria-current is what tells assistive tech — and the tests — which
            // slide is showing. Before this, that lived only in a CSS class.
            aria-current={currentSlide === index ? "true" : undefined}
            className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full transition-colors ${
              currentSlide === index
                ? "bg-white"
                : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Ir a la diapositiva ${index + 1}`}
          />
        ))}

        {/*
          Only rendered when the rotation can actually run. With reduced motion
          the carousel never advances on its own, and a button offering to pause
          something that is already still is just a dead control.
        */}
        {!prefersReducedMotion && (
          <button
            type="button"
            onClick={() => setAutoplayWanted((wanted) => !wanted)}
            className="ml-2 rounded-full p-1 text-white transition-colors hover:bg-white/20"
            aria-label={
              autoplayWanted
                ? "Pausar la rotación automática"
                : "Reanudar la rotación automática"
            }
          >
            <svg
              className="h-3 w-3 sm:h-4 sm:w-4"
              viewBox="0 0 16 16"
              fill="currentColor"
              aria-hidden="true"
            >
              {autoplayWanted ? (
                <path d="M5 2h2v12H5V2zm4 0h2v12H9V2z" />
              ) : (
                <path d="M4 2l10 6-10 6V2z" />
              )}
            </svg>
          </button>
        )}
      </div>
    </section>
  );
};
