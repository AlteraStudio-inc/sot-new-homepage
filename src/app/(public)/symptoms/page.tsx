import { prisma } from "@/lib/prisma";
import { Activity, Bird, ChevronRight } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function SymptomsPage() {
    const symptoms = await prisma.content.findMany({
        where: { type: 'symptom', is_published: true },
        orderBy: { created_at: 'desc' },
    });

    return (
        <div className="w-full bg-[#FAF9F5] min-h-screen text-[#2C3E35]">
            <div className="bg-[#E8F0E4] py-16 md:py-24 text-center relative overflow-hidden">
                <Bird className="absolute bottom-10 left-10 text-[#38A182] w-12 h-12 opacity-80 mix-blend-multiply rotate-12" />
                <h1 className="text-3xl md:text-4xl font-bold text-[#2C3E35] mb-4">症状別のお悩み</h1>
                <p className="text-[#556b5d]">肩こり・腰痛など、症状に合わせた当院のアプローチをご紹介します。</p>
            </div>

            <div className="container mx-auto px-4 max-w-4xl py-16 md:py-24">
                {symptoms.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {symptoms.map((symptom) => (
                            <Link key={symptom.id} href={`/symptoms/${symptom.slug || symptom.id}`} className="block group h-full">
                                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[#E8F0E4] group-hover:shadow-md group-hover:border-[#38A182] transition-all h-full flex flex-col justify-between">
                                    <div>
                                        <h2 className="text-xl font-bold text-[#2C3E35] mb-4 flex items-center gap-3">
                                            <Activity className="w-6 h-6 text-[#38A182]" /> {symptom.title}
                                        </h2>
                                        <p className="text-[#556b5d] line-clamp-2 text-sm leading-relaxed mb-6">
                                            {symptom.content.replace(/<[^>]*>?/gm, '').substring(0, 80)}...
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-end text-[#A2CBB5] group-hover:text-[#38A182] font-bold text-sm transition-colors">
                                        詳しく見る <ChevronRight className="w-4 h-4 ml-1" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="text-center text-[#556b5d] py-20 bg-white rounded-[2rem] border border-[#E8F0E4] shadow-sm">
                        <Activity className="w-12 h-12 mx-auto mb-4 text-[#A2Cbb5] opacity-50" />
                        <p>現在、症状別コラムは登録されていません。</p>
                    </div>
                )}
            </div>
        </div>
    );
}
