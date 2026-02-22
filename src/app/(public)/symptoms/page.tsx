import { prisma } from "@/lib/prisma";
import { Activity, Bird } from "lucide-react";

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
                    <div className="space-y-12">
                        {symptoms.map((symptom) => (
                            <div key={symptom.id} className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-[#E8F0E4]">
                                <h2 className="text-2xl font-bold text-[#38A182] mb-6 flex items-center gap-2 border-b border-[#E8F0E4] pb-4">
                                    <Activity className="w-6 h-6" /> {symptom.title}
                                </h2>
                                <div className="text-[#2C3E35] leading-loose text-base">
                                    <div dangerouslySetInnerHTML={{ __html: symptom.content }} />
                                </div>
                            </div>
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
