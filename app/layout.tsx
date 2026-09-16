import type { Metadata } from "next";
import { Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SiteHeader } from "@/src/components/site-header";
import { SiteFooter } from "@/src/components/site-footer";
import { LaunchSiteHeader } from "@/src/components/launch-site-header";
import { LaunchSiteFooter } from "@/src/components/launch-site-footer";
import { LaunchContactProvider } from "@/src/components/launch-contact-provider";
import { isLaunchMode } from "@/src/config/site-mode";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lykkeliga Legekammerat",
  description: "Kommercielle partnerskaber med LykkeLiga.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const body = (
    <>
      {isLaunchMode ? <LaunchSiteHeader /> : <SiteHeader />}
      <main className="flex-1 pt-[72px]">{children}</main>
      {isLaunchMode ? <LaunchSiteFooter /> : <SiteFooter />}
    </>
  );

  return (
    <html
      lang="da"
      className={`${plusJakarta.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[#07111d] text-zinc-50">
        {isLaunchMode ? <LaunchContactProvider>{body}</LaunchContactProvider> : body}
        <Analytics />
      </body>
    </html>
  );
}
