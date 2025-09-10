import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fiat24 — Криптовалюта в деньги: наличные или безналичные переводы (RUB, EUR, USD).",
  description: `Простой способ обмена криптовалюты в деньги — наличные или безналичные.\nПрозрачные условия, надёжность и контроль безопасности.\nFiat24 — ваш надёжный сервис обмена (RUB, EUR, USD).`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <CookieBanner />
        <Footer />
      </body>
    </html>
  );
}
