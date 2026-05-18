"use client";

import React from "react";

export default function Hero() {
  const handleScrollToReserve = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("reserve");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const whatsappUrl = "https://wa.me/962795321462?text=" + encodeURIComponent("مرحبا، بدي أحجز قطعة ZAVA بمناسبة عيد الاستقلال");

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-[#111111] flex items-center">
      
      {/* 1. Fullscreen Background Video (Clear, vibrant, and centerpiece) */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover scale-100"
        >
          <source src="/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* 2. Extremely Light Premium Overlays (Drastically reduced to make the video extremely clear) */}
      {/* 25% transparent black overlay for soft contrast */}
      <div className="absolute inset-0 bg-black/25 z-10 pointer-events-none"></div>
      
      {/* Very soft gradient at the bottom only to fade naturally into the next section */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 z-10 pointer-events-none"></div>

      {/* 3. Ultra-Minimalist Editorial Content (Arabic RTL / Centered for Luxury feel) */}
      <div className="max-w-7xl mx-auto w-full h-full relative z-20 flex flex-col justify-center items-center px-6 text-center">
        <div className="max-w-xl w-full flex flex-col items-center space-y-6 md:space-y-8 animate-fade-in-up">
          
          {/* Brand Mark & Label */}
          <div className="text-[#D6B06A] text-xs md:text-sm font-bold tracking-[0.3em] font-display uppercase drop-shadow-md">
            ZAVA JO • LIMITED DROP
          </div>

          {/* Ultra Bold and Minimalist Heading */}
          <div className="space-y-2 md:space-y-3">
            <h1 className="text-6xl md:text-8xl font-black text-ivory tracking-wider uppercase font-sans drop-shadow-lg">
              ZAVA
            </h1>
            <p className="text-xl md:text-2xl font-bold text-ivory tracking-normal drop-shadow-md">
              إصدار الاستقلال المحدود 🇯🇴
            </p>
          </div>

          {/* Clean Price Line (Extremely minimal) */}
          <div className="text-sm md:text-base text-ivory/90 font-medium drop-shadow-sm flex items-center gap-3">
            <span className="text-ivory/50 line-through">32 JOD</span>
            <span className="text-gold font-bold font-display text-lg">24.99 JOD</span>
          </div>

          {/* High-End Clean Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
            
            {/* Primary Reserve Button */}
            <a
              href="#reserve"
              onClick={handleScrollToReserve}
              className="px-10 py-4 bg-[#8E1B1F] hover:bg-ivory hover:text-black text-ivory text-center font-bold rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 tracking-wider hover:shadow-[0_0_25px_rgba(142,27,31,0.5)] cursor-pointer text-sm"
            >
              احجز قطعتك الآن
            </a>

            {/* Glassmorphic WhatsApp Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-ivory text-center font-bold rounded-xl shadow-md transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer text-sm"
            >
              <svg className="w-4 h-4 text-emerald-400 fill-current ml-1" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.968C16.64 1.97 14.162.945 11.536.945c-5.442 0-9.87 4.372-9.874 9.802-.002 1.83.481 3.614 1.398 5.183L2.072 22.25l6.575-1.722L6.648 19.154z" />
              </svg>
              <span>تواصل واتساب</span>
            </a>

          </div>

        </div>
      </div>

      {/* 4. Luxury Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-ivory/50 animate-bounce cursor-pointer" 
        onClick={handleScrollToReserve}
      >
        <span className="text-[9px] font-display tracking-widest uppercase">SCROLL</span>
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

    </section>
  );
}
