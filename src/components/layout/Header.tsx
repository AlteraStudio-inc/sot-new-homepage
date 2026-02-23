import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-[#E8F0E4] bg-[#FAF9F5]/90 backdrop-blur supports-[backdrop-filter]:bg-[#FAF9F5]/60 text-[#2C3E35]">
            <div className="container mx-auto max-w-5xl flex h-16 items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" className="flex flex-col items-start gap-1 lg:gap-2">
                    <span className="text-[10px] md:text-xs text-[#556b5d] tracking-wider leading-none">枚方市宮之阪の整体 GAS脳幹健康センター大阪</span>
                    <span className="font-bold text-base md:text-lg leading-none text-[#38A182]">{siteConfig.name}</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6 text-sm font-bold text-[#556b5d]">
                    <Link href="/first-time" className="hover:text-[#38A182] transition-colors">
                        はじめての方へ
                    </Link>
                    <Link href="/concept" className="hover:text-[#38A182] transition-colors">
                        院長あいさつ
                    </Link>
                    <Link href="/service" className="hover:text-[#38A182] transition-colors">
                        施術案内
                    </Link>
                    <Link href="/menu" className="hover:text-[#38A182] transition-colors">
                        料金表
                    </Link>
                    <Link href="/faq" className="hover:text-[#38A182] transition-colors">
                        よくあるご質問
                    </Link>
                    <Link href="/access" className="hover:text-[#38A182] transition-colors">
                        アクセス
                    </Link>
                    <Button asChild className="bg-[#38A182] hover:bg-[#2b7a63] text-white rounded-full px-6 shadow-sm">
                        <Link href="/reserve">Web予約</Link>
                    </Button>
                </nav>

                {/* Mobile menu button (Simplified for this example) */}
                <div className="md:hidden flex items-center">
                    <Button variant="ghost" size="icon" className="text-[#38A182]" aria-label="Menu">
                        <Menu className="h-6 w-6" />
                    </Button>
                </div>
            </div>
        </header>
    );
}
