"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { 
  Instagram, 
  Menu, 
  X, 
  CalendarCheck,
  Phone,
  MessageCircle,
  ChevronRight
} from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "ホーム", subLabel: "Home", href: "/" },
  { label: "当院について", subLabel: "About clinic", href: "/concept" },
  { label: "お知らせ", subLabel: "News", href: "/" }, // Temporarily back to home if no news page
  { label: "医師紹介", subLabel: "Doctor", href: "/concept" },
  { label: "診療案内", subLabel: "Service", href: "/service" },
  { label: "アクセス", subLabel: "Access", href: "/access" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false);
  }, [pathname]);

  if (!mounted) return null; // Prevent hydration mismatch

  return (
    <>
      {/* Mobile Top Header */}
      <header className="md:hidden sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40 px-6 h-16 flex items-center justify-between font-sans">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-[10px] font-bold italic shadow-sm">SOT</div>
          <span className="font-bold text-hd-dark-brown text-sm">{siteConfig.name}</span>
        </Link>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-hd-dark-brown hover:bg-secondary/50 rounded-full transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-background/98 flex flex-col pt-24 px-8 space-y-8 animate-fade-in font-sans">
          <nav className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href}
                className={cn(
                  "text-2xl font-bold flex flex-col",
                  pathname === item.href ? "text-primary" : "text-hd-dark-brown"
                )}
              >
                <span className="text-[10px] uppercase tracking-widest text-primary/60 font-lato">{item.subLabel}</span>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="pt-8 border-t border-border flex flex-col gap-4">
             <Button asChild className="w-full bg-primary h-14 rounded-full text-lg shadow-lg shadow-primary/20">
                <Link href={siteConfig.links.reserve}><CalendarCheck className="mr-2 h-5 w-5" /> Web予約</Link>
             </Button>
             <div className="flex justify-center gap-6 pt-4">
                <Link href="https://instagram.com" className="p-3 bg-secondary rounded-full text-primary hover:bg-primary/10 transition-colors">
                  <Instagram className="w-6 h-6" />
                </Link>
                <Link href={siteConfig.links.line} className="p-3 bg-secondary rounded-full text-primary hover:bg-primary/10 transition-colors">
                  <MessageCircle className="w-6 h-6" />
                </Link>
             </div>
          </div>
        </div>
      )}

      {/* Desktop Fixed Right Sidebar */}
      <aside className="hidden md:flex fixed right-0 top-0 h-screen w-64 bg-background border-l border-border/40 z-50 flex-col py-12 px-8 font-sans">
        <div className="flex flex-col items-center mb-12">
           <Link href="/" className="group flex flex-col items-center text-center space-y-3">
              <div className="w-20 h-20 rounded-full bg-secondary/30 border border-primary/10 flex items-center justify-center p-4 transition-transform group-hover:scale-110 duration-700">
                 <div className="w-full h-full bg-primary rounded-full flex items-center justify-center text-white font-bold text-xs ring-4 ring-white shadow-sm italic transition-transform group-hover:rotate-12">SOT</div>
              </div>
              <div className="space-y-1">
                 <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-primary italic opacity-70">Seitai App Clinic</p>
                 <p className="text-sm font-bold text-hd-dark-brown leading-tight tracking-tight">{siteConfig.name}</p>
              </div>
           </Link>
        </div>

        <nav className="flex-1 flex flex-col space-y-1 overflow-y-auto no-scrollbar">
          {navItems.map((item) => (
            <Link 
              key={item.href}
              href={item.href}
              className={cn(
                "group py-4 border-b border-border/30 flex items-center justify-between transition-all duration-300",
                pathname === item.href ? "text-primary px-2 bg-primary/5 rounded-lg -mx-2 border-transparent" : "text-hd-dark-brown hover:text-primary hover:px-2 hover:bg-secondary/30 hover:rounded-lg hover:-mx-2"
              )}
            >
              <div className="flex flex-col items-start">
                <span className={cn(
                  "text-[9px] uppercase tracking-widest font-bold font-lato transition-all duration-300",
                  pathname === item.href ? "text-primary" : "text-primary/40 group-hover:text-primary/70"
                )}>
                  {item.subLabel}
                </span>
                <span className="text-[15px] font-bold">{item.label}</span>
              </div>
              <ChevronRight className={cn(
                "w-4 h-4 transition-all duration-300 transform",
                pathname === item.href ? "text-primary opacity-100 translate-x-0" : "text-primary/20 opacity-0 group-hover:opacity-100 group-hover:translate-x-1"
              )} />
            </Link>
          ))}
        </nav>

        <div className="mt-8 space-y-6">
           <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 rounded-full h-14 group transition-all hover:scale-[1.02] active:scale-95">
             <Link href={siteConfig.links.reserve}>
               <CalendarCheck className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" /> 
               <span className="text-sm font-bold tracking-widest">WEB予約</span>
             </Link>
           </Button>
           
           <div className="flex flex-col items-center gap-5">
              <div className="flex gap-5">
                <Link href={siteConfig.links.line} target="_blank" className="p-3 bg-secondary hover:bg-primary/15 rounded-full text-primary transition-all hover:scale-110 active:scale-90 shadow-sm">
                  <MessageCircle className="w-4 h-4" />
                </Link>
                <Link href="https://instagram.com" target="_blank" className="p-3 bg-secondary hover:bg-primary/15 rounded-full text-primary transition-all hover:scale-110 active:scale-90 shadow-sm">
                  <Instagram className="w-4 h-4" />
                </Link>
              </div>
              <div className="text-center pt-2">
                 <div className="flex items-center justify-center gap-1.5 text-primary mb-1 group cursor-default">
                    <Phone className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-bold tracking-[0.2em] italic uppercase opacity-60">Contact</span>
                 </div>
                 <p className="text-xl font-bold text-hd-dark-brown tracking-tighter hover:text-primary transition-colors cursor-pointer">{siteConfig.clinic.phone}</p>
              </div>
           </div>
        </div>
      </aside>
    </>
  );
}
