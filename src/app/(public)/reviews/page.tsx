import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Bird, MessageCircle, User } from "lucide-react";
import * as motion from "framer-motion/client";

export const dynamic = "force-dynamic";

export default async function ReviewsPage() {
    const reviews = await prisma.content.findMany({
        where: { type: 'review', is_published: true },
        orderBy: { created_at: 'desc' },
    });

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="w-full bg-[#FAF9F5] min-h-screen text-[#2C3E35] overflow-hidden">
            <div className="bg-[#E8F0E4] py-16 md:py-24 text-center relative overflow-hidden">
                <motion.div animate={{ y: [0, -10, 0], rotate: [12, 15, 12] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute top-10 right-10 z-0">
                    <Bird className="text-[#38A182] w-12 h-12 opacity-80 mix-blend-multiply flex transform scale-x-[-1]" />
                </motion.div>
                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-[#2C3E35] mb-4">お喜びの声</motion.h1>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-[#556b5d]">当院で施術を受けられた患者様の声をご紹介します。</motion.p>
            </div>

            <motion.div initial="hidden" animate="visible" variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }} className="container mx-auto px-4 max-w-4xl py-16 md:py-24">
                {reviews.length > 0 ? (
                    <div className="space-y-12">
                        {reviews.map((review) => (
                            <motion.div variants={fadeInUp} key={review.id} className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-[#E8F0E4] relative group">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-[#E8F0E4] rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
                                <div className="absolute top-0 left-8 -translate-y-1/2 w-12 h-12 bg-[#38A182] rounded-full flex items-center justify-center text-white text-3xl font-serif">“</div>
                                <h2 className="text-xl font-bold text-[#38A182] mb-6 flex items-center gap-2 pl-4">
                                    <User className="w-5 h-5" /> {review.title}
                                </h2>
                                <div className="text-[#556b5d] leading-loose text-sm md:text-base pl-4 pb-4">
                                    <div dangerouslySetInnerHTML={{ __html: review.content }} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <motion.div variants={fadeInUp} className="text-center text-[#556b5d] py-20 bg-white rounded-[2rem] border border-[#E8F0E4] shadow-sm">
                        <MessageCircle className="w-12 h-12 mx-auto mb-4 text-[#A2Cbb5] opacity-50" />
                        <p>現在、お客様の声は登録されていません。</p>
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
}
