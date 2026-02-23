import { Bird, MapPin, Clock, Phone, Car } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function AccessPage() {
    return (
        <div className="w-full bg-[#FAF9F5] min-h-screen text-[#2C3E35] overflow-hidden">
            <div className="bg-[#E8F0E4] py-16 md:py-24 text-center relative overflow-hidden">
                <div className="absolute top-10 left-10 z-0 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                    <Bird className="text-[#38A182] w-12 h-12 opacity-80 mix-blend-multiply" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-[#2C3E35] mb-4 animate-fade-in-up">アクセス</h1>
                <p className="text-[#556b5d] animate-fade-in-up" style={{ animationDelay: '100ms' }}>{siteConfig.name}へのご案内</p>
            </div>

            <div className="container mx-auto px-4 max-w-4xl py-16 md:py-24 space-y-12 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-[#E8F0E4]">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-[#38A182] border-b pb-4 border-[#E8F0E4]">店舗情報</h2>

                            <div className="space-y-4 text-[#2C3E35] leading-loose">
                                <div>
                                    <p className="font-bold flex items-center gap-2"><MapPin className="text-[#38A182] w-5 h-5" /> 住所</p>
                                    <p className="ml-7">{siteConfig.clinic.address.postal}<br />{siteConfig.clinic.address.text}</p>
                                </div>
                                <div>
                                    <p className="font-bold flex items-center gap-2"><Phone className="text-[#38A182] w-5 h-5" /> 電話番号</p>
                                    <p className="ml-7">{siteConfig.clinic.phone}</p>
                                </div>
                                <div>
                                    <p className="font-bold flex items-center gap-2"><Clock className="text-[#38A182] w-5 h-5" /> 受付時間・定休日</p>
                                    <div className="ml-7 mt-2">
                                        <p>受付時間：{siteConfig.clinic.hours.text}</p>
                                        <p>定休日：<span className="text-red-500 font-bold">{siteConfig.clinic.closed}</span></p>
                                    </div>
                                </div>
                                <div>
                                    <p className="font-bold flex items-center gap-2"><Car className="text-[#38A182] w-5 h-5" /> アクセス</p>
                                    <p className="ml-7">{siteConfig.clinic.address.access}<br />{siteConfig.clinic.parking}</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-full min-h-[300px] bg-[#E8F0E4] rounded-2xl relative overflow-hidden border-4 border-[#FAF9F5] shadow-inner flex items-center justify-center text-[#556b5d]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.60155099309!2d135.6543202!3d34.8159187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60011e03bfc54885%3A0xe54c7d018d96cf28!2z44CSNTczLTAwMjIg5aSn6Ziq5bqc5p6a5pa55biC5a6u5LmL6Ziq77yT5LiB55uu77yV4oiS77yU77yQ!5e0!3m2!1sja!2sjp!4v1700000000000!5m2!1sja!2sjp"
                                width="100%"
                                height="100%"
                                style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
