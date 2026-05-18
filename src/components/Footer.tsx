"use client";

import React from "react";

// Inline SVG Instagram icon to ensure 100% robust compilation regardless of workspace resolution
const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = "https://wa.me/962795321462?text=" + encodeURIComponent("مرحبا، بدي أحجز قطعة ZAVA بمناسبة عيد الاستقلال");

  return (
    <footer className="relative bg-[#111111] text-ivory/60 py-16 px-4 md:px-8 overflow-hidden border-t border-gold/15">
      <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start text-right">

          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <svg className="w-6 h-6 text-gold" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 0L55.9 30.9L85.4 14.6L67.6 42.4L98.1 48L68.4 55.4L88.9 78.9L58.2 68.4L50 100L41.8 68.4L11.1 78.9L31.6 55.4L1.9 48L32.4 42.4L14.6 14.6L44.1 30.9L50 0Z" fill="currentColor" />
              </svg>
              <span className="font-display text-xl font-bold tracking-widest text-ivory">
                ZAVA JO
              </span>
            </div>
            <p className="text-xs md:text-sm text-ivory/70 leading-relaxed font-sans max-w-sm">
              أزياء أردنية مستوحاة من عراقة التاريخ وهيبة التراث. نقدم لك قطعتنا التراثية الاستثنائية بتطريز فاخر وخامات ممتازة لعيد الاستقلال.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-gold font-sans tracking-wide">
              تصفح الإصدار
            </h4>
            <ul className="space-y-2 text-xs md:text-sm">
              <li>
                <a href="#hero" className="hover:text-gold transition-colors duration-300">
                  البداية
                </a>
              </li>
              <li>
                <a href="#product" className="hover:text-gold transition-colors duration-300">
                  القطعة التراثية
                </a>
              </li>
              <li>
                <a href="#urgency" className="hover:text-gold transition-colors duration-300">
                  العدد المتبقي
                </a>
              </li>
              <li>
                <a href="#reserve" className="hover:text-gold transition-colors duration-300 font-bold text-ivory">
                  احجز الآن
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Socials */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-gold font-sans tracking-wide">
              قنوات التواصل
            </h4>
            <ul className="space-y-3 text-xs md:text-sm">
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-gold transition-colors duration-300"
                >
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  <span>واتساب: +962 7 9532 1462</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/zava.jo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-gold transition-colors duration-300"
                >
                  <InstagramIcon className="w-4 h-4 text-pink-500" />
                  <span>إنستغرام: @zava.jo</span>
                </a>
              </li>
              <li>
                <span className="text-[10px] text-ivory/40 block mt-2">
                  عمان، المملكة الأردنية الهاشمية
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Brand Stars and Divider */}
        <div className="mt-12 pt-8 border-t border-gold/15 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">

          <div className="flex items-center gap-1.5 text-gold/40">
            <span className="w-1 h-1 bg-gold rounded-full"></span>
            <span>JORDANIAN APPAREL BRAND</span>
            <span className="w-1 h-1 bg-gold rounded-full"></span>
          </div>

          <div>
            <p className="text-[10px] text-ivory/40 font-mono text-center md:text-left">
              &copy; {currentYear} ZAVA JO. ALL RIGHTS RESERVED • MADE WITH PRIDE IN JORDAN
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}
