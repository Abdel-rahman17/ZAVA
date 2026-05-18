"use client";

import React from "react";

export default function WhatsAppButton() {
  const whatsappUrl = "https://wa.me/962795321462?text=" + encodeURIComponent("مرحبا، بدي أحجز قطعة ZAVA بمناسبة عيد الاستقلال");

  return (
    <div className="fixed bottom-6 left-6 z-50 group">
      {/* Glow pulse ring effect */}
      <span className="absolute -inset-1.5 bg-emerald-500 rounded-full blur opacity-30 group-hover:opacity-50 animate-pulse duration-1000"></span>

      {/* Tooltip */}
      <div className="absolute bottom-16 left-0 bg-ink-black text-ivory text-xs px-3 py-1.5 rounded-lg border border-gold/30 shadow-xl opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-none whitespace-nowrap text-right flex flex-col items-end">
        <span className="font-semibold">تواصل معنا مباشر</span>
        <span className="text-[10px] text-gold mt-0.5">احجز مقاسك عبر واتساب</span>
      </div>

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 group cursor-pointer"
        aria-label="Contact ZAVA on WhatsApp"
      >
        {/* SVG WhatsApp Logo */}
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.968C16.64 1.97 14.162.945 11.536.945c-5.442 0-9.87 4.372-9.874 9.802-.002 1.83.481 3.614 1.398 5.183L2.072 22.25l6.575-1.722L6.648 19.154z" />
        </svg>
      </a>
    </div>
  );
}
