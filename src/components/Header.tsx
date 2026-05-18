"use client";

import React, { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll height to trigger smooth background color transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll handler for anchor links
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header 
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 py-5 px-4 md:px-8 ${
        scrolled 
          ? "bg-[#111111]/90 backdrop-blur-md border-b border-[#D6B06A]/15 py-3.5 shadow-xl" 
          : "bg-transparent border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Call to Action Button (Left in standard RTL layout) */}
        <div>
          <a
            href="#reserve"
            onClick={(e) => handleScrollToSection(e, "reserve")}
            className="px-5 py-2.5 bg-[#8E1B1F] hover:bg-ivory hover:text-black text-ivory text-xs font-bold rounded-lg shadow-md transition-all duration-300 tracking-wider inline-block cursor-pointer hover:shadow-[0_0_15px_rgba(142,27,31,0.4)]"
          >
            احجز قطعتك
          </a>
        </div>

        {/* Navigation - Minimalist editorial styled links (Centered) */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-bold tracking-widest text-ivory/80">
          <a 
            href="#hero" 
            onClick={(e) => handleScrollToSection(e, "hero")}
            className="hover:text-[#D6B06A] transition-all duration-300"
          >
            البداية
          </a>
          <span className="w-1 h-1 bg-[#D6B06A]/30 rounded-full"></span>
          
          <a 
            href="#product" 
            onClick={(e) => handleScrollToSection(e, "product")}
            className="hover:text-[#D6B06A] transition-all duration-300"
          >
            القطعة التراثية
          </a>
          <span className="w-1 h-1 bg-[#D6B06A]/30 rounded-full"></span>
          
          <a 
            href="#urgency" 
            onClick={(e) => handleScrollToSection(e, "urgency")}
            className="hover:text-[#D6B06A] transition-all duration-300"
          >
            العدد المتبقي
          </a>
          <span className="w-1 h-1 bg-[#D6B06A]/30 rounded-full"></span>
          
          <a 
            href="#reserve" 
            onClick={(e) => handleScrollToSection(e, "reserve")}
            className="hover:text-[#D6B06A] transition-all duration-300"
          >
            احجز الآن
          </a>
        </nav>

        {/* Brand Logo & Star (Right in standard RTL layout) */}
        <a 
          href="#hero"
          onClick={(e) => handleScrollToSection(e, "hero")}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="flex flex-col text-right">
            <span className="font-display text-2xl font-black tracking-widest text-ivory group-hover:text-[#D6B06A] transition-colors duration-300 leading-none">
              ZAVA
            </span>
            <span className="text-[8px] text-[#D6B06A] font-bold tracking-[0.2em] mt-1 font-display">
              EST. 1946
            </span>
          </div>
          <svg className="w-7 h-7 text-[#D6B06A] transition-transform duration-500 group-hover:rotate-45" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 0L55.9 30.9L85.4 14.6L67.6 42.4L98.1 48L68.4 55.4L88.9 78.9L58.2 68.4L50 100L41.8 68.4L11.1 78.9L31.6 55.4L1.9 48L32.4 42.4L14.6 14.6L44.1 30.9L50 0Z" fill="currentColor"/>
          </svg>
        </a>

      </div>
    </header>
  );
}
