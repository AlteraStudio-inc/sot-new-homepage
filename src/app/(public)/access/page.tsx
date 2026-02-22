import Image from "next/image";
import { MapPin, Phone, Car, Clock } from "lucide-react";

export default function AccessPage() {
    return (
        <div className="w-full bg-stone-50 min-h-screen py-10 md:py-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">アクセス・地図</h1>
                    <p className="text-stone-600">道に迷われた場合は、ご遠慮なくお電話でお問い合わせください。</p>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden mb-12">
                    {/* Google Map Dummy Placeholder */}
                    <div className="w-full h-[400px] bg-stone-200 relative flex items-center justify-center">
                        <span className="text-stone-500 font-medium">Google Map Embed Area</span>
                        <div className="absolute inset-0 opacity-20 bg-[url('/placeholder-map.png')] bg-cover bg-center"></div>
                    </div>

                    <div className="p-8 md:p-12">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold text-emerald-800 border-b border-emerald-100 pb-3">
                                    店舗情報
                                </h2>

                                <div className="flex items-start gap-4">
                                    <MapPin className="text-emerald-600 mt-1 shrink-0" />
                                    <div>
                                        <h3 className="font-bold text-stone-900 mb-1">住所</h3>
                                        <p className="text-stone-700 leading-relaxed text-sm">
                                            〒000-0000<br />
                                            東京都渋谷区〇〇 1-2-3<br />
                                            〇〇ビル 1F
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <Phone className="text-emerald-600 shrink-0" />
                                    <div>
                                        <h3 className="font-bold text-stone-900 mb-1">電話番号</h3>
                                        <p className="text-stone-700 text-lg font-medium tracking-wider">03-0000-0000</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold text-emerald-800 border-b border-emerald-100 pb-3">
                                    営業時間・設備
                                </h2>

                                <div className="flex items-start gap-4">
                                    <Clock className="text-emerald-600 mt-1 shrink-0" />
                                    <div className="w-full">
                                        <h3 className="font-bold text-stone-900 mb-2">営業時間</h3>
                                        <table className="w-full text-sm text-stone-700 text-center border-collapse">
                                            <thead>
                                                <tr className="border-b border-stone-200">
                                                    <th className="font-normal py-1"></th>
                                                    <th className="font-normal py-1">月</th>
                                                    <th className="font-normal py-1">火</th>
                                                    <th className="font-normal py-1">水</th>
                                                    <th className="font-normal py-1">木</th>
                                                    <th className="font-normal py-1">金</th>
                                                    <th className="font-normal py-1 text-blue-600">土</th>
                                                    <th className="font-normal py-1 text-red-600">日</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="py-2 text-xs">9:00 - 20:00</td>
                                                    <td className="py-2">〇</td>
                                                    <td className="py-2">〇</td>
                                                    <td className="py-2">〇</td>
                                                    <td className="py-2">〇</td>
                                                    <td className="py-2">〇</td>
                                                    <td className="py-2">〇</td>
                                                    <td className="py-2 text-stone-300">休</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <Car className="text-emerald-600 mt-1 shrink-0" />
                                    <div>
                                        <h3 className="font-bold text-stone-900 mb-1">駐車場・駐輪場</h3>
                                        <p className="text-stone-700 text-sm leading-relaxed">
                                            院正面に無料駐車場を3台完備しております。駐輪スペースもございます。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8">
                    <h2 className="text-xl font-bold text-stone-900 mb-6 border-b border-stone-100 pb-3">最寄り駅からの道順</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[1, 2, 3].map((step) => (
                            <div key={step} className="space-y-3">
                                <div className="aspect-[4/3] bg-stone-200 rounded-xl relative overflow-hidden flex items-center justify-center text-stone-400">
                                    写真 {step}
                                </div>
                                <div className="flex gap-2">
                                    <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0">{step}</span>
                                    <p className="text-sm text-stone-700 leading-relaxed pt-0.5">
                                        ここには各ステップの道案内のテキストが入ります。駅から見える目印などを記載します。
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
