"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";

export default function AdminContents() {
    const [contents, setContents] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState("faq");

    const fetchContents = (type: string) => {
        setLoading(true);
        fetch(`/api/admin/contents?type=${type}`)
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setContents(data.contents);
                }
            })
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        fetchContents(activeTab);
    }, [activeTab]);

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-stone-800">コンテンツ管理</h1>
                <Button className="bg-emerald-600 hover:bg-emerald-700">＋ 新規作成 (準備中)</Button>
            </div>

            <div className="flex gap-2 mb-6 border-b border-stone-200 pb-2">
                {[
                    { id: "faq", label: "よくある質問" },
                    { id: "review", label: "口コミ" },
                    { id: "notice", label: "お知らせ" },
                ].map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-4 py-2 rounded-t-lg font-medium transition-colors ${activeTab === tab.id ? "bg-emerald-600 text-white" : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <Card className="bg-white border-stone-200">
                <CardContent className="p-0">
                    {loading ? (
                        <div className="p-8 text-stone-500">読み込み中...</div>
                    ) : contents.length === 0 ? (
                        <div className="p-8 text-stone-500">データがありません</div>
                    ) : (
                        <table className="w-full text-sm text-left border-collapse">
                            <thead>
                                <tr className="border-b border-stone-200 bg-stone-50">
                                    <th className="py-3 px-4 font-normal w-24">公開状態</th>
                                    <th className="py-3 px-4 font-normal">タイトル</th>
                                    <th className="py-3 px-4 font-normal">作成日</th>
                                    <th className="py-3 px-4 font-normal text-right">操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contents.map(c => (
                                    <tr key={c.id} className="border-b border-stone-100 hover:bg-stone-50">
                                        <td className="py-3 px-4">
                                            {c.is_published
                                                ? <span className="text-emerald-600 font-bold text-xs bg-emerald-50 px-2 py-1 rounded">公開済</span>
                                                : <span className="text-stone-500 font-bold text-xs bg-stone-100 px-2 py-1 rounded">非公開</span>}
                                        </td>
                                        <td className="py-3 px-4 font-medium text-stone-800">{c.title}</td>
                                        <td className="py-3 px-4 text-stone-500">{format(new Date(c.created_at), "yyyy/MM/dd")}</td>
                                        <td className="py-3 px-4 text-right space-x-2">
                                            <Button size="sm" variant="outline" className="h-8">編集</Button>
                                            <Button size="sm" variant="outline" className="h-8 text-red-600 hover:text-red-700">削除</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
