import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarCheck, ChevronRight, Check, AlertCircle, Bird } from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export default async function MenuPage() {
    // Fetch all menus including inactive ones to handle "stopped" status properly.
    const menus = await prisma.menu.findMany({
        orderBy: { order: 'asc' },
    });

    const firstTimeMenus = menus.filter(m => m.target === 'first_time' || m.target === 'both');
    const returningMenus = menus.filter(m => m.target === 'returning' || m.target === 'both');

    return (
        <div className="w-full bg-[#FAF9F5] min-h-screen text-[#2C3E35] overflow-hidden">
            <Breadcrumbs items={[{ label: "料金表", href: "/menu" }]} />
            <div className="bg-[#E8F0E4] py-16 md:py-24 text-center relative overflow-hidden">
                <div className="absolute top-10 right-10 z-0 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                    <Bird className="text-[#38A182] w-12 h-12 opacity-80 mix-blend-multiply flex transform scale-x-[-1]" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-[#2C3E35] mb-4 animate-fade-in-up">料金表</h1>
                <p className="text-[#556b5d] animate-fade-in-up" style={{ animationDelay: '100ms' }}>当院で受けられる施術料金をご案内します。</p>
            </div>

            <div className="container mx-auto px-4 max-w-4xl py-16 md:py-24 space-y-24">

                {/* 初回メニュー */}
                {firstTimeMenus.length > 0 && (
                    <section className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                        <div className="text-center mb-12">
                            <h2 className="text-2xl font-bold text-[#38A182] mb-2 flex items-center justify-center gap-2">
                                <span className="w-8 h-1 bg-[#38A182] rounded-full"></span>
                                初めての方
                                <span className="w-8 h-1 bg-[#38A182] rounded-full"></span>
                            </h2>
                        </div>
                        <div className="space-y-6">
                            {firstTimeMenus.map(m => (
                                <div key={m.id} className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-[#E8F0E4] relative group transition-all hover:border-[#38A182] hover:shadow-md">
                                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-[#E8F0E4] pb-4 mb-4">
                                        <div className="w-full md:w-2/3">
                                            <h3 className="text-xl md:text-2xl font-bold text-[#2C3E35] flex items-center gap-2">
                                                {m.name}
                                                {!m.is_active && <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full whitespace-nowrap">現在提供していません</span>}
                                            </h3>
                                        </div>
                                        <div className="text-right w-full md:w-auto shrink-0 flex flex-col items-end">
                                            {m.price > 0 ? (
                                                <span className="text-2xl md:text-3xl font-bold text-[#38A182]">
                                                    {m.price.toLocaleString()}円<span className="text-sm text-[#556b5d] font-normal">（税込）</span>
                                                </span>
                                            ) : (
                                                <span className="text-lg font-bold text-[#556b5d]">準備中</span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <p className="text-[#2C3E35] font-medium border-l-4 border-[#38A182] pl-3 leading-relaxed">
                                            {m.description || "症状に合わせた最適な施術をご提案します。"}
                                        </p>
                                        <p className="text-sm text-[#556b5d] bg-[#FAF9F5] inline-block px-3 py-1.5 rounded-lg font-bold">
                                            目安時間: 約{m.duration_minutes > 0 ? `${m.duration_minutes}分` : "60分（カウンセリング含む）"}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* 2回目以降メニュー */}
                {returningMenus.length > 0 && (
                    <section className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                        <div className="text-center mb-12 mt-16">
                            <h2 className="text-2xl font-bold text-[#38A182] mb-2 flex items-center justify-center gap-2">
                                <span className="w-8 h-1 bg-[#38A182] rounded-full"></span>
                                2回目以降の方
                                <span className="w-8 h-1 bg-[#38A182] rounded-full"></span>
                            </h2>
                        </div>
                        <div className="space-y-6">
                            {returningMenus.map(m => (
                                <div key={m.id} className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-[#E8F0E4] relative group transition-all hover:border-[#38A182] hover:shadow-md">
                                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-[#E8F0E4] pb-4 mb-4">
                                        <div className="w-full md:w-2/3">
                                            <h3 className="text-xl md:text-2xl font-bold text-[#2C3E35] flex items-center gap-2">
                                                {m.name}
                                                {!m.is_active && <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full whitespace-nowrap">現在提供していません</span>}
                                            </h3>
                                        </div>
                                        <div className="text-right w-full md:w-auto shrink-0 flex flex-col items-end">
                                            {m.price > 0 ? (
                                                <span className="text-2xl md:text-3xl font-bold text-[#38A182]">
                                                    {m.price.toLocaleString()}円<span className="text-sm text-[#556b5d] font-normal">（税込）</span>
                                                </span>
                                            ) : (
                                                <span className="text-lg font-bold text-[#556b5d]">準備中</span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <p className="text-[#2C3E35] leading-relaxed">
                                            {m.description || "前回のご来院からの経過を伺い、最適な施術を行います。"}
                                        </p>
                                        <p className="text-sm text-[#556b5d] bg-[#FAF9F5] inline-block px-3 py-1.5 rounded-lg">
                                            目安時間: 約{m.duration_minutes > 0 ? `${m.duration_minutes}分` : "30分〜40分"}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* 初めての方へ */}
                <section className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                    <h3 className="text-2xl font-bold text-[#38A182] mb-6 flex items-center gap-2">
                        <Check className="w-6 h-6" /> 初めての方へ
                    </h3>
                    <div className="space-y-4 text-[#2C3E35] bg-white p-8 rounded-[2rem] border border-[#E8F0E4] shadow-sm leading-loose">
                        <p>・上記以外の金額をいただく事は一切ございません！</p>
                        <p>・回数券はございませんのでご了承ください。</p>
                        <p>・保険診療は行っておりません。</p>
                        <div className="pl-4 border-l-4 border-[#38A182] my-4 bg-[#FAF9F5] p-4 rounded-r-xl">
                            <p className="font-bold">・お支払いは現金かPayPay(QRコード)でお願いします。</p>
                            <p className="text-sm text-[#556b5d]">※その他の決済アプリやクレジットカードは対応しておりませんのでご了承ください。</p>
                        </div>
                        <p>・当院は完全予約制です。当日のご予約も受け付けております。</p>
                        <p>・ご予約のない来院はご案内できませんので、必ずご予約をお願い致します。</p>
                        <p className="text-[#38A182] font-bold">・ 組合規制により、6カ月来院されなかった方は、再度検査料金（2,200円）を頂戴致します。ご了承下さい。</p>
                    </div>
                </section>

                {/* 治療間隔について */}
                <section className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                    <h3 className="text-2xl font-bold text-[#38A182] mb-6 flex items-center gap-2">
                        <CalendarCheck className="w-6 h-6" /> 治療間隔について
                    </h3>
                    <div className="bg-white p-8 rounded-[2rem] border border-[#E8F0E4] shadow-sm leading-loose text-[#2C3E35]">
                        <p className="mb-6">
                            脳幹療法(坐楽・寝楽)＆SOT(骨盤調整)等で優しく無理なく、心と身体共に整えて行きます。<br />
                            治療回数の目安としては大体の患者様が
                        </p>
                        <div className="grid md:grid-cols-3 gap-4 mb-6">
                            <div className="bg-[#FAF9F5] rounded-xl p-4 text-center border border-[#E8F0E4] hover:border-[#38A182] transition-colors">
                                <div className="font-bold text-[#38A182] mb-2">初診～２回目</div>
                                <div className="text-sm">72時間後.３日後</div>
                            </div>
                            <div className="bg-[#FAF9F5] rounded-xl p-4 text-center border border-[#E8F0E4] hover:border-[#38A182] transition-colors">
                                <div className="font-bold text-[#38A182] mb-2">３～４回目</div>
                                <div className="text-sm">１週間おき</div>
                            </div>
                            <div className="bg-[#FAF9F5] rounded-xl p-4 text-center border border-[#E8F0E4] hover:border-[#38A182] transition-colors">
                                <div className="font-bold text-[#38A182] mb-2">５～６回目</div>
                                <div className="text-sm">2週間おき</div>
                            </div>
                        </div>
                        <p className="font-bold mb-6">※とりあえず５～６回の施術を目安にご来院下さい。</p>
                        <p className="mb-8 border-b border-[#E8F0E4] pb-8">
                            ・症状が改善し、施術間隔を1ヶ月空けられるようになった方を対象に、予防会員カードをお渡ししています。
                        </p>

                        <div className="bg-[#fcf8f2] p-6 rounded-2xl border border-[#f5e6d3]">
                            <h4 className="font-bold text-[#d97706] mb-2 flex items-center gap-2"><AlertCircle className="w-5 h-5" /> ◆お願いです</h4>
                            <p className="text-sm text-[#92400e]">
                                予約の変更やキャンセルは急病・急用以外は1日でも早く連絡をお願いいたします。<br />
                                （キャンセル待ちの方へ連絡取らなければいけませんので、少しでも早くお願いいたします。）
                            </p>
                        </div>
                    </div>
                </section>

                {/* 注意事項 */}
                <section className="animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                    <h3 className="text-2xl font-bold text-[#38A182] mb-6 flex items-center gap-2">
                        <AlertCircle className="w-6 h-6" /> 注意事項
                    </h3>
                    <div className="bg-white p-8 rounded-[2rem] border border-[#E8F0E4] shadow-sm leading-loose text-[#2C3E35]">
                        <p>
                            当院のメンタルセラピーはあくまでも首が原因で起こる自律神経バランス障害の患者さんが対象です。<br />
                            精神科や、心療内科で投薬治療中の方はご対応できない場合がありますので必ず事前にお電話にてご相談ください。
                        </p>
                    </div>
                </section>

                <div className="flex justify-center pt-8 pb-16 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                    <Button asChild size="lg" className="bg-[#38A182] hover:bg-[#2b7a63] text-white rounded-full px-12 h-16 text-xl shadow-lg hover:scale-105 transition-transform duration-300 w-full sm:w-auto">
                        <Link href="/reserve"><CalendarCheck className="mr-2 h-6 w-6" /> Webで予約する</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
