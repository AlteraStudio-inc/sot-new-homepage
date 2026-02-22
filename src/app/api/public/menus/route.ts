import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    try {
        const menus = await prisma.menu.findMany({
            where: { is_active: true },
            orderBy: { order: "asc" },
        });
        return NextResponse.json({ success: true, menus });
    } catch (error) {
        console.error("GET /api/public/menus error", error);
        return NextResponse.json({ error: "Failed to fetch menus" }, { status: 500 });
    }
}
