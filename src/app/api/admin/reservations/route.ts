import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const dateStr = searchParams.get("date"); // YYYY-MM-DD
        const status = searchParams.get("status");

        const where: any = {};
        if (dateStr) {
            const startOfDay = new Date(dateStr);
            startOfDay.setHours(0, 0, 0, 0);
            const endOfDay = new Date(dateStr);
            endOfDay.setHours(23, 59, 59, 999);
            where.start_time = { gte: startOfDay, lte: endOfDay };
        }
        if (status) {
            where.status = status;
        }

        const reservations = await prisma.reservation.findMany({
            where,
            orderBy: { start_time: "desc" },
            include: { menu: true }
        });

        return NextResponse.json({ success: true, reservations });
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
    }
}
