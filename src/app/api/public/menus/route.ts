import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    try {
        const menus = [
            {
                id: "1",
                name: "初回検査＋SOT整体＋脳幹療法",
                description: "初回はカウンセリング込みで60分程度。初回検査料と施術料が含まれます。",
                price: 8800,
                duration_minutes: 60,
                target: "first_time",
                is_active: true,
                order: 1,
            },
            {
                id: "2",
                name: "SOT整体＋脳幹療法（2回目以降）",
                description: "2回目以降の基本となる施術です。ソフトで痛みのない施術で心と身体を整えます。",
                price: 6600,
                duration_minutes: 40,
                target: "returning",
                is_active: true,
                order: 2,
            },
            {
                id: "3",
                name: "小学生以下のお子さん（SOT整体＋脳幹療法）",
                description: "小学生以下のお子さんへの施術です。",
                price: 5500,
                duration_minutes: 30,
                target: "both",
                is_active: true,
                order: 3,
            }
        ];
        return NextResponse.json({ success: true, menus });
    } catch (error) {
        console.error("GET /api/public/menus error", error);
        return NextResponse.json({ error: "Failed to fetch menus" }, { status: 500 });
    }
}
