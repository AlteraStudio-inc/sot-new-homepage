"use client";

import { Sparkles, Bird, HeartPulse } from "lucide-react";
import { motion } from "framer-motion";

export default function ServicePage() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="w-full bg-[#FAF9F5] min-h-screen text-[#2C3E35] overflow-hidden">
            <div className="bg-[#E8F0E4] py-16 md:py-24 text-center relative overflow-hidden">
                <motion.div animate={{ y: [0, -10, 0], rotate: [12, 15, 12] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute top-10 left-10 z-0">
                    <Bird className="text-[#38A182] w-12 h-12 opacity-80 mix-blend-multiply" />
                </motion.div>
                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-[#2C3E35] mb-4">施術案内</motion.h1>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-[#556b5d]">当院の独自の施術アプローチについて</motion.p>
            </div>

            <motion.div initial="hidden" animate="visible" variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }} className="container mx-auto px-4 max-w-4xl py-16 md:py-24 space-y-16">

                {/* 脳幹療法 */}
                <motion.section variants={fadeInUp} className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-[#E8F0E4] relative group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#E8F0E4] rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
                    <h2 className="text-2xl font-bold text-[#38A182] mb-6 flex items-center gap-2 border-b border-[#E8F0E4] pb-4">
                        <HeartPulse className="w-6 h-6" /> ソフトカイロ(SOT)・脳幹療法
                    </h2>
                    <div className="space-y-4 text-[#2C3E35] leading-loose">
                        <p>
                            ボキボキしない施術なので、痛みも少なく、女性の方はもちろんお子様～ご高齢の方まで対応できます。 施術中に眠ってしまう方もいらっしゃるくらい、ソフトで気持ち良い施術です。 国家資格保有の院長が常に担当いたします。
                        </p>
                        <p>
                            頭と首の連結部分のストレスが、寝ているだけで整う脳幹療法を行っています。<br />
                            高さを変えられる特殊枕を使用することで、デリケートな部分が重力によって調整されていきます。
                        </p>
                    </div>
                </motion.section>

                {/* メンタルセラピー */}
                <motion.section variants={fadeInUp} className="bg-[#E8F0E4] rounded-[2rem] p-8 md:p-12 shadow-sm border border-[#d2e0cc] relative group overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500 opacity-50"></div>
                    <h2 className="text-2xl font-bold text-[#2C3E35] mb-6 flex items-center gap-2 border-b border-[#c1d1b9] pb-4">
                        <Sparkles className="w-6 h-6 text-[#38A182]" /> メンタルセラピーについて
                    </h2>
                    <div className="space-y-4 text-[#2c3e35] leading-loose relative z-10">
                        <p>
                            悩みや問題の原因が自分の性格や心の弱さが問題だけだと思っていませんか？<br />
                            心が疲れている方は、身体の歪みが出ていることが多いです。身体の歪みを整えることで、心もほぐれていきます。
                        </p>
                        <div className="bg-white p-4 rounded-xl text-sm border-l-4 border-[#38A182]">
                            ※当院のメンタルセラピーはあくまでも首が原因で起こる自律神経バランス障害の患者さんが対象です。 精神科や、心療内科で投薬治療中の方はご対応できない場合がありますので必ず事前にお電話にてご相談ください。
                        </div>
                    </div>
                </motion.section>

                {/* プラズマ療法 */}
                <motion.section variants={fadeInUp} className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-[#E8F0E4] relative group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#E8F0E4] rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
                    <h2 className="text-2xl font-bold text-[#38A182] mb-6 flex items-center gap-2 border-b border-[#E8F0E4] pb-4">
                        <Sparkles className="w-6 h-6" /> プラズマ療法
                    </h2>
                    <div className="space-y-4 text-[#2C3E35] leading-loose">
                        <p>
                            プラズマ療法とは、大量の電子（プラズマ）と一酸化窒素（NO）を身体に取り込むことで、ストレスや疲労などにより電子不足になった細胞に電子を与え、老化原因である活性酸素を発生することなく、生命活動エネルギーを与えて様々な症状改善をサポートする療法です。
                        </p>
                    </div>
                </motion.section>
            </motion.div>
        </div>
    );
}
