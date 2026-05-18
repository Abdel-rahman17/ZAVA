"use client";

import React, { useState, useEffect } from "react";
import { ShieldCheck, Flame, Hourglass } from "lucide-react";

export default function QuantityProgress() {
  const total = 50;
  const sold = 23;
  const remaining = total - sold;
  const percentage = (sold / total) * 100;

  // Authentic drops countdown timer
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 32, seconds: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          clearInterval(timer);
          return prev;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="urgency" className="relative py-24 px-4 bg-[#111111] overflow-hidden border-y border-gold/15">
      {/* Background dark pattern overlay */}
      <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Main luxury outer card */}
        <div className="bg-[#FAF6EE] p-8 md:p-12 rounded-3xl border border-gold/25 shadow-2xl relative overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(214,176,106,0.15)]">
          
          {/* Subtle majestic brand crest watermark in top left corner */}
          <div className="absolute top-4 left-4 text-gold/10 pointer-events-none">
            <svg 
              className="w-24 h-24" 
              viewBox="0 0 100 100" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.2"
            >
              <path d="M25 35 L50 15 L75 35 L50 85 Z" />
              <path d="M35 40 L50 28 L65 40" />
              <circle cx="50" cy="50" r="9" />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* 1. LEFT SIDE: Stats & Sleek Golden Slider Progress Bar */}
            <div className="lg:col-span-7 space-y-7 text-right">
              
              {/* Luxury Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8E1B1F]/5 text-[#8E1B1F] text-[10px] font-bold tracking-wider border border-[#8E1B1F]/15">
                <Flame className="w-3.5 h-3.5 text-[#8E1B1F] animate-pulse" />
                <span>حالة الدفعة الأولى الحالية</span>
              </div>

              {/* Redesigned Clean Header */}
              <div className="space-y-2">
                <h3 className="text-xl md:text-3xl font-black text-ink-black tracking-tight leading-none">
                  الكمية محدودة — 50 قطعة فقط
                </h3>
                <p className="text-xs text-ink-black/60 font-medium">
                  يتم إنتاج وتوزيع القطع بدقة متناهية لضمان التفرد الكامل للعملاء.
                </p>
              </div>

              {/* Sleek Golden Slider Progress Gauge */}
              <div className="space-y-4 pt-2">
                
                {/* Stats Labels */}
                <div className="flex justify-between items-end text-xs font-bold">
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] text-ink-black/40 font-mono tracking-wider">RESERVED</span>
                    <span className="text-[#8E1B1F] text-sm font-extrabold mt-0.5">تم حجز {sold} قطعة</span>
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-[10px] text-ink-black/40 font-mono tracking-wider">AVAILABLE</span>
                    <span className="text-emerald-700 text-sm font-extrabold mt-0.5">متبقي {remaining} قطعة فقط</span>
                  </div>
                </div>
                
                {/* Redesigned Ultra-Sleek Progress Slider Line */}
                <div className="relative w-full h-[6px] bg-gold/20 rounded-full py-0.5 px-0.5 shadow-inner">
                  {/* Glowing Fill crimson line */}
                  <div
                    style={{ width: `${percentage}%` }}
                    className="h-full bg-gradient-to-l from-[#8E1B1F] to-[#b3272d] rounded-full transition-all duration-[1200ms] ease-out relative"
                  >
                    {/* Floating Luxury Gold-Foiled Circular Cursor */}
                    <div 
                      className="absolute left-0 -top-1.5 w-3.5 h-3.5 bg-[#8E1B1F] border-2 border-gold rounded-full shadow-[0_0_8px_rgba(214,176,106,0.85)] z-20 animate-pulse"
                      style={{ transform: "translateX(-50%)" }}
                    />
                  </div>
                </div>

                {/* Grid markings */}
                <div className="flex justify-between items-center text-[9px] text-ink-black/35 font-mono tracking-wider px-1">
                  <span>اصدار محدود 50/1</span>
                  <span>منتصف الكمية 50/25</span>
                  <span>النفاد 50/50</span>
                </div>

              </div>

              {/* Elegant minimal trust markings */}
              <div className="pt-5 border-t border-gold/15 flex flex-wrap items-center gap-6 text-[11px] text-ink-black/70 font-semibold">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  حجز مؤمن مع ضمان معاينة المقاس
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  خدمة توصيل ممتازة لباب المنزل
                </span>
              </div>

            </div>

            {/* 2. RIGHT SIDE: Premium Black & Gold Countdown Timer Block */}
            <div className="lg:col-span-5 bg-[#111111] text-ivory p-6 md:p-8 rounded-2xl border border-gold/25 flex flex-col items-center text-center shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none"></div>
              
              <Hourglass className="w-6 h-6 text-gold mb-3 animate-spin-slow" />
              
              <span className="text-[10px] text-gold font-display font-bold tracking-[0.25em] mb-1.5 uppercase">
                LIMITED DROP TIMER
              </span>
              <span className="text-xs text-ivory/70 mb-5 font-medium leading-relaxed">
                تنتهي صلاحية حجز الدفعة الحالية خلال:
              </span>

              {/* Redesigned Luxury Timer Cards */}
              <div className="flex items-center gap-3 dir-ltr">
                
                {/* Hours Card */}
                <div className="flex flex-col items-center">
                  <div className="w-12 py-2.5 bg-[#FAF6EE]/5 rounded-xl border border-gold/15 text-lg md:text-xl font-bold font-display text-ivory shadow-lg">
                    {String(timeLeft.hours).padStart(2, "0")}
                  </div>
                  <span className="text-[9px] text-gold/60 mt-1.5 uppercase font-bold font-display tracking-widest">HR</span>
                </div>
                
                <span className="text-lg font-bold text-gold/40 -translate-y-2.5 font-display">:</span>

                {/* Minutes Card */}
                <div className="flex flex-col items-center">
                  <div className="w-12 py-2.5 bg-[#FAF6EE]/5 rounded-xl border border-gold/15 text-lg md:text-xl font-bold font-display text-ivory shadow-lg">
                    {String(timeLeft.minutes).padStart(2, "0")}
                  </div>
                  <span className="text-[9px] text-gold/60 mt-1.5 uppercase font-bold font-display tracking-widest">MIN</span>
                </div>

                <span className="text-lg font-bold text-gold/40 -translate-y-2.5 font-display">:</span>

                {/* Seconds Card (Highlighted in Deep Crimson) */}
                <div className="flex flex-col items-center">
                  <div className="w-12 py-2.5 bg-[#8E1B1F] rounded-xl border border-[#8E1B1F] text-lg md:text-xl font-bold font-display text-ivory shadow-lg">
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </div>
                  <span className="text-[9px] text-gold/60 mt-1.5 uppercase font-bold font-display tracking-widest">SEC</span>
                </div>

              </div>

              <div className="mt-5 pt-3.5 border-t border-gold/10 w-full">
                <span className="text-[9px] text-gold/70 font-bold uppercase tracking-[0.15em] block">
                  * SECURE YOUR PIECE BEFORE OUT OF STOCK
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
