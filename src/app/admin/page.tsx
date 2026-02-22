"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";
import { CheckCircle2, Calendar as CalendarIcon, Users } from "lucide-react";

export default function AdminDashboard() {
    const [reservations, setReservations] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/admin/reservations")
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setReservations(data.reservations.slice(0, 10)); // Just 10 upcoming for dashboard
                }
            })
            .finally(() => setLoading(false));
    }, []);

    const pendingCount = reservations.filter(r => r.status === "pending").length;

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-stone-800 mb-6">ダッシュボード</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <Card className="bg-white border-stone-200">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-stone-500">本日の予約</CardTitle>
                        <CalendarIcon className="w-4 h-4 text-stone-400" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-stone-800">
                            {reservations.filter(r => new Date(r.start_time).getDate() === new Date().getDate() && r.status !== 'cancelled').length} 件
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-white border-stone-200">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-stone-500">未確認の予約</CardTitle>
                        <CheckCircle2 className="w-4 h-4 text-amber-500" />
                    </CardHeader>
                    <CardContent>
                        <div className={`text-2xl font-bold ${pendingCount > 0 ? "text-amber-600" : "text-stone-800"}`}>
                            {pendingCount} 件
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-white border-stone-200">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-stone-500">総予約数</CardTitle>
                        <Users className="w-4 h-4 text-emerald-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-stone-800">
                            {reservations.length} 件 (直近)
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Card className="bg-white border-stone-200">
                <CardHeader>
                    <CardTitle className="text-lg">直近の予約一覧</CardTitle>
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
                                    <tr className="border-b border-stone-200 text-stone-500">
                                        <th className="py-3 px-4 font-normal">状態</th>
                                        <th className="py-3 px-4 font-normal">日時</th>
                                        <th className="py-3 px-4 font-normal">お名前</th>
                                        <th className="py-3 px-4 font-normal">コース</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {reservations.map(r => (
                                        <tr key={r.id} className="border-b border-stone-100 hover:bg-stone-50">
                                            <td className="py-3 px-4">
                                                {r.status === "pending" && <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs font-bold">未確認</span>}
                                                {r.status === "confirmed" && <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full text-xs font-bold">確定</span>}
                                                {r.status === "cancelled" && <span className="bg-stone-100 text-stone-500 px-2 py-1 rounded-full text-xs font-bold">ｷｬﾝｾﾙ</span>}
                                            </td>
                                            <td className="py-3 px-4 font-medium text-stone-700">
                                                {format(new Date(r.start_time), "MM/dd HH:mm")}
                                            </td>
                                            <td className="py-3 px-4">{r.customer_name}</td>
                                            <td className="py-3 px-4 max-w-[200px] truncate text-stone-500 relative" title={r.menu.name}>
                                                {r.is_first_time ? <span className="text-emerald-600 font-bold mr-1">[初]</span> : ""}
                                                {r.menu.name}
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
