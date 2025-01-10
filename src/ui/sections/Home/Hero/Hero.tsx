import { useState, useEffect } from 'react';

import { ArrowLeftIcon, ArrowRightIcon } from "@assets/icons";

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  ctaPrimary: {
    text: string;
    url: string;
  };
  ctaSecondary?: {
    text: string;
    url: string;
  };
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Disfruta cuidándote",
    subtitle: "Conoce nuestros productos y tips para llevar una vida saludable.",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&h=800",
    ctaPrimary: {
      text: "Tips Balance",
      url: "/tips-balance"
    },
    ctaSecondary: {
      text: "Cuerpo Balance",
      url: "/cuerpo-balance"
    }
  },
  {
    id: 2,
    title: "Family Size",
    subtitle: "Más producto para toda la familia.",
    image: "https://images.unsplash.com/photo-1576867757603-05b134ebc379?auto=format&fit=crop&w=1200&h=800",
    ctaPrimary: {
      text: "Mente en Balance",
      url: "/mente-en-balance"
    },
  },
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[600px] w-full overflow-hidden bg-gray-100 mt-20">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex h-full items-center justify-center px-4">
            <div className="max-w-4xl text-center">
              <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
                {slide.title}
              </h1>
              <p className="mb-8 text-lg text-white/90 sm:text-xl md:text-2xl">
                {slide.subtitle}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={slide.ctaPrimary.url}
                  className="rounded-full bg-blue-600 px-8 py-3 font-medium text-white transition-colors hover:bg-blue-700"
                >
                  {slide.ctaPrimary.text}
                </a>
                {
                  slide.ctaSecondary && (
                    <a
                      href={slide.ctaSecondary.url}
                      className="rounded-full bg-white/10 px-8 py-3 font-medium text-white transition-colors hover:bg-white/20"
                    >
                      {slide.ctaSecondary.text}
                    </a>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1)}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
        aria-label="Previous slide"
      >
        <img src={ArrowLeftIcon} alt="left" className="h-6 w-6" />
      </button>
      <button
        onClick={() => setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1)}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
        aria-label="Next slide"
      >
        <img src={ArrowRightIcon} alt="right" className="h-6 w-6" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-3 rounded-full transition-colors ${
              currentSlide === index ? 'bg-white' : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
