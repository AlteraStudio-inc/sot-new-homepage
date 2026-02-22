import Image from "next/image";

export default function Concept() {
    return (
        <div className="w-full bg-stone-50 min-h-screen py-10 md:py-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">当院の考え方</h1>
                    <p className="text-stone-600">「一時しのぎ」ではない、「根本改善」を目指す独自のメソッド</p>
                </div>

                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100 flex flex-col md:flex-row mb-12">
                    <div className="md:w-1/2 relative min-h-[300px]">
                        <Image
                            src="/placeholder-concept1.jpg"
                            alt="丁寧なカウンセリング"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                        <h2 className="text-2xl font-bold text-emerald-800 mb-4">1. 痛みの「原因」を徹底究明</h2>
                        <p className="text-stone-700 leading-relaxed">
                            痛みの出ている場所に原因があるとは限りません。当院では独自の検査法を用い、全身のバランス・関節の動き・生活習慣から痛みの本当の原因を探り出します。
                        </p>
                    </div>
                </div>

                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100 flex flex-col md:flex-row-reverse mb-12">
                    <div className="md:w-1/2 relative min-h-[300px]">
                        <Image
                            src="/placeholder-concept2.jpg"
                            alt="痛みの少ない施術"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                        <h2 className="text-2xl font-bold text-emerald-800 mb-4">2. バキバキしない優しい施術</h2>
                        <p className="text-stone-700 leading-relaxed">
                            強い力で押したり、骨を無理に鳴らすような施術は行いません。非常にソフトで安全な刺激を入れることで、人間が本来持っている自然治癒力を最大限に引き出します。
                        </p>
                    </div>
                </div>

                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100 flex flex-col md:flex-row mb-12">
                    <div className="md:w-1/2 relative min-h-[300px]">
                        <Image
                            src="/placeholder-concept3.jpg"
                            alt="アフターケア指導"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                        <h2 className="text-2xl font-bold text-emerald-800 mb-4">3. 再発させない体づくり</h2>
                        <p className="text-stone-700 leading-relaxed">
                            施術が終わったら完了ではありません。正しい姿勢の維持や簡単で効果的なストレッチなど、日常生活でのセルフケアを指導し、「痛みが戻らない体」を一緒につくりあげます。
                        </p>
                    </div>
                </div>

                <div className="text-center bg-emerald-50 rounded-2xl p-8 md:p-12 border border-emerald-100">
                    <h3 className="text-xl font-bold text-emerald-900 mb-4">私たちの約束</h3>
                    <p className="text-stone-700 leading-relaxed mb-0">
                        私たちは、あなたが痛みや不調によって諦めていた趣味や仕事、健やかな日常を取り戻すために全力を尽くします。少しでも不安なことがあれば、いつでもご相談ください。
                    </p>
                </div>
            </div>
        </div>
    );
}
