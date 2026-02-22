"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Bird, MapPin, Clock, Phone, CalendarCheck, CheckCircle2, HeartPulse, Sparkles, Smile, MessageCircle } from "lucide-react";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "中央カイロプラクティック院 枚方院",
    image: "https://example.com/ogp.jpg",
    "@id": "https://www.sot.jp",
    url: "https://www.sot.jp",
    telephone: "072-840-7798",
    address: {
      "@type": "PostalAddress",
      streetAddress: "宮之阪3丁目5-40",
      addressLocality: "枚方市",
      addressRegion: "大阪府",
      postalCode: "573-0022",
      addressCountry: "JP"
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Friday", "Saturday"],
        opens: "09:30",
        closes: "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Wednesday"],
        opens: "09:30",
        closes: "12:30"
      }
    ],
    priceRange: "$$"
  };

  return (
    <div className="w-full bg-[#FAF9F5] text-[#2C3E35] font-sans overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative w-full pt-10 pb-20 md:pt-20 md:pb-32 px-4 flex flex-col items-center overflow-hidden">
        {/* Floating Decos */}
        <div className="absolute top-20 left-10 z-0 animate-float">
          <Bird className="text-[#38A182] w-12 h-12 opacity-80 mix-blend-multiply" />
        </div>
        <div className="absolute bottom-10 right-10 z-0 animate-float-reverse">
          <Leaf className="text-[#7BB896] w-16 h-16 opacity-60 mix-blend-multiply" />
        </div>

        <div className="container max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 space-y-6 text-center md:text-left z-10 w-full animate-slide-in-left" style={{ animationDelay: '100ms' }}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#2C3E35]">
              枚方市宮之阪の整体<br />
              <span className="text-[#38A182] mt-2 block text-2xl md:text-3xl lg:text-4xl">
                中央カイロプラクティック院 枚方院へどうぞ！
              </span>
            </h1>
            <p className="text-lg text-[#556b5d] font-bold">
              GAS脳幹健康センター大阪
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <Button asChild size="lg" className="bg-[#38A182] hover:bg-[#2b7a63] hover:scale-105 transition-all duration-300 text-white rounded-full px-8 h-14 text-lg shadow-lg">
                <Link href="/reserve"><CalendarCheck className="mr-2 h-5 w-5" /> 【初めての方】ネット予約はこちら</Link>
              </Button>
            </div>
            <div className="flex items-center gap-4 text-sm font-medium text-[#556b5d] justify-center md:justify-start">
              <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-[#38A182]" />宮之阪駅から徒歩30秒</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-[#38A182]" />駐車場3台有り</span>
            </div>
          </div>
          <div className="flex-1 w-full max-w-lg relative mt-10 md:mt-0 animate-bounce-in" style={{ animationDuration: '1s', animationDelay: '200ms' }}>
            <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl shadow-[#38a182]/20 border-4 border-white/80 relative z-10 group bg-[#E8F0E4]">
              <Image src="/hero-image.png" alt="院の外観" fill className="object-cover group-hover:scale-105 transition-transform duration-700" priority sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            {/* Decorative background blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#E8F0E4] rounded-full mix-blend-multiply blur-3xl -z-10 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* SVG Divider: Wave Top */}
      <div className="w-full relative h-[60px] md:h-[100px] overflow-hidden -mb-1">
        <svg viewBox="0 0 1440 100" className="absolute bottom-0 w-full h-full preserve-3d" preserveAspectRatio="none">
          <path d="M0,0 C320,100 420,0 720,50 C1020,100 1120,50 1440,0 L1440,100 L0,100 Z" fill="#E8F0E4"></path>
        </svg>
      </div>

      {/* Features Section */}
      <section className="py-24 bg-[#E8F0E4] px-4">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-16 relative animate-zoom-in" style={{ animationDelay: '100ms' }}>
            <Leaf className="w-8 h-8 text-[#38A182] mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-[#2C3E35] mb-2">当院が選ばれる5つの特徴</h2>
            <div className="w-16 h-1 bg-[#38A182] mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "ボキボキしない安全な施術",
                desc: "国家資格保有者による強い刺激を行わないソフトな施術。眠ってしまうほど気持ち良い施術です。",
                icon: <HeartPulse className="w-8 h-8 text-white" />
              },
              {
                title: "脳幹部分を優しく調整",
                desc: "頭と首の連結部分のストレスが、高さを変えられる特殊枕で寝ているだけで整う脳幹療法を行っています。",
                icon: <Sparkles className="w-8 h-8 text-white" />
              },
              {
                title: "心の問題を身体からサポート",
                desc: "心が疲れている方は、身体の歪みが出ていることが多いです。身体の骨格や歪みを整えることで、心もほぐれていきます。",
                icon: <Smile className="w-8 h-8 text-white" />
              },
              {
                title: "駅から徒歩30秒！駐車場完備",
                desc: "京阪電車・宮之阪駅から徒歩30秒の便利なアクセス。駐車場も院前に3台完備し、お車でも安心です。",
                icon: <MapPin className="w-8 h-8 text-white" />
              },
              {
                title: "完全予約制でしっかり検査",
                desc: "一人一人丁寧に施術する関係上、完全予約制。土曜日も1日受付しておりますのでお早めにご連絡ください。",
                icon: <CalendarCheck className="w-8 h-8 text-white" />
              },
            ].map((f, i) => (
              <div key={i} className="animate-zoom-in" style={{ animationDelay: `${i * 150 + 200}ms` }}>
                <Card className="border-none rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white overflow-hidden relative group h-full">
                  <CardContent className="p-8 pb-10 flex flex-col items-center text-center h-full">
                    <div className="w-16 h-16 bg-[#38A182] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-md">
                      {f.icon}
                    </div>
                    <h3 className="text-lg font-bold text-[#2C3E35] mb-4 leading-snug">{f.title}</h3>
                    <p className="text-[#556b5d] text-sm leading-relaxed">{f.desc}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SVG Divider: Wave Bottom */}
      <div className="w-full relative h-[60px] md:h-[100px] overflow-hidden -mt-1 transform rotate-180">
        <svg viewBox="0 0 1440 100" className="absolute bottom-0 w-full h-full preserve-3d" preserveAspectRatio="none">
          <path d="M0,0 C320,100 420,0 720,50 C1020,100 1120,50 1440,0 L1440,100 L0,100 Z" fill="#E8F0E4"></path>
        </svg>
      </div>

      {/* Symptoms & Plasma Therapy */}
      <section className="py-24 px-4 relative">
        <Bird className="absolute top-40 right-10 text-[#38A182] w-10 h-10 opacity-30 transform -scale-x-100 rotate-12" />

        <div className="container max-w-4xl mx-auto space-y-24">

          {/* Symptoms */}
          <div className="animate-slide-in-right" style={{ animationDelay: '150ms' }}>
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#2C3E35] mb-4">症状別の施術方法</h2>
              <p className="text-[#556b5d]">これらの他にも様々な治療実績があるので お気軽にお問い合わせください！</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['肩こり・首こり', '原因不明の不調（頭痛・めまい等）', '腰痛・背部痛・足のしびれ', '膝痛・股関節痛'].map((s, i) => (
                <div key={i} className="bg-white border-2 border-[#E8F0E4] rounded-2xl p-6 text-center shadow-sm flex items-center justify-center font-bold text-[#2C3E35] hover:border-[#38A182] transition-colors cursor-pointer">
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Plasma Therapy */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-[#E8F0E4] animate-zoom-in" style={{ animationDelay: '200ms' }}>
            <h2 className="text-2xl font-bold text-[#38A182] mb-6 flex items-center gap-2">
              <Sparkles className="w-6 h-6" /> 当院ではプラズマ療法も行っています
            </h2>
            <p className="text-[#556b5d] leading-loose mb-6">
              プラズマ療法とは、大量の電子（プラズマ）と一酸化窒素（NO）を身体に取り込むことで、ストレスや疲労などにより電子不足になった細胞に電子を与え、老化原因である活性酸素を発生することなく、生命活動エネルギーを与えて様々な症状改善をサポートする療法です。
            </p>
            <p className="text-[#2C3E35] font-bold leading-loose">
              当院は心の疲れを身体から癒すをコンセプトに 「心と身体の健康相談室」として多くの皆様に喜んでいただけるように毎日スタッフ一同精一杯がんばっています！
            </p>
          </div>

          {/* Patient Voice */}
          <div className="animate-slide-in-left" style={{ animationDelay: '250ms' }}>
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#2C3E35] mb-4 flex items-center justify-center gap-2">
                <MessageCircle className="text-[#38A182]" /> お喜びの声をご紹介
              </h2>
            </div>
            <div className="bg-[#FAF9F5] border border-[#E8F0E4] rounded-2xl p-8 relative">
              <div className="absolute top-0 left-8 -translate-y-1/2 w-12 h-12 bg-[#38A182] rounded-full flex items-center justify-center text-white text-3xl font-serif">“</div>
              <p className="text-[#556b5d] leading-loose whitespace-pre-wrap text-sm md:text-base pl-4">
                学生の頃から悩まされていた腰痛の治療で伺いました。<br />
                過去に整骨院に通っていたことはありましたが、カイロプラクティックは初めてで内心緊張していたけれど、問診や検査もしっかり行ってくださり、自分の身体の状態やどんなことをしていくのか一つ一つ丁寧に説明した上で施術に入ってもらえたので不安なく受けられました。<br />
                カイロプラクティックにも様々な施術の方法があるそうで、こちらの院では、よくあるバキバキ鳴らすようなことは一切せず、押さえたり揺らしたりといった方法で調整していくそうです。<br />
                施術が終わってからは不思議なくらい身体がスッキリして、ちゃんと地に足が着いているという感覚でした！<br />
                もちろん、一度の治療で全てが良くなるわけではないと思いますが、これまで治療してもらった中で一番効果が分かりやすかったと思います。<br />
                受付さんも、先生の人柄も良く、親身になって話を聞いてくれるので身も心も軽くなりました！！定期的に通おうと思います！ありがとうございました。
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Info & Access */}
      <section className="py-20 bg-[#2C3E35] text-white px-4 relative overflow-hidden">
        <Leaf className="absolute -bottom-10 -left-10 text-[#38A182] w-32 h-32 opacity-20 transform rotate-45" />
        <div className="container max-w-4xl mx-auto text-center space-y-10 relative z-10">
          <div>
            <h2 className="text-3xl font-bold mb-4">お気軽にお問合せ・ご相談ください</h2>
            <p className="text-[#A2Cbb5] mb-8">LINEからでもいつでもWeb予約も可能です！！</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#38A182] hover:bg-[#2b7a63] text-white rounded-full px-8 h-14 text-lg">
                <Link href="/reserve"><CalendarCheck className="mr-2 h-5 w-5" /> 24時間ネット予約</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 bg-transparent hover:bg-white/10 text-white rounded-full px-8 h-14 text-lg">
                <Link href="https://lin.ee/jhGDcuH" target="_blank"><MessageCircle className="mr-2 h-5 w-5" /> LINE予約・相談</Link>
              </Button>
            </div>
          </div>

          <div className="bg-white/5 rounded-2xl p-8 text-left max-w-2xl mx-auto border border-white/10">
            <h3 className="text-xl font-bold mb-4 text-[#7BB896]">中央カイロプラクティック院 枚方院</h3>
            <div className="space-y-4 text-sm md:text-base text-white/90">
              <p className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#38A182] shrink-0 mt-0.5" />
                <span>〒573-0022<br />大阪府枚方市宮之阪3丁目5-40<br /><span className="text-[#A2Cbb5] text-xs">京阪電車：宮之阪駅出口から徒歩30秒 / 駐車場：院前に3台有り</span></span>
              </p>
              <p className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#38A182] shrink-0 mt-0.5" />
                <span>
                  受付時間：9:30～12:30 / 15:30～19:00<br />
                  定休日：日・祝・木・水曜午後
                </span>
              </p>
            </div>
          </div>

          {/* Cautions */}
          <div className="text-left max-w-2xl mx-auto text-xs text-white/50 leading-relaxed border-t border-white/10 pt-6">
            <h4 className="font-bold text-white/70 mb-2">注意事項</h4>
            当院のメンタルセラピーはあくまでも首が原因で起こる自律神経バランス障害の患者さんが対象です。精神科や、心療内科で投薬治療中の方はご対応できない場合がありますので必ず事前にお電話にてご相談ください。
          </div>
        </div>
      </section>

    </div>
  );
}
