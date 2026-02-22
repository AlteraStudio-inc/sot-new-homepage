import { prisma } from "@/lib/prisma";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, Bird } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function FaqPage() {
    const faqs = await prisma.content.findMany({
        where: { type: 'faq', is_published: true },
        orderBy: { created_at: 'asc' },
    });

    return (
        <div className="w-full bg-[#FAF9F5] min-h-screen text-[#2C3E35]">
            <div className="bg-[#E8F0E4] py-16 md:py-24 text-center relative overflow-hidden">
                <Bird className="absolute bottom-10 right-10 text-[#38A182] w-12 h-12 opacity-80 mix-blend-multiply -rotate-12 transform scale-x-[-1]" />
                <h1 className="text-3xl md:text-4xl font-bold text-[#2C3E35] mb-4">よくあるご質問</h1>
                <p className="text-[#556b5d]">患者様から多く寄せられる質問にお答えします。</p>
            </div>

            <div className="container mx-auto px-4 max-w-3xl py-16 md:py-24">
                <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-[#E8F0E4]">
                    {faqs.length > 0 ? (
                        <Accordion type="single" collapsible className="w-full">
                            {faqs.map((faq) => (
                                <AccordionItem key={faq.id} value={faq.id} className="border-b border-[#E8F0E4] last:border-0 py-2">
                                    <AccordionTrigger className="text-lg font-bold hover:text-[#38A182] hover:no-underline text-left flex gap-4">
                                        <span className="text-[#38A182] font-serif shrink-0">Q.</span>
                                        <span>{faq.title}</span>
                                    </AccordionTrigger>
                                    <AccordionContent className="text-[#556b5d] leading-loose text-base pb-6 pt-2 pl-8 flex gap-4">
                                        <span className="text-[#d97706] font-serif shrink-0 font-bold">A.</span>
                                        <div>
                                            <div dangerouslySetInnerHTML={{ __html: faq.content }} />
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    ) : (
                        <div className="text-center text-[#556b5d] py-10">
                            <HelpCircle className="w-12 h-12 mx-auto mb-4 text-[#A2Cbb5] opacity-50" />
                            <p>現在、よくある質問は登録されていません。</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
