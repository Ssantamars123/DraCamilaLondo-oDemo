import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/providers/LenisProvider";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dra. Camila Londoño — Odontóloga",
  description: "Odontología de calidad con un toque humano. Ortodoncia, blanqueamiento, implantes y más.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
