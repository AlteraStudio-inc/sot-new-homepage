import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Symptoms() {
    const symptoms = [
        { title: "慢性的な肩こり", desc: "デスクワークやスマホの使い過ぎによる重い肩こり・首の痛み" },
        { title: "腰痛・ぎっくり腰", desc: "立ち仕事や座りっぱなしからくる慢性腰痛、急な激痛" },
        { title: "自律神経の乱れ", desc: "睡眠の質低下、慢性的な疲労感、原因不明の不調" },
        { title: "頭痛・めまい", desc: "後頭部の重さ、定期的なズキズキとした痛みやふらつき" },
        { title: "産後骨盤矯正", desc: "出産後の骨盤の開き、体型の崩れ、育児による身体の痛み" },
        { title: "姿勢・猫背改善", desc: "周囲から指摘される姿勢の悪さ、巻き肩にお悩みの方" },
        { title: "手足のしびれ", desc: "坐骨神経痛など、手足のピリピリとした違和感やしびれ" },
        { title: "スポーツ障害", desc: "スポーツ中のケガの予防、パフォーマンス向上、関節痛" },
    ];

    return (
        <div className="w-full bg-stone-50 min-h-screen py-10 md:py-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-3xl md:text-4xl font-bold text-center text-stone-900 mb-4">
                    症状別コラム・解説
                </h1>
                <p className="text-center text-stone-600 mb-12">
                    当院でよくご相談いただく症状とその原因、改善へのアプローチについて解説しています。
                </p>

                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    {symptoms.map((s, idx) => (
                        <Link
                            href={`/symptoms/${idx}`}
                            key={idx}
                            className="bg-white p-6 rounded-xl border border-stone-200 hover:border-emerald-500 hover:shadow-md transition-all group flex flex-col justify-between"
                        >
                            <div>
                                <h2 className="text-xl font-bold text-emerald-800 mb-2 group-hover:text-emerald-700 transition-colors">
                                    {s.title}
                                </h2>
                                <p className="text-sm text-stone-600 leading-relaxed mb-4">
                                    {s.desc}
                                </p>
                            </div>
                            <div className="flex items-center justify-end text-emerald-600 font-medium text-sm">
                                詳しく見る <ChevronRight className="w-4 h-4 ml-1" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
