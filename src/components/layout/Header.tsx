import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, Instagram } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Header() {
    return (
        <>
            {/* Mobile Header */}
            <header className="md:hidden sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur">
                <div className="container mx-auto flex h-16 items-center justify-between px-4">
                    <Link href="/" className="flex flex-col items-start">
                        <span className="text-[10px] text-muted-foreground tracking-wider leading-none">枚方市宮之阪の整体</span>
                        <span className="font-bold text-base leading-none text-primary">{siteConfig.name}</span>
                    </Link>
                    <Button variant="ghost" size="icon" className="text-primary" aria-label="Menu">
                        <Menu className="h-6 w-6" />
                    </Button>
                </div>
            </header>

            {/* Desktop Side Navigation */}
            <aside className="hidden md:flex fixed top-0 right-0 z-50 h-screen w-40 flex-col items-center border-l border-border bg-background py-10">
                <div className="flex flex-col items-center gap-8 h-full">
                    {/* Logo Section */}
                    <Link href="/" className="flex flex-col items-center text-center px-4 mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                             <div className="w-6 h-6 bg-primary rounded-full opacity-80" />
                        </div>
                        <span className="font-bold text-xs text-hd-dark-brown leading-tight">{siteConfig.name}</span>
                    </Link>

                    {/* Navigation Links */}
                    <nav className="flex flex-col items-center gap-6 text-[13px] font-bold text-foreground">
                        <NavItem href="/" label="ホーム" subLabel="Home" />
                        <NavItem href="/concept" label="当院について" subLabel="About" />
                        <NavItem href="/service" label="施術案内" subLabel="Service" />
                        <NavItem href="/menu" label="料金表" subLabel="Price" />
                        <NavItem href="/reviews" label="お客様の声" subLabel="Reviews" />
                        <NavItem href="/access" label="アクセス" subLabel="Access" />
                    </nav>

                    {/* Social & Contact */}
                    <div className="mt-auto flex flex-col items-center gap-4 pb-4">
                        <div className="flex gap-3">
                            <a href="#" className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                                <Instagram className="w-4 h-4" />
                            </a>
                        </div>
                        <div className="text-center">
                            <p className="text-[10px] text-muted-foreground leading-tight">予約・お問い合わせ</p>
                            <p className="font-bold text-sm text-hd-dark-brown">{siteConfig.clinic.phone}</p>
                        </div>
                        <Button asChild className="bg-primary hover:bg-primary/90 text-white w-28 h-28 rounded-full flex flex-col gap-1 items-center justify-center shadow-lg hover:scale-105 transition-transform">
                            <Link href="/reserve" className="flex flex-col items-center">
                                <span className="text-xs">Web予約</span>
                                <span className="text-[10px] font-normal opacity-80">Reserve</span>
                            </Link>
                        </Button>
                    </div>
                </div>
            </aside>
        </>
    );
}

function NavItem({ href, label, subLabel }: { href: string; label: string; subLabel: string }) {
    return (
        <Link href={href} className="group flex flex-col items-center hover:text-primary transition-colors">
            <span className="text-xs">{label}</span>
            <span className="text-[9px] font-normal text-muted-foreground group-hover:text-primary/70 transition-colors uppercase tracking-widest italic">{subLabel}</span>
        </Link>
    );
}
