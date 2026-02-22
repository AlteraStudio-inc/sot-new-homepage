"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, CalendarDays, Clock, ListOrdered, FileText, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AdminSidebar() {
    const pathname = usePathname();
    const router = useRouter();

    // Login page should not show sidebar
    if (pathname === "/admin/login") return null;

    const handleLogout = async () => {
        await fetch("/api/admin/auth/logout", { method: "POST" });
        router.push("/admin/login");
        router.refresh();
    };

    const navs = [
        { name: "ダッシュボード", href: "/admin", icon: LayoutDashboard },
        { name: "予約管理", href: "/admin/reservations", icon: CalendarDays },
        { name: "営業時間・休日", href: "/admin/settings", icon: Clock },
        { name: "メニュー管理", href: "/admin/menus", icon: ListOrdered },
        { name: "コンテンツ管理", href: "/admin/contents", icon: FileText },
    ];

    return (
        <aside className="fixed inset-y-0 left-0 z-50 w-64 bg-stone-900 text-stone-300 hidden lg:flex flex-col">
            <div className="h-16 flex items-center px-6 bg-stone-950 text-white font-bold text-lg tracking-wider">
                予約システム管理
            </div>
            <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
                {navs.map((nav) => {
                    const isActive = pathname === nav.href;
                    return (
                        <Link
                            key={nav.name}
                            href={nav.href}
                            className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-colors ${isActive
                                    ? "bg-emerald-600 text-white font-medium"
                                    : "hover:bg-stone-800 hover:text-white"
                                }`}
                        >
                            <nav.icon className="w-5 h-5 shrink-0" />
                            {nav.name}
                        </Link>
                    );
                })}
            </nav>
            <div className="p-4 border-t border-stone-800">
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 px-3 py-2 w-full rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors text-left"
                >
                    <LogOut className="w-5 h-5 shrink-0" />
                    ログアウト
                </button>
            </div>
        </aside>
    );
}
