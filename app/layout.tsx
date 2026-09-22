import type { Metadata } from "next";
import Script from "next/script";
import { Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SiteHeader } from "@/src/components/site-header";
import { SiteFooter } from "@/src/components/site-footer";
import { LaunchSiteHeader } from "@/src/components/launch-site-header";
import { LaunchSiteFooter } from "@/src/components/launch-site-footer";
import { LaunchContactProvider } from "@/src/components/launch-contact-provider";
import { isLaunchMode } from "@/src/config/site-mode";
import "./globals.css";

const LINKEDIN_PARTNER_ID = "9754786";

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
        <Script id="linkedin-partner-id" strategy="afterInteractive">
          {`
            _linkedin_partner_id = "${LINKEDIN_PARTNER_ID}";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          `}
        </Script>
        <Script id="linkedin-insight" strategy="afterInteractive">
          {`
            (function(l) {
              if (!l){
                window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
                window.lintrk.q=[];
              }
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript";
              b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);
            })(window.lintrk);
          `}
        </Script>
        <noscript>
          <img
            height={1}
            width={1}
            style={{ display: "none" }}
            alt=""
            src={`https://px.ads.linkedin.com/collect/?pid=${LINKEDIN_PARTNER_ID}&fmt=gif`}
          />
        </noscript>
      </body>
    </html>
  );
}
