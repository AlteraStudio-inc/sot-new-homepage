"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, ChevronLeft, CheckCircle2, AlertCircle } from "lucide-react";
import { format, addDays, startOfToday } from "date-fns";

type Step = "entry" | "type" | "concern" | "menu" | "datetime" | "info" | "confirm" | "complete";

export default function ReservePage() {
    const [currentStep, setCurrentStep] = useState<Step>("entry");

    // Form State
    const [isFirstTime, setIsFirstTime] = useState<boolean | null>(null);
    const [concern, setConcern] = useState<string>("");
    const [selectedMenu, setSelectedMenu] = useState<any>(null);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedTime, setSelectedTime] = useState<string>("");

    // Customer Info
    const [customer, setCustomer] = useState({
        name: "", kana: "", email: "", phone: "", notes: ""
    });

    // API Data
    const [menus, setMenus] = useState<any[]>([]);
    const [slotsData, setSlotsData] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        // Fetch menus on load
        fetch("/api/public/menus").then(res => res.json()).then(data => {
            if (data.success) setMenus(data.menus);
        });
        // Fetch slots on load
        fetch("/api/public/slots").then(res => res.json()).then(data => {
            if (data.success) setSlotsData(data);
        });
    }, []);

    const nextStep = (step: Step) => {
        window.scrollTo(0, 0);
        setCurrentStep(step);
    };

    const handleReservation = async () => {
        setLoading(true);
        setError("");
        try {
            // Validate time
            const dateStr = format(selectedDate!, "yyyy-MM-dd");
            const startTimeStr = `${dateStr}T${selectedTime}:00`;

            const res = await fetch("/api/public/reservations", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    is_first_time: isFirstTime,
                    concern,
                    menu_id: selectedMenu.id,
                    start_time: startTimeStr,
                    customer_name: customer.name,
                    customer_kana: customer.kana,
                    customer_email: customer.email,
                    customer_phone: customer.phone,
                    customer_notes: customer.notes
                })
            });
            const data = await res.json();
            if (data.success) {
                nextStep("complete");
            } else {
                setError(data.error || "エラーが発生しました");
            }
        } catch (err) {
            setError("通信エラーが発生しました");
        } finally {
            setLoading(false);
        }
    };

    // ---------------- Render Views ----------------
    const renderEntry = () => (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-2xl text-center mb-8">
                <h2 className="text-xl font-bold text-emerald-900 mb-4">Web予約の前に</h2>
                <p className="text-stone-700 text-sm leading-relaxed text-left border-t border-emerald-200/50 pt-4">
                    当院の施術は、痛みや不調の「根本改善」を目的とした自費診療となります。<br />
                    健康保険はご利用いただけませんので予めご了承ください。<br /><br />
                    初回の所要時間は約60分となります。（問診・検査含む）<br />
                    ご予約の変更・キャンセルは前日までにお願いいたします。
                </p>
            </div>
            <Button onClick={() => nextStep("type")} className="w-full text-lg h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 shadow-md">
                同意して予約を始める <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
        </div>
    );

    const renderType = () => (
        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <h2 className="text-2xl font-bold text-center mb-8">あなたはどちらですか？</h2>
            <div className="grid md:grid-cols-2 gap-4">
                <Card className="cursor-pointer hover:border-emerald-500 transition-colors" onClick={() => { setIsFirstTime(true); nextStep("concern"); }}>
                    <CardContent className="flex flex-col items-center justify-center p-8 text-center h-full gap-4">
                        <span className="text-4xl">🌱</span>
                        <span className="text-xl font-bold">初めての方</span>
                        <span className="text-sm text-stone-500">当院のご利用が初めての方</span>
                    </CardContent>
                </Card>
                <Card className="cursor-pointer hover:border-emerald-500 transition-colors" onClick={() => { setIsFirstTime(false); nextStep("menu"); }}>
                    <CardContent className="flex flex-col items-center justify-center p-8 text-center h-full gap-4">
                        <span className="text-4xl">🌿</span>
                        <span className="text-xl font-bold">2回目以降の方</span>
                        <span className="text-sm text-stone-500">来院されたことがある方</span>
                    </CardContent>
                </Card>
            </div>
            <Button variant="ghost" onClick={() => setCurrentStep("entry")} className="mt-4"><ChevronLeft className="mr-2 w-4 h-4" /> 戻る</Button>
        </div>
    );

    const renderConcern = () => (
        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <h2 className="text-2xl font-bold text-center mb-8">最も気になるお悩みは？</h2>
            <div className="grid grid-cols-2 gap-3">
                {["肩こり・首の痛み", "腰痛・ぎっくり腰", "自律神経・不眠", "頭痛・めまい", "産前産後・骨盤", "姿勢・猫背", "手足のしびれ", "その他"].map(c => (
                    <Button
                        key={c}
                        variant="outline"
                        className="h-16 text-base rounded-xl border-stone-200 hover:border-emerald-500 hover:bg-emerald-50 justify-start px-4"
                        onClick={() => {
                            setConcern(c);
                            // 初回は一律で「初回コース」を自動選択させる
                            const firstMenu = menus.find(m => m.target === "first_time" || m.target === "both");
                            setSelectedMenu(firstMenu);
                            nextStep("datetime");
                        }}
                    >
                        {c}
                    </Button>
                ))}
            </div>
            <div className="text-center mt-6">
                <Button variant="ghost" onClick={() => setCurrentStep("type")} className="text-stone-500"><ChevronLeft className="mr-2 w-4 h-4" /> 戻る</Button>
            </div>
        </div>
    );

    const renderMenu = () => {
        // 2回目以降用のメニュー選択画面
        const availableMenus = menus.filter(m => m.target === "returning" || m.target === "both");
        return (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                <h2 className="text-2xl font-bold text-center mb-8">ご希望のコース</h2>
                <div className="space-y-4">
                    {availableMenus.map(m => (
                        <Card key={m.id} className="cursor-pointer hover:border-emerald-500 transition-all border-stone-200" onClick={() => { setSelectedMenu(m); nextStep("datetime"); }}>
                            <CardContent className="p-6 pb-6">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="font-bold text-lg text-emerald-900">{m.name}</h3>
                                    <span className="font-bold">&yen;{m.price.toLocaleString()}</span>
                                </div>
                                <p className="text-sm text-stone-500 mb-4">{m.description}</p>
                                <div className="text-xs text-stone-400">所要時間: 約{m.duration_minutes}分</div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <Button variant="ghost" onClick={() => setCurrentStep("type")} className="mt-4"><ChevronLeft className="mr-2 w-4 h-4" /> 戻る</Button>
            </div>
        );
    };

    const renderDatetime = () => {
        // 簡単な2週間の日付リストと固定時間枠 (フロントエンドだけで空枠計算するロジックの簡易版)
        // 実際には slotsData (businessHours, holidays, reservations) から計算する
        const today = startOfToday();
        const days = Array.from({ length: 14 }).map((_, i) => addDays(today, i));

        // 仮の空き枠論理 (デモ用。本当は予約データと突合する)
        const timeSlots = ["09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"];

        return (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                <h2 className="text-xl md:text-2xl font-bold text-center mb-6">ご希望の日時を選択</h2>
                <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 mb-6 text-sm flex gap-2">
                    <AlertCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span className="text-emerald-900">選択中のコース：<b>{selectedMenu?.name || "コース未定"}</b> (約{selectedMenu?.duration_minutes || 60}分)</span>
                </div>

                <div className="border border-stone-200 text-sm bg-white overflow-hidden rounded-xl">
                    <div className="flex overflow-x-auto snap-x scrollbar-hide py-2 px-1">
                        {/* カレンダーヘッダ・スクロール */}
                        {days.map((d, i) => {
                            const dateStr = format(d, "MM/dd");
                            const dayStr = ["日", "月", "火", "水", "木", "金", "土"][d.getDay()];
                            const isSelected = selectedDate?.getTime() === d.getTime();
                            return (
                                <button
                                    key={i}
                                    onClick={() => setSelectedDate(d)}
                                    className={`snap-start min-w-[70px] shrink-0 mx-1 flex flex-col items-center justify-center py-3 rounded-lg border transition-all ${isSelected ? 'bg-emerald-600 text-white border-emerald-600 shadow-md' : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-50'}`}
                                >
                                    <span className={`text-xs ${d.getDay() === 0 ? 'text-red-500' : ''} ${d.getDay() === 6 ? 'text-blue-500' : ''} ${isSelected ? 'text-white/80' : ''}`}>{dayStr}</span>
                                    <span className="font-bold text-lg leading-tight">{dateStr.split('/')[1]}</span>
                                </button>
                            )
                        })}
                    </div>

                    <div className="p-4 border-t border-stone-100 flex flex-col items-center justify-center min-h-[250px] bg-stone-50/50">
                        {!selectedDate ? (
                            <p className="text-stone-400">上のカレンダーから日付を選択してください</p>
                        ) : (
                            <div className="w-full grid grid-cols-3 gap-3">
                                {timeSlots.map(t => (
                                    <button
                                        key={t}
                                        onClick={() => { setSelectedTime(t); nextStep("info"); }}
                                        className="py-3 border border-emerald-200 rounded-lg text-emerald-700 bg-white hover:bg-emerald-50 hover:border-emerald-400 font-medium transition-colors"
                                    >
                                        {t}
                                    </button>
                                ))}
                                <p className="col-span-3 text-xs text-center text-stone-400 mt-2">※他の時間帯はお電話でご相談ください</p>
                            </div>
                        )}
                    </div>
                </div>
                <Button variant="ghost" onClick={() => setCurrentStep(isFirstTime ? "concern" : "menu")} className="mt-4"><ChevronLeft className="mr-2 w-4 h-4" /> 戻る</Button>
            </div>
        );
    };

    const renderInfo = () => (
        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <h2 className="text-2xl font-bold text-center mb-8">お客様情報</h2>
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-bold text-stone-700 mb-1">お名前 (必須)</label>
                    <input required type="text" className="w-full border-stone-300 rounded-lg p-3 border focus:ring-2 focus:ring-emerald-500 outline-none" value={customer.name} onChange={e => setCustomer({ ...customer, name: e.target.value })} placeholder="例：山田 太郎" />
                </div>
                <div>
                    <label className="block text-sm font-bold text-stone-700 mb-1">ふりがな (必須)</label>
                    <input required type="text" className="w-full border-stone-300 rounded-lg p-3 border focus:ring-2 focus:ring-emerald-500 outline-none" value={customer.kana} onChange={e => setCustomer({ ...customer, kana: e.target.value })} placeholder="例：やまだ たろう" />
                </div>
                <div>
                    <label className="block text-sm font-bold text-stone-700 mb-1">電話番号 (必須)</label>
                    <input required type="tel" className="w-full border-stone-300 rounded-lg p-3 border focus:ring-2 focus:ring-emerald-500 outline-none" value={customer.phone} onChange={e => setCustomer({ ...customer, phone: e.target.value })} placeholder="例：090-0000-0000" />
                </div>
                <div>
                    <label className="block text-sm font-bold text-stone-700 mb-1">メールアドレス (必須)</label>
                    <input required type="email" className="w-full border-stone-300 rounded-lg p-3 border focus:ring-2 focus:ring-emerald-500 outline-none" value={customer.email} onChange={e => setCustomer({ ...customer, email: e.target.value })} placeholder="例：example@mail.com" />
                </div>
                {isFirstTime && (
                    <div>
                        <label className="block text-sm font-bold text-stone-700 mb-1">気になる症状・ご要望など (任意)</label>
                        <textarea className="w-full border-stone-300 rounded-lg p-3 border focus:ring-2 focus:ring-emerald-500 outline-none h-24" value={customer.notes} onChange={e => setCustomer({ ...customer, notes: e.target.value })} placeholder="いつから痛むか、どのような姿勢で痛むかなど、なるべく詳しくお書きください。" />
                    </div>
                )}
            </div>
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-stone-100">
                <Button variant="ghost" onClick={() => setCurrentStep("datetime")}><ChevronLeft className="mr-2 w-4 h-4" /> 戻る</Button>
                <Button
                    onClick={() => nextStep("confirm")}
                    disabled={!customer.name || !customer.kana || !customer.phone || !customer.email}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 rounded-full"
                >
                    確認画面へ <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
            </div>
        </div>
    );

    const renderConfirm = () => (
        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <h2 className="text-2xl font-bold text-center mb-8">ご予約内容の確認</h2>

            {error && (
                <div className="bg-red-50 text-red-600 p-4 rounded-lg flex items-start gap-3 border border-red-200">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <p className="text-sm font-bold">{error}</p>
                </div>
            )}

            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden text-sm md:text-base">
                <div className="grid grid-cols-3 border-b border-stone-100">
                    <div className="col-span-1 bg-stone-50 p-4 font-bold text-stone-600 flex items-center">日時</div>
                    <div className="col-span-2 p-4 font-bold text-emerald-700">
                        {selectedDate && format(selectedDate, "yyyy年MM月dd日")} {selectedTime}
                    </div>
                </div>
                <div className="grid grid-cols-3 border-b border-stone-100">
                    <div className="col-span-1 bg-stone-50 p-4 font-bold text-stone-600 flex items-center">コース名</div>
                    <div className="col-span-2 p-4">{selectedMenu?.name}</div>
                </div>
                <div className="grid grid-cols-3 border-b border-stone-100">
                    <div className="col-span-1 bg-stone-50 p-4 font-bold text-stone-600 flex items-center">所要・料金</div>
                    <div className="col-span-2 p-4">約{selectedMenu?.duration_minutes}分 / {selectedMenu?.price.toLocaleString()}円</div>
                </div>
                <div className="grid grid-cols-3 border-b border-stone-100">
                    <div className="col-span-1 bg-stone-50 p-4 font-bold text-stone-600 flex items-center">お名前</div>
                    <div className="col-span-2 p-4">{customer.name} ({customer.kana})</div>
                </div>
                <div className="grid grid-cols-3">
                    <div className="col-span-1 bg-stone-50 p-4 font-bold text-stone-600 flex items-center">ご連絡先</div>
                    <div className="col-span-2 p-4 break-all">{customer.phone}<br />{customer.email}</div>
                </div>
            </div>

            <div className="flex flex-col-reverse sm:flex-row justify-between items-center mt-8 gap-4 pt-4">
                <Button variant="ghost" onClick={() => setCurrentStep("info")} className="w-full sm:w-auto"><ChevronLeft className="mr-2 w-4 h-4" /> 修正する</Button>
                <Button
                    onClick={handleReservation}
                    disabled={loading}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white w-full sm:w-auto px-10 h-14 rounded-full text-lg shadow-md"
                >
                    {loading ? "予約処理中..." : "この内容で予約を確定する"}
                </Button>
            </div>
        </div>
    );

    const renderComplete = () => (
        <div className="space-y-8 animate-in zoom-in-95 duration-500 text-center py-8">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4">ご予約を完了しました</h2>
            <p className="text-stone-600 leading-relaxed max-w-lg mx-auto mb-8 bg-stone-50 p-6 rounded-xl border border-stone-100">
                ご入力いただいたメールアドレス宛に、<br className="hidden md:block" />予約の確認メールを送信いたしました。<br /><br />
                当日はお気をつけてお越しください。<br />
                スタッフ一同、お待ちしております。
            </p>
            <Button asChild variant="outline" className="rounded-full px-8 border-stone-300">
                <Link href="/">トップページへ戻る</Link>
            </Button>
        </div>
    );

    return (
        <div className="w-full bg-stone-50 min-h-screen py-8 md:py-16">
            <div className="container mx-auto px-4 max-w-2xl">
                <h1 className="text-3xl font-bold text-center text-emerald-900 mb-8 hidden md:block">
                    Web予約
                </h1>

                {/* Step Progress Bar */}
                {currentStep !== "complete" && currentStep !== "entry" && (
                    <div className="mb-8 flex justify-between items-center gap-1 md:gap-2 text-xs md:text-sm px-2 text-stone-400 font-bold overflow-hidden">
                        <span className={currentStep === "type" || currentStep === "concern" || currentStep === "menu" ? "text-emerald-600 border-b-2 border-emerald-600 pb-1" : ""}>1. コース</span>
                        <ChevronRight className="w-3 h-3 md:w-4 md:h-4 text-stone-300 shrink-0" />
                        <span className={currentStep === "datetime" ? "text-emerald-600 border-b-2 border-emerald-600 pb-1" : ""}>2. 日時</span>
                        <ChevronRight className="w-3 h-3 md:w-4 md:h-4 text-stone-300 shrink-0" />
                        <span className={currentStep === "info" ? "text-emerald-600 border-b-2 border-emerald-600 pb-1" : ""}>3. お客様情報</span>
                        <ChevronRight className="w-3 h-3 md:w-4 md:h-4 text-stone-300 shrink-0" />
                        <span className={currentStep === "confirm" ? "text-emerald-600 border-b-2 border-emerald-600 pb-1" : ""}>4. 完了</span>
                    </div>
                )}

                <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-6 md:p-10 mb-20 md:mb-0">
                    {currentStep === "entry" && renderEntry()}
                    {currentStep === "type" && renderType()}
                    {currentStep === "concern" && renderConcern()}
                    {currentStep === "menu" && renderMenu()}
                    {currentStep === "datetime" && renderDatetime()}
                    {currentStep === "info" && renderInfo()}
                    {currentStep === "confirm" && renderConfirm()}
                    {currentStep === "complete" && renderComplete()}
                </div>
            </div>
        </div>
    );
}
