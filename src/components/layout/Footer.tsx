import Link from "next/link";
import { MapPin, Clock, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Footer() {
    return (
        <footer className="bg-[#2C3E35] text-[#A2CBB5] py-12">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-2 space-y-4">
                        <h3 className="text-xl font-bold text-white tracking-widest leading-relaxed">
                            {siteConfig.name}
                        </h3>
                        <p className="text-sm">{siteConfig.description.split("。")[0]}</p>
                        <div className="space-y-2 text-sm mt-4">
                            <p className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-[#38A182]" />
                                {siteConfig.clinic.address.postal} {siteConfig.clinic.address.text}
                            </p>
                            <p className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-[#38A182]" />
                                {siteConfig.clinic.phone}
                            </p>
                            <p className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-[#38A182]" />
                                営業時間: {siteConfig.clinic.hours.text}
                            </p>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4">コンテンツ</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/" className="hover:text-white transition-colors">トップページ</Link></li>
                            <li><Link href="/first-time" className="hover:text-white transition-colors">はじめての方へ</Link></li>
                            <li><Link href="/concept" className="hover:text-white transition-colors">院長あいさつ</Link></li>
                            <li><Link href="/service" className="hover:text-white transition-colors">施術案内</Link></li>
                            <li><Link href="/menu" className="hover:text-white transition-colors">料金表</Link></li>
                            <li><Link href="/reviews" className="hover:text-white transition-colors">お客様の声</Link></li>
                            <li><Link href="/access" className="hover:text-white transition-colors">アクセス</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
