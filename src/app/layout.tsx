import type { Metadata } from "next";
import { Cairo, Cinzel } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "ZAVA | الإصدار المحدود لعيد الاستقلال",
  description: "إصدار محدود فاخر بمناسبة عيد الاستقلال الأردني. قطعة ملابس فريدة مستوحاة من عراقة التراث الأردني، ونقوش البتراء، وتفاصيل الهوية الفخورة. احجز قطعتك الآن (50 قطعة فقط).",
  keywords: ["ZAVA", "ملابس أردنية", "عيد الاستقلال", "تراث أردني", "البتراء", "جرش", "موضة أردنية", "هوية أردنية", "ملابس فاخرة"],
  authors: [{ name: "ZAVA JO" }],
  viewport: "width=device-width, initial-scale=1.0",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "ZAVA | الإصدار المحدود لعيد الاستقلال",
    description: "قطعة مستوحاة من التراث الأردني، بتصميم يحكي الفخر والهوية. 50 قطعة فقط.",
    url: "https://zava.jo",
    siteName: "ZAVA JO",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "ZAVA Heritage Drop",
      },
    ],
    locale: "ar_JO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} ${cinzel.variable} scroll-smooth`}
    >
      <body className="bg-ivory text-ink-black font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
