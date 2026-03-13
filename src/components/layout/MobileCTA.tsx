import Link from "next/link";
import { Calendar, Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export function MobileCTA() {
    return (
        <div className="md:hidden fixed bottom-0 left-0 z-50 w-full bg-[#FAF9F5] border-t border-[#E8F0E4] shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] pb-safe-area">
            <div className="flex h-16">
                <a href={`tel:${siteConfig.clinic.phone.replace(/-/g, '')}`} className="flex-1 flex flex-col items-center justify-center border-r border-[#E8F0E4] text-[#2C3E35] hover:bg-[#E8F0E4] transition-colors">
                    <Phone className="w-5 h-5 mb-1" />
                    <span className="text-[10px] font-bold">電話する</span>
                </a>
                <a href={siteConfig.links.line} target="_blank" rel="noopener noreferrer" className="flex-1 flex flex-col items-center justify-center border-r border-[#E8F0E4] text-[#06C755] hover:bg-green-50 transition-colors">
                    <MessageCircle className="w-5 h-5 mb-1" />
                    <span className="text-[10px] font-bold">LINE予約</span>
                </a>
                <Link href={siteConfig.links.reserve} className="flex-[2] flex flex-col items-center justify-center bg-[#38A182] text-white hover:bg-[#2b7a63] transition-colors">
                    <Calendar className="w-6 h-6 mb-0.5" />
                    <span className="text-sm font-bold tracking-wider">Web予約</span>
                </Link>
            </div>
        </div>
    );
}
