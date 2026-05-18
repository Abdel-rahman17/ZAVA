"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

export default function ProductShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollOffset, setScrollOffset] = useState(0);

  // Parallax scroll listener
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("showcase-parallax-section");
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setScrollOffset(window.scrollY - element.offsetTop);
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reduced slides list to exactly 4 items to match p1 to p4 images perfectly
  const textSlides = [
    {
      title: "إصدار الاستقلال المحدود",
      description: "50 قطعة فقط حصرية مرقمة يدوياً ومصنعة بعناية فائقة لضمان تميزك وتفردك.",
      tag: "LIMITED RUN"
    },
    {
      title: "مستوحى من الأردن",
      description: "تصميم غني يحكي حكاية الفخر الأردني؛ من نقوش البتراء الوردية وأعمدة جرش الشامخة.",
      tag: "HERITAGE STORY"
    },
    {
      title: "تصميم أمامي وخلفي",
      description: "نقوش تقليدية أنيقة تمتد على الصدر، ونقشة السيف والشهب والشعار الوطني في الخلف.",
      tag: "ROYAL EMBROIDERY"
    },
    {
      title: "خدمة التوصيل والحجز",
      description: "توصيل سريع وآمن لكافة المحافظات الـ 12 مع دعم فني مخصص لتأكيد طلبك عبر الواتساب.",
      tag: "NATIONWIDE & VIP"
    }
  ];

  const imageSlides = [
    "/p1.jpeg",
    "/p2.jpeg",
    "/p3.jpeg",
    "/p4.jpeg"
  ];

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % textSlides.length);
  }, [textSlides.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + textSlides.length) % textSlides.length);
  };

  // Autoplay intervals
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 4500);
    return () => clearInterval(timer);
  }, [handleNext]);

  return (
    <section
      id="showcase-parallax-section"
      className="relative w-full h-[85vh] md:h-[100vh] overflow-hidden bg-[#111111]"
    >

      {/* 1. Full-Width Background Parallax Image Slider (Exactly 4 items) */}
      <div className="absolute inset-0 w-full h-[125%] -top-[12%] z-0 pointer-events-none">
        {imageSlides.map((imgSrc, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 w-full h-full transition-all duration-[1000ms] ease-in-out transform ${idx === activeIndex
                ? "opacity-100 scale-100 z-10"
                : "opacity-0 scale-103 pointer-events-none z-0"
              }`}
            style={{
              transform: `translateY(${scrollOffset * 0.15}px)`
            }}
          >
            <img
              src={imgSrc}
              alt={`ZAVA Showcase ${idx + 1}`}
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
            {/* Dark gradient mask for premium contrast */}
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/15 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/35"></div>
          </div>
        ))}
      </div>

      {/* 2. Top Banner Title */}
      <div className="absolute top-8 right-6 md:right-12 lg:right-16 z-20 text-right text-white">
        <span className="text-[#D6B06A] font-display tracking-[0.25em] text-[10px] md:text-xs uppercase block mb-1 font-bold drop-shadow-md">
          THE LOOKBOOK • العرض البانورامي التفاعلي
        </span>
        <h3 className="text-lg md:text-2xl font-black text-ivory tracking-tight drop-shadow-md">
          تفاصيل حية بلا حدود
        </h3>
      </div>

      {/* 3. Text Aligned Beautifully to the Right (No Box, No Icons, Compact Elegant Font Size) */}
      <div className="max-w-7xl mx-auto w-full h-full relative z-20 flex flex-col justify-center px-6 md:px-12 lg:px-16 text-right">
        <div className="max-w-xl w-full min-h-[160px] flex flex-col justify-center pr-0 md:pr-4 select-none">

          {textSlides.map((slide, idx) => (
            <div
              key={idx}
              className={`transition-all duration-700 ease-in-out ${idx === activeIndex
                  ? "opacity-100 translate-x-0 relative z-10"
                  : "opacity-0 translate-x-8 absolute pointer-events-none z-0"
                }`}
            >
              {/* Category Tag */}
              <span className="text-[#D6B06A] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase font-display block mb-2 drop-shadow-md">
                {slide.tag}
              </span>

              {/* Downsized Title (Clean & Compact) */}
              <h4 className="text-xl md:text-3xl font-extrabold text-white mb-3 tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
                {slide.title}
              </h4>

              {/* Downsized Description (Clean & Readable) */}
              <p className="text-ivory/90 text-xs md:text-base leading-relaxed max-w-lg font-sans drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
                {slide.description}
              </p>

            </div>
          ))}

        </div>
      </div>

      {/* 4. Minimalist Navigation & Progress at the Bottom Right */}
      <div className="absolute bottom-8 right-6 md:right-12 lg:right-16 left-6 md:left-auto z-20 flex flex-col items-end gap-3.5 max-w-xs w-auto">

        {/* Compact timer line */}
        <div className="w-36 h-[2px] bg-white/20 rounded-full overflow-hidden">
          <div
            key={activeIndex}
            className="h-full bg-[#D6B06A] transition-all duration-[4500ms] ease-linear"
            style={{ width: "100%" }}
          />
        </div>

        {/* Arrow Navigation and Dot indicators */}
        <div className="flex items-center gap-4">

          {/* Active indicator dots (Exactly 4 dots) */}
          <div className="flex gap-1.5 ml-2">
            {imageSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-500 ${idx === activeIndex ? "w-5 bg-[#D6B06A]" : "w-1.5 bg-white/35"
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handlePrev}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#8E1B1F] border border-white/15 hover:border-[#8E1B1F] text-white flex items-center justify-center transition-all duration-300 cursor-pointer backdrop-blur-sm"
            aria-label="Previous Slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Left Arrow */}
          <button
            onClick={handleNext}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#8E1B1F] border border-white/15 hover:border-[#8E1B1F] text-white flex items-center justify-center transition-all duration-300 cursor-pointer backdrop-blur-sm"
            aria-label="Next Slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

        </div>

      </div>

      {/* Frame vignette overlay */}
      <div className="absolute inset-0 pointer-events-none z-15 shadow-[inset_0_0_80px_rgba(0,0,0,0.65)]"></div>

    </section>
  );
}
