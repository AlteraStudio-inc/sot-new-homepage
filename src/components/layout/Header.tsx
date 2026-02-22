import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-stone-200">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <Link href="/" className="text-xl font-bold tracking-tight text-stone-900">
                        整体院名
                    </Link>
                </div>

                <nav className="hidden md:flex items-center space-x-6">
                    <Link href="/about" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">
                        はじめての方へ
                    </Link>
                    <Link href="/menu" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">
                        料金・メニュー
                    </Link>
                    <Link href="/faq" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">
                        よくある質問
                    </Link>
                    <Link href="/access" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">
                        アクセス
                    </Link>
                </nav>

                <div className="hidden md:flex items-center space-x-4">
                    <span className="text-sm font-bold text-stone-800">03-0000-0000</span>
                    <Button asChild className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-6">
                        <Link href="/reserve">Web予約する</Link>
                    </Button>
                </div>

                {/* Mobile Menu Button - can be fully implemented later */}
                <button className="md:hidden p-2 text-stone-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                </button>
            </div>
        </header>
    );
}
