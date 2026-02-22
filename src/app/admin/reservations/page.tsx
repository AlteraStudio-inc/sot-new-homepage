"use client";

import { useEffect, useState } from "react";
import { format } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AdminReservations() {
    const [reservations, setReservations] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchReservations = () => {
        setLoading(true);
        fetch("/api/admin/reservations")
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setReservations(data.reservations);
                }
            })
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        fetchReservations();
    }, []);

    const updateStatus = async (id: string, status: string) => {
        if (!confirm(`ステータスを「${status}」に変更しますか？`)) return;
        try {
            const res = await fetch(`/api/admin/reservations/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ status })
            });
            if (res.ok) fetchReservations();
        } catch (e) {
            alert("更新エラー");
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-stone-800">予約管理</h1>
                <Button onClick={fetchReservations} variant="outline" size="sm">更新</Button>
            </div>

            <Card className="bg-white border-stone-200">
                <CardHeader>
                    <CardTitle className="text-lg">すべての予約一覧</CardTitle>
                </CardHeader>
                <CardContent>
                    {loading ? (
                        <p className="text-stone-500 text-sm">読み込み中...</p>
                    ) : reservations.length === 0 ? (
                        <p className="text-stone-500 text-sm">予約はありません</p>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-stone-200 text-stone-500 bg-stone-50">
                                        <th className="py-3 px-4 font-normal whitespace-nowrap">日時</th>
                                        <th className="py-3 px-4 font-normal whitespace-nowrap">ステータス</th>
                                        <th className="py-3 px-4 font-normal whitespace-nowrap">お名前</th>
                                        <th className="py-3 px-4 font-normal whitespace-nowrap">連絡先</th>
                                        <th className="py-3 px-4 font-normal whitespace-nowrap">コース / 悩み</th>
                                        <th className="py-3 px-4 font-normal text-right whitespace-nowrap">操作</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {reservations.map(r => (
                                        <tr key={r.id} className="border-b border-stone-100 hover:bg-stone-50">
                                            <td className="py-3 px-4 font-medium text-stone-700 whitespace-nowrap">
                                                {format(new Date(r.start_time), "yyyy/MM/dd HH:mm")}
                                            </td>
                                            <td className="py-3 px-4 whitespace-nowrap">
                                                {r.status === "pending" && <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs font-bold">未確認</span>}
                                                {r.status === "confirmed" && <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full text-xs font-bold">確定</span>}
                                                {r.status === "cancelled" && <span className="bg-stone-100 text-stone-500 px-2 py-1 rounded-full text-xs font-bold">キャンセル</span>}
                                            </td>
                                            <td className="py-3 px-4 whitespace-nowrap">
                                                <div className="font-bold">{r.customer_name}</div>
                                                <div className="text-xs text-stone-400">{r.customer_kana}</div>
                                            </td>
                                            <td className="py-3 px-4 whitespace-nowrap">
                                                <div>{r.customer_phone}</div>
                                                <div className="text-xs text-stone-500">{r.customer_email}</div>
                                            </td>
                                            <td className="py-3 px-4 min-w-[250px]">
                                                <div className="font-medium text-emerald-700">
                                                    {r.is_first_time ? <span className="bg-emerald-600 text-white px-1 text-[10px] rounded mr-1">新</span> : ""}
                                                    {r.menu.name}
                                                </div>
                                                {r.concern && <div className="text-xs text-stone-500 mt-1">悩み: {r.concern}</div>}
                                                {r.customer_notes && <div className="text-xs text-stone-500 mt-1 bg-white p-1 border rounded line-clamp-2" title={r.customer_notes}>{r.customer_notes}</div>}
                                            </td>
                                            <td className="py-3 px-4 text-right whitespace-nowrap space-x-2">
                                                {r.status === 'pending' && (
                                                    <Button size="sm" onClick={() => updateStatus(r.id, "confirmed")} className="bg-emerald-600 hover:bg-emerald-700 h-8">確定する</Button>
                                                )}
                                                {r.status !== 'cancelled' && (
                                                    <Button size="sm" variant="outline" onClick={() => updateStatus(r.id, "cancelled")} className="h-8 text-stone-500 hover:text-red-600">ｷｬﾝｾﾙ済</Button>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
