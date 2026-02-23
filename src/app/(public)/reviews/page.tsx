import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Bird, MessageCircle, User, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export const dynamic = "force-dynamic";

export default async function ReviewsPage() {
    const reviews = await prisma.content.findMany({
        where: { type: 'review', is_published: true },
        orderBy: { created_at: 'desc' },
    });

    return (
        <div className="w-full bg-[#FAF9F5] min-h-screen text-[#2C3E35] overflow-hidden">
            <div className="bg-[#E8F0E4] py-16 md:py-24 text-center relative overflow-hidden">
                <div className="absolute top-10 right-10 z-0 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                    <Bird className="text-[#38A182] w-12 h-12 opacity-80 mix-blend-multiply flex transform scale-x-[-1]" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-[#2C3E35] mb-4 animate-fade-in-up">お喜びの声</h1>
                <p className="text-[#556b5d] animate-fade-in-up" style={{ animationDelay: '100ms' }}>当院で施術を受けられた患者様の声をご紹介します。</p>
            </div>

            <div className="container mx-auto px-4 max-w-4xl py-16 md:py-24 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                {reviews.length > 0 ? (
                    <div className="grid grid-cols-1 gap-12">
                        {reviews.map((review) => (
                            <div key={review.id} className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-[#E8F0E4] relative group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FAF9F5] rounded-bl-full rounded-tr-[2rem] -z-10 group-hover:bg-[#E8F0E4] transition-colors duration-500"></div>
                                <div className="absolute -top-6 left-8 w-12 h-12 bg-[#38A182] rounded-full flex items-center justify-center text-white text-3xl font-serif shadow-md border-4 border-white">“</div>
                                <div className="mt-4 mb-6 pb-6 border-b border-[#E8F0E4]">
                                    <h2 className="text-xl md:text-2xl font-bold text-[#2C3E35] leading-snug">
                                        {review.title}
                                    </h2>
                                </div>
                                <div className="text-[#556b5d] leading-loose text-base md:text-lg prose prose-emerald max-w-none">
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

                <div className="mt-20 text-center bg-[#E8F0E4] rounded-[2rem] p-8 md:p-12 shadow-sm animate-fade-in-up">
                    <h3 className="text-xl md:text-2xl font-bold mb-6 text-[#2C3E35]">
                        <span className="text-[#38A182]">あなたも</span>当院で改善の第一歩を踏み出しませんか？
                    </h3>
                    <p className="text-[#556b5d] mb-8 leading-relaxed max-w-2xl mx-auto">
                        長年の痛みや不調でお悩みの方も、まずは一度ご相談ください。<br className="hidden md:block" />
                        一人ひとりの症状に合わせた丁寧な施術で、根本改善をサポートいたします。
                    </p>
                    <Button asChild size="lg" className="bg-[#38A182] hover:bg-[#2b7a63] text-white rounded-full px-8 h-16 text-xl shadow-lg w-full md:w-auto hover:scale-105 transition-transform">
                        <Link href={siteConfig.links.reserve}><CalendarCheck className="mr-3 h-6 w-6" /> 初回ご予約はこちら</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
