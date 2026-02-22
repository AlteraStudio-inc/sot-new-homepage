import Link from "next/link";
import Image from "next/image";
import { Bird, MessageCircle } from "lucide-react";

export default function ConceptPage() {
    return (
        <div className="w-full bg-[#FAF9F5] min-h-screen text-[#2C3E35]">
            <div className="bg-[#E8F0E4] py-16 md:py-24 text-center relative overflow-hidden">
                <Bird className="absolute top-10 left-10 text-[#38A182] w-12 h-12 opacity-80 mix-blend-multiply rotate-12" />
                <h1 className="text-3xl md:text-4xl font-bold text-[#2C3E35] mb-4">院長あいさつ</h1>
                <p className="text-[#556b5d]">院長 鍋島 彰吾 (なべしま しょうご) からのメッセージ</p>
            </div>

            <div className="container mx-auto px-4 max-w-4xl py-16 md:py-24">
                <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-[#E8F0E4] flex flex-col md:flex-row gap-10 items-start">
                    <div className="w-full md:w-1/3 shrink-0">
                        <div className="aspect-[3/4] bg-[#E8F0E4] rounded-2xl overflow-hidden relative border-4 border-[#FAF9F5] shadow-sm">
                            <Image src="/placeholder-director.jpg" alt="院長 鍋島彰吾" fill className="object-cover" />
                        </div>
                        <div className="text-center mt-6">
                            <p className="text-xs text-[#556b5d] font-bold">中央カイロプラクティック院 枚方</p>
                            <p className="text-lg font-bold text-[#2C3E35] mt-1">院長 鍋島 彰吾</p>
                        </div>
                    </div>

                    <div className="w-full md:w-2/3 space-y-6">
                        <h2 className="text-2xl font-bold text-[#38A182] border-b pb-4 border-[#E8F0E4] flex items-center gap-2">
                            <MessageCircle className="w-6 h-6" />はじめまして
                        </h2>
                        <div className="text-[#2C3E35] leading-loose space-y-4">
                            <p>
                                中央カイロプラクティック院 枚方院長の鍋島です。<br />
                                私自身も過去に病気やけがで悩まされ、「どこに行ってもよくならない」と悩む方の力になりたいと想いこの道を志しました。
                            </p>
                            <p>
                                患者様の悩みは一人一人違います。<br />
                                身体の痛みだけでなく、長引く不調や、自律神経の乱れ、心のストレスからくる症状まで、当院では心と身体を一つとして捉え、根本からの改善を目指します。
                            </p>
                            <p className="font-bold text-[#38A182]">
                                お気軽になんでもご相談ください。<br />
                                あなたの健康と笑顔を、ずっと見守る存在でありたいと願っています。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
