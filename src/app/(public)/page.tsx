"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Bird, MapPin, Clock, CalendarCheck, HeartPulse, Sparkles, Smile, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    "@id": siteConfig.url,
    url: siteConfig.url,
    telephone: siteConfig.clinic.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.clinic.address.text,
      addressLocality: "枚方市",
      addressRegion: "大阪府",
      postalCode: siteConfig.clinic.address.postal.replace("〒", ""),
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
    <div className="w-full bg-background text-foreground font-sans overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative w-full pt-16 pb-24 md:pt-28 md:pb-40 px-6 flex flex-col items-center overflow-hidden">
        <div className="absolute top-20 left-10 z-0 animate-float opacity-30">
          <Bird className="text-primary w-12 h-12" />
        </div>
        <div className="absolute bottom-10 right-10 z-0 animate-float-reverse opacity-20">
          <Leaf className="text-primary w-16 h-16" />
        </div>

        <div className="container max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8 text-center md:text-left z-10 w-full animate-slide-in-left">
            <div className="space-y-4">
              <span className="inline-block text-xs font-bold tracking-[0.2em] text-primary uppercase border-b border-primary/20 pb-1 italic">枚方市宮之阪の整体</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-hd-dark-brown">
                もっと身近に<br />
                ずっと見守る
              </h1>
              <p className="text-lg md:text-xl text-hd-text-brown leading-relaxed max-w-lg mx-auto md:mx-0">
                心と身体の健康相談室。<br />
                {siteConfig.name}へようこそ。
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center md:justify-start">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 h-16 text-lg shadow-xl shadow-primary/20 hover:scale-105 transition-transform">
                <Link href={siteConfig.links.reserve}>
                  <CalendarCheck className="mr-2 h-5 w-5" /> Web予約はこちら
                </Link>
              </Button>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-6 text-[13px] font-medium text-muted-foreground justify-center md:justify-start">
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary/40" />{siteConfig.clinic.address.access}</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary/40" />{siteConfig.clinic.parking}</span>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-lg relative mt-12 md:mt-0 animate-zoom-in">
            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white relative z-10 group">
              <Image src="/hero-image.png" alt="院内の様子" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" priority sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary rounded-full -z-10 blur-2xl opacity-60"></div>
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-primary/10 rounded-full -z-10 blur-3xl opacity-50"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-secondary/20 px-6">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-px bg-primary/40"></div>
              <Leaf className="w-6 h-6 text-primary" />
              <div className="w-8 h-px bg-primary/40"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-hd-dark-brown">当院が選ばれる理由</h2>
            <p className="text-muted-foreground mt-4 italic text-sm tracking-widest uppercase">Reason for choose us</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "ボキボキしない安全な施術",
                sub: "Safety",
                desc: "国家資格保有者による強い刺激を行わないソフトな施術。眠ってしまうほど気持ち良い施術です。",
                icon: <HeartPulse className="w-6 h-6 text-primary" />
              },
              {
                title: "脳幹部分を優しく調整",
                sub: "Brain Stem",
                desc: "頭と首の連結部分のストレスが、高さを変えられる特殊枕で寝ているだけで整う独自の療法を行っています。",
                icon: <Sparkles className="w-6 h-6 text-primary" />
              },
              {
                title: "心の問題を身体からサポート",
                sub: "Mental Care",
                desc: "骨角や身体の歪みを整えることで、自律神経を整え、心の疲れもゆったりとほぐしていきます。",
                icon: <Smile className="w-6 h-6 text-primary" />
              }
            ].map((f, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-6 animate-zoom-in" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="w-24 h-24 bg-background rounded-full flex items-center justify-center shadow-lg shadow-black/5 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-primary/5 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></div>
                  {f.icon}
                </div>
                <div className="space-y-3">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-primary/70 font-bold italic">{f.sub}</div>
                  <h3 className="text-xl font-bold text-hd-dark-brown">{f.title}</h3>
                  <p className="text-hd-text-brown text-sm leading-relaxed max-w-[280px]">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="py-32 px-6">
        <div className="container max-w-5xl mx-auto">
           <div className="bg-background border border-border rounded-[3.5rem] p-12 md:p-20 relative overflow-hidden shadow-sm">
             <div className="relative z-10 flex flex-col md:flex-row gap-16 items-center">
               <div className="flex-1 space-y-8">
                 <h2 className="text-3xl font-bold text-hd-dark-brown leading-tight">原因がわからない不調に<br />そっと寄り添います。</h2>
                 <p className="text-hd-text-brown leading-loose text-sm md:text-base">
                   肩こり、腰痛はもちろんのこと、どこに行っても良くならない頭痛やめまい、なんとなく身体が重いといった不調も、脳幹を通して自律神経を整えることで、本来の健康な状態へと導きます。
                 </p>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                    {['慢性的な肩こり・首こり', '自律神経の乱れ（めまい等）', '腰痛・背部痛', '産後の骨盤調整'].map((s, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm font-bold text-hd-dark-brown">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0"></div>
                        <span>{s}</span>
                      </div>
                    ))}
                 </div>
               </div>
               <div className="flex-1 w-full flex justify-center">
                  <div className="relative w-full max-w-sm aspect-square bg-secondary/40 rounded-full flex items-center justify-center overflow-hidden">
                     <Bird className="w-40 h-40 text-primary opacity-10 rotate-12" />
                  </div>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* Patient Voice Section */}
      <section className="py-32 bg-[#FDFBF2] px-6">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-hd-dark-brown">お客様からのお便り</h2>
            <p className="text-muted-foreground mt-2 italic text-xs uppercase tracking-widest">Voices</p>
          </div>
          
          <div className="bg-background rounded-3xl p-10 md:p-16 shadow-xl shadow-black/5 relative animate-zoom-in">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-4xl font-serif">“</div>
            <div className="space-y-8 text-center">
              <p className="text-hd-text-brown leading-loose text-sm md:text-base italic">
                「施術が終わってからは不思議なくらい身体がスッキリして、ちゃんと地に足が着いているという感覚でした！先生も親身になって話を聞いてくれるので、身も心も軽くなりました！！」
              </p>
              <div className="pt-8 border-t border-border/60 flex flex-col items-center">
                <span className="font-bold text-hd-dark-brown">枚方市在住 K.S様</span>
                <span className="text-xs text-muted-foreground mt-1">デスクワーク等による腰痛・肩こり</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Access & Final Info */}
      <section className="py-32 px-6">
        <div className="container max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
             <div className="space-y-10">
                <div className="space-y-4">
                  <span className="text-primary font-bold text-sm italic">Access</span>
                  <h2 className="text-3xl font-bold text-hd-dark-brown">駅徒歩2分。お車でも。</h2>
                  <p className="text-hd-text-brown text-sm leading-relaxed">
                    京阪交野線「宮之阪駅」からすぐ。院前に駐車場も3台分ございますので、遠方からの方もお車で安心してお越しいただけます。
                  </p>
                </div>
                
                <div className="space-y-6">
                   <div className="flex gap-4 items-start">
                     <MapPin className="text-primary w-5 h-5 shrink-0 mt-1" />
                     <div className="text-sm">
                        <p className="font-bold">{siteConfig.clinic.address.postal}</p>
                        <p>{siteConfig.clinic.address.text}</p>
                     </div>
                   </div>
                   <div className="flex gap-4 items-start">
                     <Clock className="text-primary w-5 h-5 shrink-0 mt-1" />
                     <div className="text-sm">
                        <p className="font-bold">受付時間</p>
                        <p>{siteConfig.clinic.hours.text}</p>
                        <p className="text-muted-foreground text-xs mt-1">定休日：{siteConfig.clinic.closed}</p>
                     </div>
                   </div>
                </div>
             </div>
             
             <div className="space-y-8 bg-secondary/20 p-10 rounded-[2.5rem] text-center">
                <h3 className="text-xl font-bold text-hd-dark-brown">ご予約・ご相談</h3>
                <p className="text-sm text-hd-text-brown">
                  一人ひとりと丁寧に向き合うため、<br />完全予約制とさせていただいております。
                </p>
                <div className="space-y-4">
                    <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90 text-white h-16 text-lg rounded-full">
                      <Link href="/reserve"><CalendarCheck className="mr-2 h-5 w-5" /> Web予約はこちら</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="w-full border-primary/20 text-primary hover:bg-primary/5 h-16 text-lg rounded-full">
                       <Link href="https://lin.ee/jhGDcuH" target="_blank"><MessageCircle className="mr-2 h-5 w-5" /> LINE予約・相談</Link>
                    </Button>
                </div>
                <div className="pt-4">
                   <p className="text-xs text-muted-foreground mb-1 tracking-widest uppercase">お電話でのお問い合わせ</p>
                   <p className="text-2xl font-bold text-hd-dark-brown tracking-tighter">{siteConfig.clinic.phone}</p>
                </div>
             </div>
          </div>
          
          <div className="mt-24 pt-12 border-t border-border text-center">
             <div className="max-w-2xl mx-auto">
               <span className="inline-block px-3 py-1 bg-red-50 text-red-600 text-[10px] font-bold rounded-full mb-4">注意事項</span>
               <p className="text-[11px] text-muted-foreground leading-loose">
                  当院の施術は、首を原因とした不調をお持ちの方が対象です。精神科・心療内科等で投薬治療を受けられている方は、内容によりお受けできない場合がございます。事前にお電話にて症状をご相談ください。
               </p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
