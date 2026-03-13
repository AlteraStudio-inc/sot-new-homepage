import Link from "next/link";
import { MapPin, Clock, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

import { useState, useEffect } from "react";

export function Footer() {
    const [mounted, setMounted] = useState(false);
    
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <footer className="bg-background text-foreground py-16 border-t border-border">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="md:col-span-1 space-y-6">
                        <div className="flex flex-col gap-1">
                             <span className="text-[10px] text-muted-foreground tracking-widest uppercase">枚方市宮之阪の整体</span>
                             <h3 className="text-xl font-bold text-hd-dark-brown tracking-wider">
                                {siteConfig.name}
                            </h3>
                        </div>
                        <p className="text-sm leading-relaxed">{siteConfig.description}</p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-bold text-hd-dark-brown border-b border-primary/20 pb-2 inline-block">クリニック情報</h4>
                        <div className="space-y-4 text-sm mt-4">
                            <div className="flex items-start gap-3">
                                <MapPin className="h-4 w-4 text-primary mt-1 shrink-0" />
                                <span>{siteConfig.clinic.address.postal}<br />{siteConfig.clinic.address.text}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="h-4 w-4 text-primary shrink-0" />
                                <span className="font-bold">{siteConfig.clinic.phone}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Clock className="h-4 w-4 text-primary shrink-0" />
                                <span>営業時間: {siteConfig.clinic.hours.text}</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-hd-dark-brown border-b border-primary/20 pb-2 inline-block">メニュー</h4>
                        <ul className="grid grid-cols-2 gap-y-3 gap-x-4 text-[13px] mt-4">
                            <li><NavLink href="/">ホーム</NavLink></li>
                            <li><NavLink href="/concept">当院について</NavLink></li>
                            <li><NavLink href="/service">施術案内</NavLink></li>
                            <li><NavLink href="/menu">料金表</NavLink></li>
                            <li><NavLink href="/reviews">お客様の声</NavLink></li>
                            <li><NavLink href="/access">アクセス</NavLink></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border mt-16 pt-8 text-center text-[11px] text-muted-foreground tracking-widest uppercase">
                    <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <li>
            <Link href={href} className="hover:text-primary transition-colors flex items-center gap-2 group italic">
                <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                {children}
            </Link>
        </li>
    );
}
