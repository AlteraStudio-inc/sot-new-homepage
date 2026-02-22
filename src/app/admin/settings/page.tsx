"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AdminSettings() {
    const [hours, setHours] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        fetch("/api/public/business-hours")
            .then(res => res.json())
            .then(data => {
                if (data.success && data.businessHours) {
                    setHours(data.businessHours.sort((a: any, b: any) => a.day_of_week - b.day_of_week));
                }
            })
            .finally(() => setLoading(false));
    }, []);

    const handleSave = async () => {
        setSaving(true);
        try {
            const res = await fetch("/api/admin/business-hours", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ businessHours: hours })
            });
            if (!res.ok) throw new Error();
            alert("営業時間を保存しました");
        } catch {
            alert("保存に失敗しました");
        } finally {
            setSaving(false);
        }
    };

    const updateHour = (index: number, field: string, value: any) => {
        const newHours = [...hours];
        newHours[index] = { ...newHours[index], [field]: value };
        setHours(newHours);
    };

    const dayNames = ["日", "月", "火", "水", "木", "金", "土"];

    if (loading) return <div className="p-8">読み込み中...</div>;

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-stone-800">営業時間・休日設定</h1>
                <Button onClick={handleSave} disabled={saving} className="bg-emerald-600 hover:bg-emerald-700">
                    {saving ? "保存中..." : "設定を保存する"}
                </Button>
            </div>

            <Card className="bg-white border-stone-200">
                <CardHeader>
                    <CardTitle className="text-lg">基本営業時間</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {hours.map((h, i) => (
                            <div key={h.id} className="flex items-center gap-4 p-4 border rounded-lg bg-stone-50">
                                <div className={`w-8 font-bold ${h.day_of_week === 0 ? 'text-red-500' : ''} ${h.day_of_week === 6 ? 'text-blue-500' : ''}`}>
                                    {dayNames[h.day_of_week]}
                                </div>

                                <label className="flex items-center space-x-2 text-sm cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={!h.is_closed}
                                        onChange={e => updateHour(i, "is_closed", !e.target.checked)}
                                        className="w-4 h-4 text-emerald-600 rounded border-stone-300 focus:ring-emerald-600"
                                    />
                                    <span>営業する</span>
                                </label>

                                {!h.is_closed ? (
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="time"
                                            value={h.open_time}
                                            onChange={e => updateHour(i, "open_time", e.target.value)}
                                            className="border border-stone-300 rounded p-1 text-sm bg-white"
                                        />
                                        <span>〜</span>
                                        <input
                                            type="time"
                                            value={h.close_time}
                                            onChange={e => updateHour(i, "close_time", e.target.value)}
                                            className="border border-stone-300 rounded p-1 text-sm bg-white"
                                        />
                                    </div>
                                ) : (
                                    <div className="text-stone-400 text-sm italic">定休日</div>
                                )}
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
