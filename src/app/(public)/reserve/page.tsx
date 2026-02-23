"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, ExternalLink, Clock, CreditCard, AlertCircle, MapPin, JapaneseYen } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function ReservePage() {
    return (
        <div className="w-full bg-[#FAF9F5] min-h-screen py-8 md:py-16 overflow-hidden">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-10 animate-fade-in-up">
                    <h1 className="text-3xl md:text-4xl font-bold text-[#2C3E35] mb-4">Web予約</h1>
                    <p className="text-[#556b5d]">ご予約の前に、以下のご案内を必ずご確認ください。</p>
                </div>

                <div className="bg-white rounded-[2rem] shadow-sm border border-[#E8F0E4] p-8 md:p-12 mb-10 overflow-hidden relative animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#E8F0E4] rounded-bl-full -z-10 opacity-50"></div>

                    <div className="space-y-10">
                        {/* 料金と時間 */}
                        <section>
                            <h2 className="text-xl font-bold text-[#38A182] flex items-center gap-2 border-b border-[#E8F0E4] pb-3 mb-6">
                                <JapaneseYen className="w-6 h-6" /> 料金・所要時間の目安
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-[#FAF9F5] p-6 rounded-2xl border border-[#E8F0E4]">
                                    <div className="font-bold text-[#2C3E35] mb-2 text-lg">初めての方</div>
                                    <div className="space-y-2 text-[#556b5d]">
                                        <p className="flex justify-between"><span>料金:</span> <span className="font-bold text-[#38A182] text-lg">8,800円<span className="text-sm font-normal text-[#556b5d]">(税込)</span></span></p>
                                        <p className="flex justify-between"><span>所要時間:</span> <span className="font-bold text-[#2C3E35]">約60分</span></p>
                                        <p className="text-xs mt-2 text-stone-500">※初回検査料2,200円＋施術料6,600円</p>
                                    </div>
                                </div>
                                <div className="bg-[#FAF9F5] p-6 rounded-2xl border border-[#E8F0E4]">
                                    <div className="font-bold text-[#2C3E35] mb-2 text-lg">2回目以降の方</div>
                                    <div className="space-y-2 text-[#556b5d]">
                                        <p className="flex justify-between"><span>料金:</span> <span className="font-bold text-[#38A182] text-lg">6,600円<span className="text-sm font-normal text-[#556b5d]">(税込)</span></span></p>
                                        <p className="flex justify-between"><span>所要時間:</span> <span className="font-bold text-[#2C3E35]">約30〜40分</span></p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* お支払い方法 */}
                        <section>
                            <h2 className="text-xl font-bold text-[#38A182] flex items-center gap-2 border-b border-[#E8F0E4] pb-3 mb-4">
                                <CreditCard className="w-6 h-6" /> お支払い方法
                            </h2>
                            <div className="text-[#2C3E35] leading-loose pl-2">
                                <p className="font-bold">{siteConfig.clinic.payment}</p>
                                <p className="text-sm text-[#556b5d] mt-1">※健康保険はご利用いただけない完全自費診療となります。</p>
                            </div>
                        </section>

                        {/* キャンセルポリシー */}
                        <section>
                            <h2 className="text-xl font-bold text-[#38A182] flex items-center gap-2 border-b border-[#E8F0E4] pb-3 mb-4">
                                <AlertCircle className="w-6 h-6" /> キャンセル・変更について
                            </h2>
                            <div className="text-[#2C3E35] leading-loose pl-2 bg-red-50 p-4 rounded-xl border border-red-100">
                                <p className="text-red-700 font-bold mb-2">ご予約の変更やキャンセルは、急病・急用以外は【1日前まで】にご連絡をお願いいたします。</p>
                                <p className="text-sm text-red-600/80">キャンセル待ちをされている患者様もいらっしゃいます。一人でも多くの方の不調を改善するため、ご協力のほどよろしくお願いいたします。</p>
                            </div>
                        </section>

                        {/* アクセス確認 */}
                        <section>
                            <h2 className="text-xl font-bold text-[#38A182] flex items-center gap-2 border-b border-[#E8F0E4] pb-3 mb-4">
                                <MapPin className="w-6 h-6" /> アクセス確認
                            </h2>
                            <div className="text-[#2C3E35] leading-loose pl-2">
                                <p className="font-bold mb-1">{siteConfig.clinic.address.text}</p>
                                <p className="text-sm text-[#556b5d]">{siteConfig.clinic.address.access} / {siteConfig.clinic.parking}</p>
                            </div>
                        </section>

                    </div>
                </div>

                {/* Primary CTA (External Booking) */}
                <div className="text-center animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                    <p className="text-sm font-bold text-[#38A182] mb-4">上記の内容を確認・同意いただける方はお進みください</p>
                    <Button asChild size="lg" className="w-full md:w-2/3 bg-[#38A182] hover:bg-[#2b7a63] text-white rounded-full h-20 text-xl shadow-xl hover:scale-105 transition-all duration-300 group">
                        <Link href="https://example.com/booking" target="_blank" rel="noopener noreferrer">
                            <span className="flex flex-col items-center">
                                <span className="flex items-center gap-2">予約画面へ進む <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
                                <span className="text-xs font-normal opacity-80 mt-1">外部予約システムへ移動します</span>
                            </span>
                        </Link>
                    </Button>
                </div>

                {/* Secondary CTAs */}
                <div className="mt-16 grid sm:grid-cols-2 gap-4 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                    <div className="bg-white p-6 rounded-2xl text-center border border-[#E8F0E4] shadow-sm">
                        <h3 className="font-bold text-[#2C3E35] mb-2">LINEで相談・予約</h3>
                        <p className="text-xs text-[#556b5d] mb-4">ご不明な点はお気軽にメッセージでお問合せください。</p>
                        <Button asChild variant="outline" className="w-full border-[#38A182] text-[#38A182] hover:bg-[#38A182] hover:text-white rounded-full">
                            <Link href={siteConfig.links.line} target="_blank">LINEを開く</Link>
                        </Button>
                    </div>
                    <div className="bg-white p-6 rounded-2xl text-center border border-[#E8F0E4] shadow-sm">
                        <h3 className="font-bold text-[#2C3E35] mb-2">お電話でのご予約</h3>
                        <p className="text-xs text-[#556b5d] mb-4">受付時間: {siteConfig.clinic.hours.text}</p>
                        <Button asChild variant="outline" className="w-full border-stone-300 text-[#2C3E35] hover:bg-stone-50 rounded-full font-bold">
                            <a href={`tel:${siteConfig.clinic.phone.replace(/-/g, '')}`}>{siteConfig.clinic.phone}</a>
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    );
}
