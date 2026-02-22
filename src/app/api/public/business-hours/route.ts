import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    try {
        const hours = await prisma.businessHour.findMany({
            orderBy: { day_of_week: "asc" },
        });

        // For now, getting only upcoming holidays (from today)
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const holidays = await prisma.holiday.findMany({
            where: {
                date: { gte: today }
            },
            orderBy: { date: "asc" }
        });

        return NextResponse.json({ success: true, hours, holidays });
    } catch (error) {
        console.error("GET /api/public/business-hours error", error);
        return NextResponse.json({ error: "Failed to fetch business hours" }, { status: 500 });
    }
}
