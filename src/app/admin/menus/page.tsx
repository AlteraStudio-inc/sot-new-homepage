"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AdminMenus() {
    const [menus, setMenus] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchMenus = () => {
        setLoading(true);
        fetch("/api/admin/menus")
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setMenus(data.menus);
                }
            })
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        fetchMenus();
    }, []);

    const toggleActive = async (id: string, current: boolean) => {
        try {
            await fetch(`/api/admin/menus/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ is_active: !current })
            });
            fetchMenus();
        } catch (e) { }
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-stone-800">メニュー管理</h1>
                {/* 新規追加モーダルは省略しアラートで代用または今後の実装とする */}
                <Button className="bg-emerald-600 hover:bg-emerald-700">＋ 新規追加 (準備中)</Button>
            </div>

            <div className="grid gap-4">
                {loading ? <p>読み込み中...</p> : menus.map((m) => (
                    <Card key={m.id} className={`bg-white border-stone-200 transition-opacity ${!m.is_active ? 'opacity-50' : ''}`}>
                        <CardHeader className="py-4">
                            <div className="flex justify-between items-center">
                                <CardTitle className="text-lg flex items-center gap-2">
                                    <span className="text-stone-400 font-normal">[{m.target}]</span> {m.name}
                                    {!m.is_active && <span className="text-xs bg-stone-200 text-stone-600 px-2 py-0.5 rounded ml-2">非公開</span>}
                                </CardTitle>
                                <div className="space-x-2">
                                    <Button size="sm" variant="outline" onClick={() => toggleActive(m.id, m.is_active)}>
                                        {m.is_active ? "非公開にする" : "公開する"}
                                    </Button>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-xl font-bold mb-2">&yen;{m.price.toLocaleString()} <span className="text-sm font-normal text-stone-500">/ 所要 {m.duration_minutes}分</span></div>
                            <p className="text-sm text-stone-600">{m.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
