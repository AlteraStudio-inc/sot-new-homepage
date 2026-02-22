import Link from "next/link";
import { MapPin, Clock, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#2C3E35] text-[#A2CBB5] py-12">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-2 space-y-4">
                        <h3 className="text-xl font-bold text-white tracking-widest leading-relaxed">
                            中央カイロプラクティック院 枚方院
                        </h3>
                        <p className="text-sm">もっと身近に ずっと見守る 心と身体の健康相談室</p>
                        <div className="space-y-2 text-sm mt-4">
                            <p className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-[#38A182]" />
                                〒573-0022 大阪府枚方市宮之阪3丁目5-40
                            </p>
                            <p className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-[#38A182]" />
                                072-840-7798
                            </p>
                            <p className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-[#38A182]" />
                                営業時間: 9:30-12:30 / 15:30-19:00
                            </p>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4">コンテンツ</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/" className="hover:text-white transition-colors">トップページ</Link></li>
                            <li><Link href="/concept" className="hover:text-white transition-colors">院長あいさつ</Link></li>
                            <li><Link href="/service" className="hover:text-white transition-colors">施術案内</Link></li>
                            <li><Link href="/menu" className="hover:text-white transition-colors">料金表</Link></li>
                            <li><Link href="/faq" className="hover:text-white transition-colors">よくあるご質問</Link></li>
                            <li><Link href="/access" className="hover:text-white transition-colors">アクセス</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} 中央カイロプラクティック院 枚方本院. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
