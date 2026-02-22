import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-stone-900 text-stone-300 py-12 md:py-16 pt-20">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="md:col-span-1">
                    <h2 className="text-xl font-bold text-white mb-4">整体院名</h2>
                    <p className="text-sm leading-relaxed text-stone-400 mb-4">
                        〒000-0000<br />
                        東京都渋谷区〇〇 1-2-3<br />
                        〇〇ビル 1F
                    </p>
                    <p className="text-sm text-stone-400">
                        TEL: 03-0000-0000<br />
                        営業時間: 9:00 - 20:00<br />
                        定休日: 日曜日
                    </p>
                </div>

                <div className="md:col-span-1">
                    <h3 className="font-bold text-white mb-4">メニュー</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/" className="hover:text-white transition-colors">トップページ</Link></li>
                        <li><Link href="/about" className="hover:text-white transition-colors">はじめての方へ</Link></li>
                        <li><Link href="/concept" className="hover:text-white transition-colors">当院の考え方</Link></li>
                        <li><Link href="/symptoms" className="hover:text-white transition-colors">症状別コラム</Link></li>
                    </ul>
                </div>

                <div className="md:col-span-1">
                    <h3 className="font-bold text-white mb-4">ご案内</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/menu" className="hover:text-white transition-colors">料金表</Link></li>
                        <li><Link href="/reviews" className="hover:text-white transition-colors">患者様の声</Link></li>
                        <li><Link href="/faq" className="hover:text-white transition-colors">よくある質問</Link></li>
                        <li><Link href="/access" className="hover:text-white transition-colors">アクセス・地図</Link></li>
                    </ul>
                </div>

                <div className="md:col-span-1">
                    <h3 className="font-bold text-white mb-4">規約等</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/privacy" className="hover:text-white transition-colors">プライバシーポリシー</Link></li>
                        <li><Link href="/terms" className="hover:text-white transition-colors">利用規約</Link></li>
                        <li><Link href="/law" className="hover:text-white transition-colors">特定商取引法に基づく表記</Link></li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto px-4 mt-12 pt-8 border-t border-stone-800 text-center text-sm text-stone-500">
                &copy; {new Date().getFullYear()} 整体院名 All Rights Reserved.
            </div>
        </footer>
    );
}
