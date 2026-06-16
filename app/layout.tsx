import type { Metadata } from "next";
import { Manrope, Cormorant } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const manrope = Manrope({
  subsets: ["cyrillic", "latin"],
  variable: "--font-manrope",
});

const cormorant = Cormorant({
  subsets: ["cyrillic", "latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Lara English - английский для девушек",
  description:
    "Уютные онлайн-занятия английским для девушек. Пробный урок за 300 ₽. Отдельное направление - очная подготовка к экзаменам в Казани.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={`${manrope.variable} ${cormorant.variable}`}>
        {children}
      </body>
      <GoogleAnalytics gaId="G-NMS790N544" />
      <Analytics />
    </html>
  );
}
