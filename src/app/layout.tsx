import type { Metadata } from "next";
import { M_PLUS_Rounded_1c } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const mPlusRounded = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-m-plus-rounded",
});

export const metadata: Metadata = {
  title: {
    template: "%s | 中央カイロプラクティック院 枚方院",
    default: "中央カイロプラクティック院 枚方院 | 枚方市宮之阪の整体 GAS脳幹健康センター大阪",
  },
  description: "もっと身近に ずっと見守る 心と身体の健康相談室。ボキボキしない安心・安全な施術で痛みの根本原因を解消します。",
  openGraph: {
    title: "中央カイロプラクティック院 枚方院",
    description: "もっと身近に ずっと見守る 心と身体の健康相談室。ボキボキしない安心・安全な施術で痛みの根本原因を解消します。",
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
      <body className={`${mPlusRounded.variable} font-sans antialiased text-[#2C3E35] bg-[#FAF9F5]`}>
        {children}
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX"} />
    </html>
  );
}
