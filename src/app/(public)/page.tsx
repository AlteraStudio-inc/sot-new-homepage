"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Leaf, Bird, MapPin, Clock, CalendarCheck, Sparkles, MessageCircle, ChevronRight, ArrowRight } from "lucide-react";
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
    <div className="w-full bg-background text-[#7A6856] font-sans overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative w-full h-[85vh] md:h-[90vh] flex flex-col items-center justify-center px-4 overflow-hidden">
        {/* Main Hero Image with Rounded Corners */}
        <div className="absolute inset-0 md:inset-10 z-0">
          <div className="relative w-full h-full overflow-hidden rounded-none md:rounded-[3rem] shadow-2xl">
            <Image 
              src="/hero-image.png" 
              alt="院内の風景" 
              fill 
              className="object-cover transition-transform duration-[10s] hover:scale-110" 
              priority 
              sizes="100vw"
            />
            {/* Soft Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-transparent pointer-events-none"></div>
          </div>
        </div>

        {/* Hero Content Overlays */}
        <div className="container relative z-10 h-full flex flex-col justify-end md:justify-center pb-20 md:pb-0">
          <div className="max-w-2xl space-y-6 md:space-y-8 animate-fade-in-up bg-background/60 backdrop-blur-sm p-8 md:bg-transparent md:backdrop-blur-none md:p-0 rounded-3xl md:rounded-none">
             <div className="space-y-2 md:space-y-3">
                <span className="inline-block py-1 px-3 bg-primary/10 text-primary text-[10px] md:text-[11px] font-bold tracking-[0.2em] rounded-full lato">Prevention & Communication</span>
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-hd-dark-brown leading-[1.2] md:leading-[1.1]">
                   悪くなるまえに、<br className="hidden md:block" />
                   気軽に相談。<br />
                   <span className="text-primary/90">そんな関係づくり。</span>
                </h1>
             </div>
             
             <p className="text-sm md:text-lg text-hd-text-brown leading-loose md:leading-relaxed max-w-lg">
                枚方市の整体、{siteConfig.name}です。<br />
                私たちが大切にするのは、施術はもちろんですが、まずは不調の予防。<br />
                でも、もっと大切にしていきたいのは人と人との関係性です。
             </p>

             <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 h-16 md:h-18 shadow-xl shadow-primary/20 transition-all hover:scale-105 group">
                <Link href="/concept" className="flex items-center gap-3">
                   <span className="text-sm md:text-base font-bold tracking-widest">当院のポリシー</span>
                   <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transform group-hover:translate-x-1 transition-transform">
                      <ChevronRight className="w-4 h-4" />
                   </div>
                </Link>
             </Button>
          </div>
        </div>

        {/* Announcement Bar at Bottom Left (Hero) */}
        <div className="absolute bottom-6 left-6 md:bottom-20 md:left-20 z-20 hidden sm:flex items-center gap-4 bg-background/80 backdrop-blur px-6 py-3 rounded-full border border-border/40 shadow-sm animate-slide-in-left">
           <span className="lato text-[11px] font-bold text-primary tracking-widest">2026.02.22</span>
           <div className="w-px h-3 bg-border"></div>
           <Link href="/" className="text-[11px] font-bold text-hd-dark-brown hover:text-primary transition-colors">臨時駐車場の変更について</Link>
        </div>
      </section>

      {/* Clinic Policy / Visual Trace Section */}
      <section className="py-24 md:py-48 px-6 overflow-hidden">
        <div className="container max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-16 md:gap-32">
           {/* Overlapping Image with Vertical Text */}
           <div className="relative flex-1 w-full max-w-md animate-zoom-in">
              <div className="aspect-[3/4] rounded-[5rem] overflow-hidden shadow-2xl relative z-10">
                 <Image src="/clinic-inner.png" alt="施術の様子" fill className="object-cover" />
              </div>
              {/* Vertical Text Decoration */}
              <div className="absolute -left-8 md:-left-16 top-1/2 -translate-y-1/2 vertical-text py-4 z-20">
                 <span className="text-2xl md:text-3xl font-bold text-hd-dark-brown tracking-[0.5em] opacity-80">
                    予防が大事 <span className="text-primary">/</span> 関係性も大事
                 </span>
              </div>
              {/* Floating Decoration Circle */}
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-secondary/40 rounded-full -z-10 blur-2xl animate-pulse"></div>
           </div>

           <div className="flex-1 space-y-10 md:space-y-12 animate-fade-in-up">
              <div className="space-y-4">
                 <div className="flex items-center gap-3 text-primary">
                    <Leaf className="w-5 h-5 flex-shrink-0" />
                    <span className="lato text-xs font-bold tracking-[0.3em] uppercase">About Clinic Policy</span>
                 </div>
                 <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-hd-dark-brown leading-tight">
                    心と身体を整え、<br />
                    ずっと寄り添う相談室。
                 </h2>
              </div>
              
              <p className="text-base leading-loose md:leading-[2.2] text-hd-text-brown">
                 私たちは、ただ痛みを取り除くことだけが目的ではありません。不調の根本的な原因である「脳幹」へのアプローチと、心の疲れを癒す対話を大切にしています。<br />
                 「ここに来れば安心できる」そう思っていただけるような、地域の皆様の健康をずっと見守り続ける場所でありたいと考えています。
              </p>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
                 {[
                   { label: "脳幹療法へのこだわり", href: "/concept" },
                   { label: "ボキボキしない施術", href: "/concept" },
                 ].map((item, i) => (
                    <Link key={i} href={item.href} className="flex items-center justify-between p-6 bg-secondary/20 rounded-2xl group border border-transparent hover:border-primary/20 hover:bg-background transition-all">
                       <span className="font-bold text-sm md:text-base text-hd-dark-brown">{item.label}</span>
                       <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                    </Link>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* News & Updates Section (Horizontal Card Trace) */}
      <section className="py-24 md:py-40 bg-secondary/15 px-6">
        <div className="container max-w-6xl mx-auto">
           <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="space-y-4">
                 <div className="flex items-center gap-2 text-primary">
                    <Bird className="w-5 h-5" />
                    <span className="lato text-xs font-bold tracking-[0.3em] uppercase">News & Information</span>
                 </div>
                 <h2 className="text-3xl md:text-4xl font-bold text-hd-dark-brown">
                    センターからのお知らせ
                 </h2>
              </div>
              <Button asChild variant="link" className="text-primary font-bold lato tracking-widest text-xs hover:no-underline px-0 group">
                 <Link href="/" className="flex items-center gap-2">
                    VIEW ALL <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                 </Link>
              </Button>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
              {[
                { date: "2026.02.22", title: "臨時駐車場の変更について", image: "/news-1.png", category: "重要" },
                { date: "2026.01.15", title: "春の自律神経ケアキャンペーン開始", image: "/news-2.png", category: "イベント" },
                { date: "2025.12.20", title: "年末年始の営業について", image: "/news-3.png", category: "メンテナンス" },
              ].map((news, i) => (
                <Link key={i} href="/" className="group block space-y-6 animate-zoom-in" style={{ animationDelay: `${i * 150}ms` }}>
                   <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-lg shadow-black/5 bg-background">
                      <Image src={news.image} alt={news.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                      {/* Floating Date Decoration (Vertical-like) */}
                      <div className="absolute top-6 right-6 bg-background/95 backdrop-blur-sm px-3 py-4 rounded-2xl flex flex-col items-center gap-1 shadow-sm">
                         <span className="text-[10px] font-bold lato tracking-tighter text-primary">2026</span>
                         <div className="w-4 h-px bg-primary/20"></div>
                         <span className="text-sm font-bold lato text-hd-dark-brown">02.22</span>
                      </div>
                   </div>
                   <div className="px-2 space-y-3">
                      <span className="inline-block px-3 py-1 bg-background border border-border/50 text-xs font-bold text-primary/70 rounded-full">{news.category}</span>
                      <h3 className="text-lg md:text-xl font-bold text-hd-dark-brown leading-snug group-hover:text-primary transition-colors">
                         {news.title}
                      </h3>
                   </div>
                </Link>
              ))}
           </div>
        </div>
      </section>

      {/* Services Section (Square Border Detail Trace) */}
      <section className="py-24 md:py-48 px-6">
        <div className="container max-w-6xl mx-auto">
           <div className="text-center mb-20 md:mb-32 space-y-4">
              <div className="flex items-center justify-center gap-3 text-primary">
                 <Sparkles className="w-5 h-5" />
                 <span className="lato text-xs font-bold tracking-[0.3em] uppercase">Our Services</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-hd-dark-brown">診療のご案内</h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-32">
              {[
                { 
                  title: "脳幹部セラピー", 
                  sub: "Brain Stem Therapy", 
                  desc: "自律神経の司令塔である「脳幹」を整え、身体本来の回復力を高めます。痛みや不調の根本にアプローチします。", 
                  image: "/service-1.png" 
                },
                { 
                  title: "メンタルケア調整", 
                  sub: "Mental Balance Care", 
                  desc: "心の疲れが身体に現れている方へ。身体の緊張を解きほぐすことで、心の状態も穏やかに整えていきます。", 
                  image: "/service-2.png" 
                },
                { 
                  title: "プラズマ療法", 
                  sub: "Plasma Therapy", 
                  desc: "細胞レベルで生命エネルギーをサポート。プラズマと一酸化窒素による先進のケアを提供します。", 
                  image: "/service-3.png" 
                },
                { 
                  title: "産後ケア・姿勢調整", 
                  sub: "Maternity & Posture", 
                  desc: "骨盤の歪みや猫背など、日常生活のクセから来る不調を改善。国家資格保有者が丁寧に施術します。", 
                  image: "/service-4.png" 
                },
              ].map((service, i) => (
                <div key={i} className="group relative animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
                   <div className="flex flex-col md:flex-row gap-10 items-start">
                      <div className="w-full md:w-1/2 aspect-square relative rounded-full md:rounded-[4rem] overflow-hidden shadow-xl border-4 border-white transition-transform duration-700 group-hover:rotate-2">
                         <Image src={service.image} alt={service.title} fill className="object-cover" />
                      </div>
                      <div className="flex-1 space-y-5 pt-4">
                         <div className="space-y-1">
                            <p className="lato text-[10px] md:text-[11px] font-bold text-primary uppercase tracking-widest">{service.sub}</p>
                            <h3 className="text-2xl md:text-3xl font-bold text-hd-dark-brown">{service.title}</h3>
                         </div>
                         <p className="text-sm md:text-base leading-loose text-hd-text-brown opacity-90">
                            {service.desc}
                         </p>
                         <Link href="/service" className="inline-flex items-center gap-2 text-primary font-bold text-sm tracking-widest border-b-[2px] border-primary/20 pb-1 hover:border-primary transition-all group/btn">
                            LEARN MORE <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                         </Link>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Access Area Area Trace */}
      <section className="py-24 md:py-48 bg-[#FDFBF2] border-t border-border/30 px-6">
        <div className="container max-w-6xl mx-auto flex flex-col lg:flex-row gap-20 items-stretch">
           <div className="lg:w-1/2 rounded-[4rem] overflow-hidden shadow-2xl relative min-h-[400px] bg-secondary/20">
              {/* Actual Map Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                 <MapPin className="w-16 h-16 text-primary animate-bounce" />
                 <p className="absolute bottom-10 lato font-bold tracking-widest opacity-40">GOOOGLE MAPS AREA</p>
              </div>
              <Image 
                src="/map-thumb.png" 
                alt="Map" 
                fill 
                className="object-cover opacity-60 group-hover:opacity-100 transition-opacity"
              />
           </div>

           <div className="flex-1 space-y-12 py-10">
              <div className="space-y-4">
                 <div className="flex items-center gap-3 text-primary">
                    <MapPin className="w-5 h-5" />
                    <span className="lato text-xs font-bold tracking-[0.3em] uppercase">Access & Contact</span>
                 </div>
                 <h2 className="text-3xl md:text-4xl font-bold text-hd-dark-brown">
                    いつでもお待ちしております。
                 </h2>
              </div>

              <div className="space-y-8">
                 <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                       <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div className="space-y-2">
                       <p className="font-bold text-hd-dark-brown text-lg">{siteConfig.clinic.address.postal}</p>
                       <p className="text-hd-text-brown leading-relaxed">{siteConfig.clinic.address.text}</p>
                       <p className="text-xs text-primary font-bold tracking-widest mt-2">{siteConfig.clinic.address.access} / {siteConfig.clinic.parking}</p>
                    </div>
                 </div>

                 <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                       <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div className="space-y-2">
                       <p className="font-bold text-hd-dark-brown text-lg">受付時間</p>
                       <p className="text-hd-text-brown leading-relaxed">{siteConfig.clinic.hours.text}</p>
                       <p className="text-xs text-muted-foreground font-bold tracking-widest mt-1">定休日：{siteConfig.clinic.closed}</p>
                    </div>
                 </div>
              </div>

              <div className="pt-8 flex flex-wrap gap-4">
                 <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 h-16 rounded-full shadow-xl shadow-primary/20">
                    <Link href={siteConfig.links.reserve}><CalendarCheck className="mr-3 h-5 w-5" /> WEB予約</Link>
                 </Button>
                 <Button asChild variant="outline" size="lg" className="border-primary/30 text-primary hover:bg-primary/5 px-10 h-16 rounded-full flex gap-3">
                    <Link href={siteConfig.links.line} target="_blank"><MessageCircle className="h-5 w-5" /> LINEで相談</Link>
                 </Button>
              </div>
           </div>
        </div>
      </section>

      {/* Secondary Sub Footer with Cautions */}
      <section className="py-20 border-t border-border/30 px-6">
         <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h3 className="font-bold text-hd-dark-brown flex items-center justify-center gap-2">
               <span className="w-4 h-px bg-primary/30"></span>
               {siteConfig.name}
               <span className="w-4 h-px bg-primary/30"></span>
            </h3>
            <p className="text-xs text-muted-foreground leading-loose">
               当院の施術は、首を原因とした不調をお持ちの方が対象です。精神科・心療内科等で投薬治療を受けられている方は、内容によりお受けできない場合がございます。事前にお電話にて症状をご相談ください。
            </p>
         </div>
      </section>
    </div>
  );
}
