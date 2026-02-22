import { prisma } from "@/lib/prisma";
import { format } from "date-fns";

export default async function ReviewsPage() {
    const reviews = await prisma.content.findMany({
        where: { type: "review", is_published: true },
        orderBy: { created_at: "desc" },
    });

    return (
        <div className="w-full bg-stone-50 min-h-screen py-10 md:py-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">患者様の声・口コミ</h1>
                    <p className="text-stone-600">当院の施術を受けた皆様からのお喜びの声をご紹介します。</p>
                </div>

                {reviews.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-stone-100">
                        <p className="text-stone-500">現在公開されている口コミはありません。</p>
                    </div>
                ) : (
                    <div className="space-y-8">
                        {reviews.map((review) => (
                            <div key={review.id} className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-bl-full -mr-12 -mt-12 z-0"></div>
                                <div className="relative z-10">
                                    <h2 className="text-xl font-bold text-stone-900 mb-2">{review.title}</h2>
                                    <div className="flex items-center text-xs text-stone-400 mb-6">
                                        {format(review.created_at, "yyyy年MM月dd日")}
                                    </div>

                                    <div className="prose prose-stone prose-sm sm:prose-base max-w-none text-stone-700 whitespace-pre-wrap">
                                        {review.content}
                                    </div>

                                    <div className="mt-6 pt-4 border-t border-stone-100 text-xs text-stone-400">
                                        ※施術の感想には個人差があり、効果を保証するものではありません。
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
