import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Bird, MessageCircle, User } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function ReviewsPage() {
    const reviews = await prisma.content.findMany({
        where: { type: 'review', is_published: true },
        orderBy: { created_at: 'desc' },
    });

    return (
        <div className="w-full bg-[#FAF9F5] min-h-screen text-[#2C3E35]">
            <div className="bg-[#E8F0E4] py-16 md:py-24 text-center relative overflow-hidden">
                <Bird className="absolute top-10 right-10 text-[#38A182] w-12 h-12 opacity-80 mix-blend-multiply rotate-12 transform scale-x-[-1]" />
                <h1 className="text-3xl md:text-4xl font-bold text-[#2C3E35] mb-4">お喜びの声</h1>
                <p className="text-[#556b5d]">当院で施術を受けられた患者様の声をご紹介します。</p>
            </div>

            <div className="container mx-auto px-4 max-w-4xl py-16 md:py-24">
                {reviews.length > 0 ? (
                    <div className="space-y-12">
                        {reviews.map((review) => (
                            <div key={review.id} className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-[#E8F0E4] relative">
                                <div className="absolute top-0 left-8 -translate-y-1/2 w-12 h-12 bg-[#38A182] rounded-full flex items-center justify-center text-white text-3xl font-serif">“</div>
                                <h2 className="text-xl font-bold text-[#38A182] mb-6 flex items-center gap-2 pl-4">
                                    <User className="w-5 h-5" /> {review.title}
                                </h2>
                                <div className="text-[#556b5d] leading-loose text-sm md:text-base pl-4 pb-4">
                                    <div dangerouslySetInnerHTML={{ __html: review.content }} />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center text-[#556b5d] py-20 bg-white rounded-[2rem] border border-[#E8F0E4] shadow-sm">
                        <MessageCircle className="w-12 h-12 mx-auto mb-4 text-[#A2Cbb5] opacity-50" />
                        <p>現在、お客様の声は登録されていません。</p>
                    </div>
                )}
            </div>
        </div>
    );
}
