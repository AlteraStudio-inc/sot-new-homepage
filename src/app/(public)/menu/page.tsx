import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Clock } from "lucide-react";

// Server component
export default async function MenuPage() {
    const menus = await prisma.menu.findMany({
        where: { is_active: true },
        orderBy: { order: "asc" },
    });

    const firstTimeMenus = menus.filter(m => m.target === "first_time" || m.target === "both");
    const returningMenus = menus.filter(m => m.target === "returning" || m.target === "both");

    return (
        <div className="w-full bg-stone-50 min-h-screen py-10 md:py-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">料金・メニュー</h1>
                    <p className="text-stone-600">お体への負担が少ない、根本改善を目指す施術です。</p>
                </div>

                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-emerald-800 border-b-2 border-emerald-100 pb-3 mb-8">
                        はじめての方 (初回限定)
                    </h2>
                    <div className="grid gap-6">
                        {firstTimeMenus.map((menu) => (
                            <Card key={menu.id} className="border border-emerald-200 shadow-sm overflow-hidden relative">
                                <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
                                <CardHeader className="bg-emerald-50/50 pb-4">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <CardTitle className="text-xl md:text-2xl text-emerald-900">{menu.name}</CardTitle>
                                        <div className="text-2xl font-bold text-stone-900">
                                            &yen;{menu.price.toLocaleString()}
                                            <span className="text-sm font-normal text-stone-500 ml-1">(税込)</span>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-6">
                                    <p className="text-stone-700 leading-relaxed min-h-[3rem] mb-6">
                                        {menu.description}
                                    </p>
                                    <div className="flex flex-col md:flex-row items-center justify-between border-t border-stone-100 pt-6 gap-4">
                                        <div className="flex items-center text-stone-500 text-sm">
                                            <Clock className="w-4 h-4 mr-2" />
                                            所要時間: 約{menu.duration_minutes}分 (問診・検査含む)
                                        </div>
                                        <Button asChild className="w-full md:w-auto rounded-full bg-emerald-600 hover:bg-emerald-700">
                                            <Link href={`/reserve?menu_id=${menu.id}`}>このコースで予約する</Link>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-stone-800 border-b-2 border-stone-200 pb-3 mb-8">
                        2回目以降の方
                    </h2>
                    <div className="grid gap-6">
                        {returningMenus.map((menu) => (
                            <Card key={menu.id} className="border border-stone-200 shadow-sm">
                                <CardHeader className="bg-stone-100/50 pb-4">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <CardTitle className="text-lg md:text-xl text-stone-800">{menu.name}</CardTitle>
                                        <div className="text-xl font-bold text-stone-900">
                                            &yen;{menu.price.toLocaleString()}
                                            <span className="text-sm font-normal text-stone-500 ml-1">(税込)</span>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-6">
                                    <p className="text-stone-600 text-sm leading-relaxed mb-4">
                                        {menu.description}
                                    </p>
                                    <div className="flex flex-col md:flex-row items-center justify-between border-t border-stone-100 pt-4 gap-4">
                                        <div className="flex items-center text-stone-400 text-sm">
                                            <Clock className="w-4 h-4 mr-2" />
                                            所要時間: 約{menu.duration_minutes}分
                                        </div>
                                        <Button asChild variant="outline" className="w-full md:w-auto rounded-full">
                                            <Link href={`/reserve?menu_id=${menu.id}`}>予約する</Link>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                <div className="bg-white rounded-2xl p-8 border border-stone-200 mt-12">
                    <h3 className="font-bold text-stone-900 mb-4">お支払い方法について</h3>
                    <p className="text-stone-600 text-sm leading-relaxed mb-4">
                        現金、クレジットカード（VISA, MasterCard, JCB, AMEX, Diners）、各種QRコード決済（PayPay、LINE Pay、メルペイ、d払い等）、交通系ICカードに対応しております。<br />
                        ※保険適用の施術は行っておりません。完全自費診療となります。
                    </p>
                </div>
            </div>
        </div>
    );
}
