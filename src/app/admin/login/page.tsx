"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock } from "lucide-react";

export default function AdminLogin() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const res = await fetch("/api/admin/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (data.success) {
                router.push("/admin");
                router.refresh();
            } else {
                setError(data.error || "ログインに失敗しました");
            }
        } catch (err) {
            setError("通信エラーが発生しました");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-stone-100 px-4 fixed inset-0 z-[100]">
            <Card className="w-full max-w-md shadow-xl border-stone-200">
                <CardHeader className="text-center pb-2">
                    <div className="mx-auto w-12 h-12 bg-emerald-100 text-emerald-600 flex items-center justify-center rounded-full mb-4">
                        <Lock className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-2xl text-stone-800">管理者ログイン</CardTitle>
                </CardHeader>
                <CardContent>
                    {error && <div className="bg-red-50 text-red-600 text-sm p-3 rounded-md mb-4 text-center font-medium">{error}</div>}
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-stone-700 mb-1">メールアドレス</label>
                            <input
                                type="email"
                                required
                                className="w-full border border-stone-300 rounded-md p-2 focus:ring-2 focus:ring-emerald-500 outline-none"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-stone-700 mb-1">パスワード</label>
                            <input
                                type="password"
                                required
                                className="w-full border border-stone-300 rounded-md p-2 focus:ring-2 focus:ring-emerald-500 outline-none"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                        <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 mt-2" disabled={loading}>
                            {loading ? "ログイン中..." : "ログイン"}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
