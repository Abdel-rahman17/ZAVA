"use client";

import React from "react";

export default function ProductDetails() {
  return (
    <section id="product" className="relative py-20 px-4 bg-[#F4EFE6] overflow-hidden">
      {/* Subtle texture patterns */}
      <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none"></div>
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-[#8E1B1F] font-display tracking-widest text-xs uppercase block mb-3 font-semibold">
            THE CRAFT • تفاصيل القطعة الفاخرة
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#111111] mb-4">
            فخامة التراث والتصميم العصري
          </h2>
          <div className="w-24 h-[2px] bg-gold mx-auto mb-6"></div>
          <p className="text-ink-black/70 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            تمت صياغة هذا الإصدار ليمثل هويتنا الأردنية بأسمى صورها، جامعاً بين الراحة القصوى للقطن الفاخر والتصميم الفني الفريد.
          </p>
        </div>

        {/* 1. Brand Heritage Elements Mood Grid - Cleaned to exactly 4 items with balanced lg:grid-cols-4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Mood 1: Petra */}
          <div className="bg-[#FAF6EE] p-8 rounded-2xl border border-gold/20 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group hover:border-[#8E1B1F]/30">
            {/* Petra Facade Custom Gold SVG */}
            <svg 
              className="w-16 h-16 text-gold mb-6 transition-transform duration-500 group-hover:scale-105" 
              viewBox="0 0 100 100" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 90 H90 M15 90 V50 H25 V90 M75 90 V50 H85 V90" />
              <path d="M30 90 V45 M40 90 V45 M60 90 V45 M70 90 V45" />
              <path d="M15 45 H85 M15 45 L50 20 L85 45" />
              <path d="M45 45 V30 H55 V45" />
              <circle cx="50" cy="27" r="4" />
              <path d="M45 90 V65 H55 V90" />
            </svg>
            <span className="text-[10px] text-gold font-display font-bold tracking-widest mb-2">PETRA</span>
            <h4 className="text-lg font-bold text-ink-black mb-2">البنية الوردية</h4>
            <p className="text-xs text-ink-black/60 leading-relaxed">
              مستوحى من ألوان صخور البتراء الوردية وخطوطها المتعرجة الساحرة.
            </p>
          </div>

          {/* Mood 2: Jerash */}
          <div className="bg-[#FAF6EE] p-8 rounded-2xl border border-gold/20 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group hover:border-[#8E1B1F]/30">
            {/* Jerash Columns Custom Gold SVG */}
            <svg 
              className="w-16 h-16 text-gold mb-6 transition-transform duration-500 group-hover:scale-105" 
              viewBox="0 0 100 100" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 85 H90" />
              <rect x="22" y="30" width="8" height="50" />
              <path d="M20 30 H32 M18 80 H34" />
              <path d="M22 25 C22 28, 30 28, 30 25" />
              <rect x="46" y="20" width="8" height="60" />
              <path d="M44 20 H56 M42 80 H58" />
              <path d="M46 15 C46 18, 54 18, 54 15" />
              <rect x="70" y="30" width="8" height="50" />
              <path d="M68 30 H80 M66 80 H82" />
              <path d="M70 25 C70 28, 78 28, 78 25" />
            </svg>
            <span className="text-[10px] text-gold font-display font-bold tracking-widest mb-2">COLUMNS</span>
            <h4 className="text-lg font-bold text-ink-black mb-2">أعمدة جرش</h4>
            <p className="text-xs text-ink-black/60 leading-relaxed">
              ثبات وأصالة مستلهمة من الأعمدة الرومانية في جرش لتصميم يعبر عن الشموخ.
            </p>
          </div>

          {/* Mood 3: Textiles */}
          <div className="bg-[#FAF6EE] p-8 rounded-2xl border border-gold/20 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group hover:border-[#8E1B1F]/30">
            {/* Textile / Shemagh Motif Custom Gold SVG */}
            <svg 
              className="w-16 h-16 text-gold mb-6 transition-transform duration-500 group-hover:scale-105" 
              viewBox="0 0 100 100" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 50 L50 10 L90 50 L50 90 Z" />
              <path d="M25 50 L50 25 L75 50 L50 75 Z" strokeDasharray="3,3" />
              <path d="M50 10 V90 M10 50 H90" />
              <circle cx="50" cy="50" r="3" fill="currentColor" />
              <circle cx="50" cy="25" r="2" fill="currentColor" />
              <circle cx="50" cy="75" r="2" fill="currentColor" />
              <circle cx="25" cy="50" r="2" fill="currentColor" />
              <circle cx="75" cy="50" r="2" fill="currentColor" />
            </svg>
            <span className="text-[10px] text-gold font-display font-bold tracking-widest mb-2">TEXTILES</span>
            <h4 className="text-lg font-bold text-ink-black mb-2">النسيج التراثي</h4>
            <p className="text-xs text-ink-black/60 leading-relaxed">
              دمج النقوش الأردنية التقليدية باللون الأحمر الداكن والأسود الفخم.
            </p>
          </div>

          {/* Mood 4: Hospitality */}
          <div className="bg-[#FAF6EE] p-8 rounded-2xl border border-gold/20 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group hover:border-[#8E1B1F]/30">
            {/* Traditional Hospitality Dallah Custom Gold SVG */}
            <svg 
              className="w-16 h-16 text-gold mb-6 transition-transform duration-500 group-hover:scale-105" 
              viewBox="0 0 100 100" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M45 20 L50 10 L55 20 Z" fill="currentColor" />
              <path d="M38 25 H62" />
              <path d="M42 25 L45 45 H55 L58 25 Z" />
              <path d="M45 45 C35 50, 35 75, 48 80 H52 C65 75, 65 50, 55 45 Z" />
              <path d="M42 35 C30 30, 25 45, 28 50 C28 50, 32 45, 43 45" />
              <path d="M57 32 C75 35, 75 70, 52 78" strokeWidth="2" />
              <rect x="42" y="80" width="16" height="5" rx="1" />
            </svg>
            <span className="text-[10px] text-gold font-display font-bold tracking-widest mb-2">HOSPITALITY</span>
            <h4 className="text-lg font-bold text-ink-black mb-2">الكرم الأردني</h4>
            <p className="text-xs text-ink-black/60 leading-relaxed">
              رمزية الدلة التقليدية الممثلة للأصالة والترحيب والشهامة الأردنية.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
