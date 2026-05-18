"use client";

import React, { useState } from "react";
import { User, Phone, MapPin, Package, FileText, Shirt, CheckCircle, Loader2 } from "lucide-react";

const GOVERNORATES = [
  "عمان", "إربد", "الزرقاء", "البلقاء", "العقبة", 
  "الكرك", "مأدبا", "جرش", "عجلون", "المفرق", "معان", "الطفيلة"
];

const SIZES = ["S", "M", "L", "XL", "XXL"];
const QUANTITIES = [1, 2, 3, 4, 5];

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    governorate: "",
    size: "",
    quantity: "1",
    notes: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName.trim()) {
      setErrorMessage("الرجاء إدخال الاسم الكامل");
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMessage("الرجاء إدخال رقم الهاتف");
      return;
    }
    if (!formData.governorate) {
      setErrorMessage("الرجاء اختيار المحافظة");
      return;
    }
    if (!formData.size) {
      setErrorMessage("الرجاء اختيار المقاس");
      return;
    }

    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/reserve", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setErrorMessage(data.error || "حدث خطأ أثناء إرسال طلبك. الرجاء المحاولة مرة أخرى.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      // Fallback: trigger successful state locally while offering WhatsApp checkout
      setIsSubmitted(true);
    } finally {
      setIsLoading(false);
    }
  };

  const triggerWhatsApp = () => {
    const whatsappText = `مرحبا، قمت بحجز قطعة ZAVA التراثية.\nالاسم: ${formData.fullName || "(مكتمل)"}\nالهاتف: ${formData.phone || "(مكتمل)"}\nالمحافظة: ${formData.governorate || "(مكتمل)"}\nالمقاس: ${formData.size || "(مكتمل)"}\nالكمية: ${formData.quantity || "1"}\nملاحظات: ${formData.notes || "لا يوجد"}`;
    window.open(`https://wa.me/962795321462?text=${encodeURIComponent(whatsappText)}`, "_blank");
  };

  return (
    <section id="reserve" className="relative py-28 px-4 bg-[#111111] overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#8E1B1F] rounded-full blur-[160px] opacity-[0.08] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-display tracking-[0.3em] text-xs uppercase block mb-3 font-bold">
            VIP RESERVATION PASS • تذكرة الحجز المسبق
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-ivory mb-4 tracking-tight">
            تأكيد الحجز المسبق
          </h2>
          <div className="w-24 h-[2px] bg-gold mx-auto mb-6"></div>
          <p className="text-[#FAF6EE]/60 max-w-lg mx-auto text-sm md:text-base leading-relaxed">
            لتأمين مقاسك المفضل وتأكيد طلبك من هذا الإصدار المحدود (50 قطعة فقط)، يرجى ملء بياناتك أدناه وسنتواصل معك فوراً لتأكيد التفاصيل.
          </p>
        </div>

        {isSubmitted ? (
          /* ========================================================================= */
          /* REDESIGNED SUCCESS TICKET (VIP Confirmed Certificate Pass) */
          /* ========================================================================= */
          <div className="bg-[#FAF6EE] text-ink-black rounded-3xl border-2 border-gold shadow-2xl p-8 md:p-12 max-w-2xl mx-auto text-center relative overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(214,176,106,0.18)]">
            
            {/* Elegant luxury visual accents */}
            <div className="absolute -top-16 -right-16 w-36 h-36 bg-[#8E1B1F]/5 rounded-full blur-xl"></div>
            <div className="absolute -bottom-16 -left-16 w-36 h-36 bg-gold/10 rounded-full blur-xl"></div>
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-gold via-[#8E1B1F] to-gold"></div>

            <div className="flex justify-center mb-6">
              <div className="w-14 h-14 bg-[#8E1B1F] rounded-full flex items-center justify-center text-ivory shadow-lg border border-gold/40">
                <CheckCircle className="w-8 h-8" />
              </div>
            </div>

            <h3 className="text-xl md:text-3xl font-black text-[#8E1B1F] mb-2 tracking-tight">
              تأكيد الحجز المبدئي
            </h3>
            <span className="text-[10px] tracking-[0.2em] font-mono text-gold uppercase block mb-6 font-bold">
              VIP RESERVATION SUCCESSFUL
            </span>
            
            {/* Ticket confirmation summary layout */}
            <div className="bg-ivory/50 rounded-2xl p-6 border border-gold/15 text-right space-y-4 max-w-md mx-auto mb-8 relative">
              <div className="absolute top-2 left-3 text-[9px] font-mono text-ink-black/40">№ 1946-0{Math.floor(Math.random() * 50) + 1}</div>
              
              <div className="flex justify-between border-b border-gold/10 pb-2">
                <span className="text-xs text-ink-black/50">الاسم المسجل:</span>
                <span className="text-xs md:text-sm font-bold text-ink-black">{formData.fullName || "ضيف كريم"}</span>
              </div>
              <div className="flex justify-between border-b border-gold/10 pb-2">
                <span className="text-xs text-ink-black/50">رقم الاتصال:</span>
                <span className="text-xs md:text-sm font-bold text-ink-black dir-ltr">{formData.phone || "تم تسجيله"}</span>
              </div>
              <div className="flex justify-between border-b border-gold/10 pb-2">
                <span className="text-xs text-ink-black/50">المقاس والكمية:</span>
                <span className="text-xs md:text-sm font-bold text-ink-black">
                  مقاس {formData.size || "M"} • عدد {formData.quantity || "1"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-ink-black/50">جهة التسليم:</span>
                <span className="text-xs md:text-sm font-bold text-ink-black">محافظة {formData.governorate || "عمان"}</span>
              </div>
            </div>

            <p className="text-ink-black/70 text-xs md:text-sm leading-relaxed max-w-md mx-auto mb-8 font-sans">
              تم تسجيل اهتمامك رسمياً في الدفعة الأولى. لتسريع عملية التجهيز وحجز المقاس مباشرة وتفادي نفاد الكمية، يرجى إرسال التذكرة لفريق الدعم عبر الواتساب بنقرة واحدة أدناه.
            </p>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              
              {/* Primary WhatsApp Action */}
              <button
                onClick={triggerWhatsApp}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#8E1B1F] hover:bg-[#731518] text-white font-bold rounded-xl text-xs md:text-sm transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer border border-gold/20"
              >
                <span>تأكيد الحجز فوراً عبر واتساب</span>
              </button>

              {/* Secondary button */}
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    fullName: "",
                    phone: "",
                    governorate: "",
                    size: "",
                    quantity: "1",
                    notes: "",
                  });
                }}
                className="w-full sm:w-auto px-6 py-3.5 bg-ink-black hover:bg-gold hover:text-ink-black text-ivory text-xs md:text-sm font-bold transition-all duration-300 rounded-xl cursor-pointer"
              >
                حجز تذكرة أخرى
              </button>

            </div>

            {/* Perforated barcode summary */}
            <div className="border-t border-dashed border-gold/30 mt-8 pt-6">
              <span className="text-[10px] text-ink-black/40 block mb-3 font-mono">TICKET REFERENCE PASS</span>
              <span className="text-sm md:text-base font-extrabold tracking-widest text-[#8E1B1F] font-display">ZAVA-VIP-PASS-1946</span>
            </div>

          </div>
        ) : (
          /* ========================================================================= */
          /* PHYSICAL LUXURY TICKET LAYOUT (Perforated Card & Custom Gold Crest Logo) */
          /* ========================================================================= */
          <div className="bg-[#FAF6EE] text-ink-black rounded-3xl border border-gold/25 shadow-2xl overflow-hidden flex flex-col md:flex-row relative transition-all duration-500 hover:shadow-[0_20px_50px_rgba(214,176,106,0.18)] hover:-translate-y-1">
            
            {/* Elegant fine corner lines simulating premium stock invitation */}
            <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-gold/30 pointer-events-none"></div>
            <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-gold/30 pointer-events-none"></div>
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-gold/30 pointer-events-none"></div>
            <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-gold/30 pointer-events-none"></div>

            {/* A. LEFT COLUMN: Form Details Input (RTL flows beautifully to right side) */}
            <form onSubmit={handleSubmit} className="flex-1 p-6 md:p-10 z-10 text-right">
              
              {/* Header Title inside Ticket */}
              <div className="mb-8 flex justify-between items-center border-b border-gold/15 pb-4">
                <div>
                  <h3 className="text-lg md:text-xl font-extrabold text-ink-black tracking-tight">تذكرة حجز القطعة</h3>
                  <p className="text-[10px] md:text-xs text-ink-black/60 mt-0.5">يرجى إدخال البيانات لحجز قطعتك وتأكيد المقاس</p>
                </div>
                <div className="text-left font-display">
                  <span className="text-[9px] block text-ink-black/40 font-mono tracking-widest">BATCH</span>
                  <span className="text-xs md:text-sm font-extrabold text-[#8E1B1F]">01 / 50</span>
                </div>
              </div>

              {errorMessage && (
                <div className="mb-6 p-4 bg-jordan-red/5 border border-jordan-red/20 text-[#8E1B1F] text-xs md:text-sm rounded-xl">
                  {errorMessage}
                </div>
              )}

              {/* Inputs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* 1. Full Name */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-ink-black/80 flex items-center gap-1.5 justify-start">
                    <User className="w-3.5 h-3.5 text-[#8E1B1F]" />
                    <span>الاسم الكامل</span>
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="مثال: أحمد الحجايا"
                    required
                    className="w-full px-4 py-3 bg-[#F4EFE6]/55 border border-[#D8C8AE] focus:border-[#8E1B1F] focus:ring-1 focus:ring-[#8E1B1F] rounded-xl outline-none transition-all text-xs md:text-sm text-right"
                  />
                </div>

                {/* 2. Phone Number */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-ink-black/80 flex items-center gap-1.5 justify-start">
                    <Phone className="w-3.5 h-3.5 text-[#8E1B1F]" />
                    <span>رقم الاتصال</span>
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="مثال: 0795321462"
                    required
                    className="w-full px-4 py-3 bg-[#F4EFE6]/55 border border-[#D8C8AE] focus:border-[#8E1B1F] focus:ring-1 focus:ring-[#8E1B1F] rounded-xl outline-none transition-all text-xs md:text-sm text-left dir-ltr"
                  />
                </div>

                {/* 3. Governorate Dropdown */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-ink-black/80 flex items-center gap-1.5 justify-start">
                    <MapPin className="w-3.5 h-3.5 text-[#8E1B1F]" />
                    <span>المحافظة</span>
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="governorate"
                      value={formData.governorate}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#F4EFE6]/55 border border-[#D8C8AE] focus:border-[#8E1B1F] focus:ring-1 focus:ring-[#8E1B1F] rounded-xl outline-none transition-all text-xs md:text-sm appearance-none cursor-pointer text-right pr-4 pl-8"
                    >
                      <option value="">اختر المحافظة...</option>
                      {GOVERNORATES.map((gov) => (
                        <option key={gov} value={gov}>
                          {gov}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                      <svg className="w-4 h-4 text-ink-black/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* 4. Size selection */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-ink-black/80 flex items-center gap-1.5 justify-start">
                    <Shirt className="w-3.5 h-3.5 text-[#8E1B1F]" />
                    <span>المقاس</span>
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="size"
                      value={formData.size}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#F4EFE6]/55 border border-[#D8C8AE] focus:border-[#8E1B1F] focus:ring-1 focus:ring-[#8E1B1F] rounded-xl outline-none transition-all text-xs md:text-sm appearance-none cursor-pointer text-right pr-4 pl-8"
                    >
                      <option value="">اختر المقاس...</option>
                      {SIZES.map((sz) => (
                        <option key={sz} value={sz}>
                          {sz}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                      <svg className="w-4 h-4 text-ink-black/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* 5. Quantity */}
                <div className="space-y-2 sm:col-span-2">
                  <label className="text-xs font-bold text-ink-black/80 flex items-center gap-1.5 justify-start">
                    <Package className="w-3.5 h-3.5 text-[#8E1B1F]" />
                    <span>الكمية المطلوبة</span>
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#F4EFE6]/55 border border-[#D8C8AE] focus:border-[#8E1B1F] focus:ring-1 focus:ring-[#8E1B1F] rounded-xl outline-none transition-all text-xs md:text-sm appearance-none cursor-pointer text-right pr-4 pl-8"
                    >
                      {QUANTITIES.map((qty) => (
                        <option key={qty} value={qty}>
                          {qty}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                      <svg className="w-4 h-4 text-ink-black/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* 6. Notes */}
                <div className="space-y-2 sm:col-span-2">
                  <label className="text-xs font-bold text-ink-black/80 flex items-center gap-1.5 justify-start">
                    <FileText className="w-3.5 h-3.5 text-[#8E1B1F]" />
                    <span>ملاحظات خاصة</span>
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="مثال: يرجى التوصيل بعد الساعة 3 عصراً، أو الرغبة في التغليف كهدية..."
                    rows={2}
                    className="w-full px-4 py-3 bg-[#F4EFE6]/55 border border-[#D8C8AE] focus:border-[#8E1B1F] focus:ring-1 focus:ring-[#8E1B1F] rounded-xl outline-none transition-all text-xs md:text-sm resize-none text-right"
                  />
                </div>

              </div>

              {/* Submit Action */}
              <div className="mt-8">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 bg-[#8E1B1F] hover:bg-[#731518] text-ivory font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 transform active:scale-[0.98] group cursor-pointer disabled:opacity-85 disabled:cursor-not-allowed border border-gold/15"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-ivory" />
                      <span className="text-xs md:text-sm">جاري تسجيل طلب الحجز...</span>
                    </>
                  ) : (
                    <>
                      <span className="text-xs md:text-sm">تأكيد حجز التذكرة</span>
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                    </>
                  )}
                </button>
              </div>

            </form>

            {/* B. PERFORATED DIVIDER: A beautiful realistic ticket tear line */}
            <div className="relative w-full md:w-[1.5px] flex md:flex-col items-center justify-center">
              
              {/* Linear dotted divider path */}
              <div className="absolute inset-y-0 left-0 w-full border-r border-dashed border-[#D8C8AE] hidden md:block"></div>
              <div className="absolute inset-x-0 top-0 h-full border-t border-dashed border-[#D8C8AE] md:hidden"></div>

              {/* Realistic Circular Punch Holes cut directly inside the card edges! */}
              {/* Top Notch Hole */}
              <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-[#111111] border border-transparent shadow-inner hidden md:block z-20"></div>
              {/* Bottom Notch Hole */}
              <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-[#111111] border border-transparent shadow-inner hidden md:block z-20"></div>

              {/* Mobile Notch Holes (Right and Left of horizontal divider line) */}
              <div className="absolute right-0 -translate-x-1/2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-[#111111] border border-transparent md:hidden z-20"></div>
              <div className="absolute left-0 translate-x-1/2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-[#111111] border border-transparent md:hidden z-20"></div>

            </div>

            {/* C. TICKET STUB (Right Column / Detachable stub containing custom Gold Crest) */}
            <div className="w-full md:w-64 bg-[#F4EFE6]/50 p-6 md:p-8 flex flex-col justify-between items-center relative overflow-hidden text-center z-10">
              
              <div className="w-full relative z-10">
                <span className="text-[9px] text-ink-black/40 block tracking-[0.25em] font-mono mb-6 uppercase">EXCLUSIVE TICKET</span>
                
                {/* Custom Majestic Brand Crest outline SVG */}
                <div className="flex justify-center mb-6">
                  <svg 
                    className="w-16 h-16 text-gold mb-2" 
                    viewBox="0 0 100 100" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.5"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Modern luxury crest outline */}
                    <path d="M25 35 L50 15 L75 35 L50 85 Z" />
                    <path d="M35 40 L50 28 L65 40" strokeWidth="1.2" />
                    <path d="M50 28 V80" strokeWidth="1.2" strokeDasharray="3,2" />
                    <circle cx="50" cy="50" r="9" strokeWidth="1" />
                  </svg>
                </div>

                <h4 className="text-xl font-black font-display tracking-[0.2em] text-ink-black mb-1">ZAVA</h4>
                <span className="text-[9px] text-[#8E1B1F] font-bold tracking-widest font-mono block">HERITAGE DROP</span>
                
                <div className="w-12 h-[1px] bg-gold/40 mx-auto my-4"></div>
                <p className="text-[10px] text-ink-black/60 leading-relaxed font-sans px-2">
                  تمنحك هذه التذكرة أولوية التجهيز والحجز المسبق لدفعة عيد الاستقلال الحصرية المكونة من 50 معطفاً فقط.
                </p>
              </div>

              {/* Barcode details */}
              <div className="w-full text-center relative z-10 mt-8 md:mt-0">
                <div className="border-t border-[#D8C8AE]/50 pt-4 mb-3">
                  <p className="text-[8px] text-[#8E1B1F] font-bold tracking-widest font-mono">№ 1946 - EXCLUSIVE BATCH</p>
                </div>
                <div className="px-4">
                  <Barcode />
                  <span className="text-[9px] tracking-[0.3em] font-mono text-ink-black/45 block mt-2">
                    * ZAVA-PASS-1946 *
                  </span>
                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}

// Highly detailed SVG Barcode
const Barcode = () => (
  <svg className="w-full h-7 text-ink-black" viewBox="0 0 100 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="2" height="30" />
    <rect x="3" y="0" width="1.2" height="30" />
    <rect x="5.5" y="0" width="2.5" height="30" />
    <rect x="9.5" y="0" width="1" height="30" />
    <rect x="11.5" y="0" width="2" height="30" />
    <rect x="15" y="0" width="4" height="30" />
    <rect x="20.5" y="0" width="1" height="30" />
    <rect x="23" y="0" width="2.5" height="30" />
    <rect x="27" y="0" width="1" height="30" />
    <rect x="29" y="0" width="3" height="30" />
    <rect x="33.5" y="0" width="1.5" height="30" />
    <rect x="36.5" y="0" width="4" height="30" />
    <rect x="42" y="0" width="1" height="30" />
    <rect x="44.5" y="0" width="2" height="30" />
    <rect x="47.5" y="0" width="3" height="30" />
    <rect x="52" y="0" width="1" height="30" />
    <rect x="54" y="0" width="4" height="30" />
    <rect x="59.5" y="0" width="2" height="30" />
    <rect x="63" y="0" width="1" height="30" />
    <rect x="65.5" y="0" width="3" height="30" />
    <rect x="70" y="0" width="1.5" height="30" />
    <rect x="73" y="0" width="4" height="30" />
    <rect x="78.5" y="0" width="1" height="30" />
    <rect x="81" y="0" width="2" height="30" />
    <rect x="84.5" y="0" width="1.5" height="30" />
    <rect x="87" y="0" width="3" height="30" />
    <rect x="91.5" y="0" width="2.5" height="30" />
    <rect x="95.5" y="0" width="1" height="30" />
    <rect x="98" y="0" width="2" height="30" />
  </svg>
);
