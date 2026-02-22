import Link from "next/link";
import { Calendar, Phone, MessageCircle } from "lucide-react";

export default function MobileCTA() {
    return (
        <div className="md:hidden fixed bottom-0 left-0 z-50 w-full bg-white border-t border-stone-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] pb-safe-area">
            <div className="flex h-16">
                <a href="tel:0300000000" className="flex-1 flex flex-col items-center justify-center border-r border-stone-200 text-stone-600 hover:bg-stone-50 transition-colors">
                    <Phone className="w-5 h-5 mb-1" />
                    <span className="text-[10px] font-medium">電話する</span>
                </a>
                <a href="https://line.me/R/ti/p/@example" target="_blank" rel="noopener noreferrer" className="flex-1 flex flex-col items-center justify-center border-r border-stone-200 text-[#06C755] hover:bg-green-50 transition-colors">
                    <MessageCircle className="w-5 h-5 mb-1" />
                    <span className="text-[10px] font-medium">LINE予約</span>
                </a>
                <Link href="/reserve" className="flex-[2] flex flex-col items-center justify-center bg-emerald-600 text-white hover:bg-emerald-700 transition-colors">
                    <Calendar className="w-6 h-6 mb-0.5" />
                    <span className="text-sm font-bold tracking-wider">Web予約</span>
                </Link>
            </div>
        </div>
    );
}
