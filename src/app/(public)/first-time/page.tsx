import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CalendarCheck, ChevronRight, MessageCircleHeart, JapaneseYen } from "lucide-react";
import { siteConfig } from "@/config/site";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export default function About() {
    return (
        <div className="w-full bg-stone-50 min-h-screen text-[#2C3E35]">
            <Breadcrumbs items={[{ label: "はじめての方へ", href: "/first-time" }]} />
            <div className="py-10 md:py-20">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h1 className="text-3xl md:text-4xl font-bold text-center text-[#2C3E35] mb-12">
                        はじめての方へ
                    </h1>

                    <section className="bg-white rounded-2xl shadow-sm p-6 md:p-10 mb-8 border border-stone-100">
                        <h2 className="text-2xl font-bold text-emerald-800 mb-6 border-b border-emerald-100 pb-4">
                            初回の流れ・所要時間
                        </h2>
                        <p className="text-stone-700 mb-6 leading-relaxed">
                            当院では、痛みの根本原因を見つけるため、初回は特に「カウンセリング」と「検査」に時間をかけています。<br />
                            <strong>初回の所要時間は約60分</strong>を目安としております。
                        </p>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center font-bold text-emerald-700 shrink-0">1</div>
                                <div>
                                    <h3 className="text-lg font-bold mb-2">問診・カウンセリング (約15分)</h3>
                                    <p className="text-stone-600">現在のお悩み、過去のケガ、生活習慣などを詳しくお伺いします。</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center font-bold text-emerald-700 shrink-0">2</div>
                                <div>
                                    <h3 className="text-lg font-bold mb-2">独自の検査 (約15分)</h3>
                                    <p className="text-stone-600">姿勢分析や関節の動きを確認し、痛みの本当の原因を特定します。</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center font-bold text-emerald-700 shrink-0">3</div>
                                <div>
                                    <h3 className="text-lg font-bold mb-2">施術・説明 (約30分)</h3>
                                    <p className="text-stone-600">検査結果に基づき、最適な施術を行います。バキバキしないソフトな整体です。施術後は今後の通院計画やご自宅でのセルフケアをご提案します。</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="bg-white rounded-2xl shadow-sm p-6 md:p-10 mb-8 border border-stone-100">
                        <h2 className="text-2xl font-bold text-emerald-800 mb-6 border-b border-emerald-100 pb-4">
                            服装と持ち物について
                        </h2>
                        <ul className="list-disc leading-relaxed text-stone-700 pl-6 space-y-2">
                            <li>なるべく動きやすい服装（ジャージやスウェット等）でお越しください。</li>
                            <li>ジーンズやスカート、硬い素材の服はご遠慮ください。</li>
                            <li>お着替えの無料貸出もございますので、お仕事帰りでもそのままご来院いただけます。</li>
                            <li>フェイスタオルを1枚ご持参ください（施術ベッドの顔当てに敷いて使用します）。</li>
                        </ul>
                    </section>

                    <section className="bg-white rounded-2xl shadow-sm p-6 md:p-10 mb-8 border border-stone-100">
                        <h2 className="text-2xl font-bold text-[#38A182] mb-6 border-b border-[#E8F0E4] pb-4 flex items-center gap-2">
                            <JapaneseYen className="w-6 h-6" /> 初回の料金について
                        </h2>
                        <div className="bg-[#FAF9F5] p-6 rounded-2xl border border-[#E8F0E4] mb-4">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-lg font-bold text-[#2C3E35]">初回検査料 ＋ 施術料</span>
                                <span className="text-2xl font-bold text-[#38A182]">8,800円<span className="text-sm text-[#556b5d] font-normal">（税込）</span></span>
                            </div>
                            <p className="text-sm text-[#556b5d] mt-2">
                                ※内訳: 初回検査料 2,200円 ＋ SOT整体・脳幹療法 6,600円<br />
                                ※小学生以下のお子様は5,500円となります。
                            </p>
                        </div>
                    </section>

                    <section className="bg-white rounded-2xl shadow-sm p-6 md:p-10 mb-8 border border-stone-100">
                        <h2 className="text-2xl font-bold text-[#38A182] mb-6 border-b border-[#E8F0E4] pb-4 flex items-center gap-2">
                            <MessageCircleHeart className="w-6 h-6" /> お客様の声
                        </h2>
                        <div className="space-y-4 text-stone-700">
                            <div className="border border-stone-100 bg-stone-50 p-4 rounded-xl">
                                <p className="font-bold flex gap-2">「長年の肩こりがスッキリしました！」</p>
                                <p className="mt-2 text-sm leading-relaxed text-stone-600">最初は少し不安でしたが、丁寧なカウンセリングと痛みのない施術でとてもリラックスできました。終わった後は驚くほど体が軽く、もっと早く来ればよかったと思いました。（30代 女性）</p>
                            </div>
                            <div className="border border-stone-100 bg-stone-50 p-4 rounded-xl">
                                <p className="font-bold flex gap-2">「自律神経の乱れが改善してよく眠れるように」</p>
                                <p className="mt-2 text-sm leading-relaxed text-stone-600">首の張りからくる不眠に悩んでいましたが、何度か通ううちに朝までぐっすり眠れるようになりました。バキバキしない優しい施術なので毎回心地よく受けられます。（40代 男性）</p>
                            </div>
                            <div className="border border-stone-100 bg-stone-50 p-4 rounded-xl">
                                <p className="font-bold flex gap-2">「産後の骨盤矯正で通っています」</p>
                                <p className="mt-2 text-sm leading-relaxed text-stone-600">産後の腰の痛みがひどく駆け込みましたが、数回で痛みがなくなり家事も楽になりました。院内の雰囲気も落ち着いていて通いやすいです。（20代 女性）</p>
                            </div>
                            <div className="text-center pt-4">
                                <Button variant="outline" asChild className="text-[#38A182] border-[#38A182] hover:bg-[#E8F0E4]">
                                    <Link href="/reviews">もっとお客様の声を見る <ChevronRight className="ml-1 w-4 h-4" /></Link>
                                </Button>
                            </div>
                        </div>
                    </section>

                    <section className="bg-white rounded-2xl shadow-sm p-6 md:p-10 mb-12 border border-stone-100">
                        <h2 className="text-2xl font-bold text-emerald-800 mb-6 border-b border-emerald-100 pb-4">
                            キャンセルポリシー
                        </h2>
                        <p className="text-stone-700 leading-relaxed">
                            当院は完全予約制となっております。直前のキャンセルや無断キャンセルは、他のお客様の迷惑となりますので固くお断りしております。<br /><br />
                            <strong>ご予約の変更・キャンセルは、前日の営業時間内まで</strong>にお願いいたします。なお、やむを得ない事情がある場合は必ずお電話にてご連絡ください。
                        </p>
                    </section>

                    <div className="text-center">
                        <p className="text-stone-600 mb-6">内容をご確認のうえ、以下の赤いボタンから初回ご予約にお進みください。</p>
                        <Button asChild size="lg" className="bg-[#38A182] hover:bg-[#2b7a63] text-white rounded-full px-8 h-16 text-xl shadow-lg w-full md:w-auto hover:scale-105 transition-transform">
                            <Link href={siteConfig.links.reserve}><CalendarCheck className="mr-3 h-6 w-6" /> Web予約へ進む</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
