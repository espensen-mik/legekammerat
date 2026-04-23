import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lykkeliga Legekammerat",
  description: "Cinematic showcase for LykkeLiga partnerships.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-50">
        <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
            <Link href="/" aria-label="LykkeLiga" className="flex items-center">
              <Image
                src="/lykkeliga-logo.svg"
                alt="LykkeLiga"
                width={156}
                height={40}
                className="h-9 w-auto object-contain brightness-0 invert"
                priority
              />
            </Link>
            <nav className="flex items-center gap-5 text-sm text-zinc-300">
              <Link href="/cases" className="transition-colors hover:text-[#00f4c8]">
                Cases
              </Link>
              <Link href="/legekammerat" className="transition-colors hover:text-[#00f4c8]">
                Bliv legekammerat
              </Link>
              <Link href="/om" className="transition-colors hover:text-[#00f4c8]">
                Om
              </Link>
            </nav>
          </div>
        </header>
        <main className="flex-1 pt-16">{children}</main>
      </body>
    </html>
  );
}
