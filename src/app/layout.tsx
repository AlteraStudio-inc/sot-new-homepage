import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: {
    template: "%s | 整体院名",
    default: "整体院名 | ご予約はこちら",
  },
  description: "心身の不調を根本から整える整体院。初回限定コースあり。Webから24時間予約完了。",
  openGraph: {
    title: "整体院名 | 根本改善を目指す本物の整体",
    description: "長年の痛みや不調を本来のあなたへ戻す場所。丁寧な問診と独自の検査で原因を特定します。",
    url: "https://example.com",
    siteName: "整体院名",
    images: [
      {
        url: "https://example.com/ogp.jpg",
        width: 1200,
        height: 630,
        alt: "整体院名の院内風景",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "整体院名",
    description: "心身の不調を根本から整える整体院",
    images: ["https://example.com/ogp.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={`${notoSansJP.variable} font-sans antialiased text-stone-800 bg-stone-50`}>
        {children}
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX"} />
    </html>
  );
}
