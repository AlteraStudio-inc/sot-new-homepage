import type { Metadata } from "next";
import { M_PLUS_Rounded_1c, Lato } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { siteConfig } from "@/config/site";
import "./globals.css";

const mPlusRounded = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-m-plus-rounded",
});

const lato = Lato({
    subsets: ["latin"],
    weight: ["300", "400", "700"],
    variable: "--font-lato",
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteConfig.name}`,
    default: `${siteConfig.name} | 枚方市宮之阪の整体 GAS脳幹健康センター大阪`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/ogp.jpg`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name}の院内風景`,
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/ogp.jpg`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={`${mPlusRounded.variable} ${lato.variable} font-sans antialiased text-[#7A6856]`}>
        <div className="md:pr-64 min-h-screen">
          {children}
        </div>
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX"} />
    </html>
  );
}
