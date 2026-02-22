import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarCheck, ChevronRight, Clock, MapPin, Search } from "lucide-react";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "整体院名",
    image: "https://example.com/ogp.jpg",
    "@id": "https://example.com",
    url: "https://example.com",
    telephone: "03-0000-0000",
    address: {
      "@type": "PostalAddress",
      streetAddress: "〇〇 1-2-3 〇〇ビル 1F",
      addressLocality: "渋谷区",
      addressRegion: "東京都",
      postalCode: "000-0000",
      addressCountry: "JP"
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "20:00"
      }
    ],
    priceRange: "$$"
  };

  return (
    <div className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero Section */}
      <section className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center bg-stone-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="/placeholder-hero.jpg"
            alt="院内風景"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 flex flex-col items-center text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 text-emerald-800 text-sm font-bold tracking-widest mb-6">
            根本改善をめざす本物の整体
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-snug md:leading-tight mb-6">
            長年の痛みや不調を<br className="hidden md:block" />
            <span className="text-emerald-400">本来のあなた</span>へ戻す場所。
          </h1>
          <p className="text-stone-200 text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            丁寧な問診と独自の検査で原因を特定。<br className="hidden md:block" />
            一時しのぎではない、本当の健康を取り戻すサポートをいたします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-8 h-14 text-lg w-full sm:w-auto shadow-lg shadow-emerald-900/20">
              <Link href="/reserve"><CalendarCheck className="mr-2 h-5 w-5" /> Webで予約する</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white/10 hover:bg-white/20 text-white border-white/20 rounded-full px-8 h-14 text-lg w-full sm:w-auto backdrop-blur-sm">
              <Link href="/about">当院について</Link>
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-6 text-white/80 text-sm font-medium">
            <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> 〇〇駅 徒歩3分</div>
            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> 夜20時まで営業</div>
          </div>
        </div>
      </section>

      {/* 予約ステップ (悩み別) */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">あなたはどちらですか？</h2>
            <p className="text-stone-600">お悩みに合わせた最適なコースをご案内します。</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="overflow-hidden border-stone-200 hover:border-emerald-500 transition-colors shadow-sm hover:shadow-md cursor-pointer group">
              <CardContent className="p-8 flex flex-col items-center text-center h-full relative">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-2xl font-bold text-stone-900 mb-4">当院がはじめての方</h3>
                <p className="text-stone-600 mb-8 flex-1">
                  初回は丁寧な問診と検査を行うため、約60分のお時間を頂戴しております。根本原因を特定し、あなたに合った施術計画をご提案します。
                </p>
                <Button asChild variant="default" className="w-full bg-stone-900 hover:bg-stone-800 text-white rounded-full group-hover:bg-emerald-600 transition-colors">
                  <Link href="/reserve?type=first">初回限定コースを予約 <ChevronRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-stone-200 hover:border-emerald-500 transition-colors shadow-sm hover:shadow-md cursor-pointer group">
              <CardContent className="p-8 flex flex-col items-center text-center h-full relative">
                <div className="w-16 h-16 bg-stone-100 text-stone-600 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-2xl font-bold text-stone-900 mb-4">2回目以降の方</h3>
                <p className="text-stone-600 mb-8 flex-1">
                  前回からの変化を確認し、計画に沿って施術を進めていきます。所要時間は約30分〜40分となります。
                </p>
                <Button asChild variant="outline" className="w-full rounded-full border-stone-300 group-hover:bg-emerald-50 transition-colors text-stone-700">
                  <Link href="/reserve?type=returning">通常コースを予約 <ChevronRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 症状別ショートカット */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-stone-900 mb-2">こんな症状でお悩みではありませんか？</h2>
              <p className="text-stone-600">多くの方が、これらの症状で当院を受診されています。</p>
            </div>
            <Link href="/symptoms" className="text-emerald-600 font-medium hover:underline flex items-center">
              症状一覧を見る <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['慢性的な肩こり', 'つらい腰痛・ぎっくり腰', '自律神経の乱れ', '頭痛・めまい', '産後の骨盤の開き', '姿勢・猫背改善', '手足のしびれ', 'スポーツ障害'].map((symptom, i) => (
              <Link href={`/symptoms/${i}`} key={i} className="bg-stone-50 hover:bg-emerald-50 border border-stone-100 hover:border-emerald-200 rounded-2xl p-4 text-center transition-all group">
                <span className="block text-stone-800 font-medium group-hover:text-emerald-700">{symptom}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-emerald-900 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder-texture.jpg')] opacity-10 mix-blend-overlay"></div>
        <div className="container relative z-10 max-w-2xl mx-auto text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">さあ、痛みのない日常へ。</h2>
          <p className="text-emerald-100 mb-10 text-lg">
            まずは現状をお聞かせください。<br />
            24時間いつでもWebからご予約いただけます。
          </p>
          <Button asChild size="lg" className="bg-white hover:bg-stone-100 text-emerald-900 rounded-full px-10 h-16 text-xl shadow-xl w-full sm:w-auto">
            <Link href="/reserve"><CalendarCheck className="mr-3 h-6 w-6" /> 空き状況を見て予約する</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
