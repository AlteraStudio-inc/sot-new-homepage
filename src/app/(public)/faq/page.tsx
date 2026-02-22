import { prisma } from "@/lib/prisma";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default async function FAQPage() {
    const faqs = await prisma.content.findMany({
        where: { type: "faq", is_published: true },
        orderBy: { created_at: "asc" },
    });

    // Provide some default dummy FAQs if db is empty
    const displayFaqs = faqs.length > 0 ? faqs : [
        { id: "1", title: "健康保険は使えますか？", content: "いいえ、当院の施術はすべて自費診療となっております。保険の制限にとらわれず、根本からの改善を目指すために十分な時間と技術を提供するためです。" },
        { id: "2", title: "バキバキ鳴らすような施術ですか？", content: "いいえ、非常にソフトで痛みのない施術です。女性やご高齢の方、お子様でも安心して受けていただけます。" },
        { id: "3", title: "予約は必要ですか？", content: "はい、当院は「完全予約制」となっております。本サイトのWeb予約、もしくはお電話・LINEよりご予約の上ご来院ください。" },
        { id: "4", title: "駐車場はありますか？", content: "院の前に専用駐車場を3台分ご用意しております。自転車・バイク駐輪場もございます。" },
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: displayFaqs.map(faq => ({
            "@type": "Question",
            name: faq.title,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.content
            }
        }))
    };

    return (
        <div className="w-full bg-stone-50 min-h-screen py-10 md:py-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-16">
                    <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">よくある質問</h1>
                    <p className="text-stone-600">皆様からよくお寄せいただくご質問と回答をまとめました。</p>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-6 md:p-10">
                    <Accordion type="multiple" className="w-full">
                        {displayFaqs.map((faq) => (
                            <AccordionItem key={faq.id} value={faq.id} className="border-stone-200 px-2">
                                <AccordionTrigger className="text-left font-bold text-stone-800 hover:text-emerald-700 md:text-lg">
                                    <span className="flex items-start">
                                        <span className="text-emerald-600 font-black mr-3">Q.</span>
                                        {faq.title}
                                    </span>
                                </AccordionTrigger>
                                <AccordionContent className="text-stone-700 bg-stone-50/50 p-4 rounded-lg mt-2 mb-4 leading-relaxed whitespace-pre-wrap flex items-start">
                                    <span className="text-emerald-600/60 font-black mr-3 text-lg leading-none mt-0.5">A.</span>
                                    <div>{faq.content}</div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

                <div className="mt-12 text-center text-stone-600 text-sm">
                    ここにある質問以外に気になることがございましたら、<br className="md:hidden" />お気軽にお問い合わせください。
                </div>
            </div>
        </div>
    );
}
