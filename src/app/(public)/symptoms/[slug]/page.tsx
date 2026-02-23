import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { Activity, ChevronRight, CalendarCheck } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const symptom = await prisma.content.findFirst({
        where: { type: 'symptom', slug: params.slug, is_published: true },
    });

    if (!symptom) {
        return {
            title: "Not Found",
        };
    }

    return {
        title: `${symptom.title}について | ${siteConfig.name}`,
        description: `${symptom.title}の原因と当院の改善アプローチについて詳しく解説します。`,
    };
}

export default async function SymptomDetailPage({
    params,
}: {
    params: { slug: string };
}) {
    // try to find by slug first, otherwise try by id
    let symptom = await prisma.content.findFirst({
        where: { type: 'symptom', slug: params.slug, is_published: true },
    });

    if (!symptom) {
        symptom = await prisma.content.findFirst({
            where: { type: 'symptom', id: params.slug, is_published: true },
        });
    }

    if (!symptom) {
        notFound();
    }

    return (
        <div className="w-full bg-[#FAF9F5] min-h-screen text-[#2C3E35]">
            <div className="bg-[#E8F0E4] py-16 md:py-24 text-center">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h1 className="text-3xl md:text-4xl font-bold text-[#2C3E35] mb-4 flex items-center justify-center gap-3">
                        <Activity className="w-8 h-8 text-[#38A182]" />
                        {symptom.title}
                    </h1>
                </div>
            </div>

            <div className="container mx-auto px-4 max-w-3xl py-12 md:py-20">
                <article className="bg-white rounded-2xl shadow-sm p-8 md:p-12 mb-12 border border-[#E8F0E4]">
                    <div className="prose prose-emerald max-w-none text-[#2C3E35] leading-loose">
                        <div dangerouslySetInnerHTML={{ __html: symptom.content }} />
                    </div>
                </article>

                <div className="text-center bg-[#E8F0E4] rounded-2xl p-8 md:p-12 mb-12 shadow-sm">
                    <h3 className="text-xl md:text-2xl font-bold mb-6 text-[#2C3E35]">
                        <span className="text-[#38A182]">{symptom.title}</span>でお悩みの方は、<br className="md:hidden" />当院へご相談ください
                    </h3>
                    <p className="text-[#556b5d] mb-8 leading-relaxed">
                        当院では、表面的な症状の緩和だけでなく、根本的な原因となる「脳幹」や「骨盤」の歪みにアプローチします。<br className="hidden md:block" />
                        痛みや不調を我慢せず、まずは一度ご相談ください。
                    </p>
                    <Button asChild size="lg" className="bg-[#38A182] hover:bg-[#2b7a63] text-white rounded-full px-8 h-16 text-xl shadow-lg w-full md:w-auto hover:scale-105 transition-transform">
                        <Link href={siteConfig.links.reserve}><CalendarCheck className="mr-3 h-6 w-6" /> Web予約へ進む</Link>
                    </Button>
                </div>

                <div className="text-center border-t border-[#E8F0E4] pt-8">
                    <Link href="/symptoms" className="text-[#38A182] hover:text-[#2b7a63] flex items-center justify-center gap-1 font-bold transition-colors">
                        症状一覧へ戻る <ChevronRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
